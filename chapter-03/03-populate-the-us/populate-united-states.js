/*  Promises
 **********************************************************************/
const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () => (request.status == 200) ? resolves(JSON.parse(request.response).results) : reject(Error(request.statusText))
    request.onerror = (err) => rejects(err)
    request.send()
})

/* Pure Functions
 **********************************************************************/
const compose = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg)
const pick = (field = "", object = {}) => object[field]
const pluck = (field, array) => array.map(object => pick(field, object))
const deepPluck = (field, array) => array.map(object => deepPick(field, object))

/* Recursive Function
 **********************************************************************/
const deepPick = (fields, object = {}) => {
    const [first, ...remaining] = fields.split(".")
    return (remaining.length) ?
        deepPick(remaining.join("."), object[first]) :
        object[first]
}

/* Higher Order Functions
 **********************************************************************/
const scopeMembers = scope => members => scope.members = members
const combineWith = (storage, key) => members => (storage[key]) ?
    [...members, ...JSON.parse(storage[key])] :
    members
const save = (storage, key) => data => {
    storage[key] = JSON.stringify(data);
    return data;
}
const logFieldsToConsole = (field, delimiter = ",") => members => {
    log(deepPluck(field, members).join(delimiter))
    return members;
}
const countMembersBy = countBy => members => {
    if (countBy.indexOf(".") !== -1) {
        return deepPluck(countBy, members).reduce((count, group) => {
            if (count[group]) {
                count[group]++
            } else {
                count[group] = 1
            }
            return count
        }, {})
    } else {
        return members.reduce((count, member) => {
            if (count[member[countBy]]) {
                count[member[countBy]]++;
            } else {
                count[member[countBy]] = 1;
            }
            return count;
        }, {})
    }
}

/* Console Helpers
 **********************************************************************/
const log = message => console.log(message)
const reset = () => sessionStorage.clear()
const logMembersToConsole = (members=[]) => {
    console.groupCollapsed(`${members.length} members`);
    log(members);
    console.groupEnd();
    return members;
}

/* Composed Function : putting it all together
 **********************************************************************/
const populate = count => {
    console.clear()
    getFakeMembers(count).then(
        compose(
            combineWith(sessionStorage, "members"),
            save(sessionStorage, "members"),
            scopeMembers(window),
            logMembersToConsole,
            logFieldsToConsole("name.first"),
            countMembersBy("location.state"),
            printStatesForMapping,
            save(sessionStorage, "map"),
            renderUSMap
        ),
        error => console.error(error)
    )
}

/* Integrating D3 US Map
 **********************************************************************/

const printStatesForMapping = stateCounts => Object.keys(stateCounts).reduce((obj, s)=> {
    obj[getStateNames()[s]] = {"fillKey": stateCounts[s]}
    return obj
}, {})

const renderUSMap = data => {
    let element = document.getElementById('target')
    element.innerHTML = ""
    var usa = new Datamap({
        scope: 'usa',
        element,
        fills: {
            1: '#D6F3FF',
            2: '#B3E8FF',
            3: '#74D4FC',
            4: '#EFFFD6',
            5: '#CEF299',
            6: '#FFD829',
            7: '#FCCACA',
            8: '#474EFF',
            9: '#FF8A8A',
            10: '#FF0000',
            defaultFill: '#EEEEEE'
        },
        data
    })
    usa.labels()
}

/* THE DOM
 **********************************************************************/
renderUSMap((sessionStorage.map) ? JSON.parse(sessionStorage.map) : null)
document.getElementById("reset").onclick = compose(
    reset,
    logMembersToConsole,
    renderUSMap
)

document.getElementById("populate").onclick = () =>
    populate(document.getElementById('add-citizens').value)

/* State Name Data
 **********************************************************************/
const getStateNames = () => {
    let states = {
        "AL": "Alabama",
        "AK": "Alaska",
        "AS": "American Samoa",
        "AZ": "Arizona",
        "AR": "Arkansas",
        "CA": "California",
        "CO": "Colorado",
        "CT": "Connecticut",
        "DE": "Delaware",
        "DC": "District Of Columbia",
        "FM": "Federated States Of Micronesia",
        "FL": "Florida",
        "GA": "Georgia",
        "GU": "Guam",
        "HI": "Hawaii",
        "ID": "Idaho",
        "IL": "Illinois",
        "IN": "Indiana",
        "IA": "Iowa",
        "KS": "Kansas",
        "KY": "Kentucky",
        "LA": "Louisiana",
        "ME": "Maine",
        "MH": "Marshall Islands",
        "MD": "Maryland",
        "MA": "Massachusetts",
        "MI": "Michigan",
        "MN": "Minnesota",
        "MS": "Mississippi",
        "MO": "Missouri",
        "MT": "Montana",
        "NE": "Nebraska",
        "NV": "Nevada",
        "NH": "New Hampshire",
        "NJ": "New Jersey",
        "NM": "New Mexico",
        "NY": "New York",
        "NC": "North Carolina",
        "ND": "North Dakota",
        "MP": "Northern Mariana Islands",
        "OH": "Ohio",
        "OK": "Oklahoma",
        "OR": "Oregon",
        "PW": "Palau",
        "PA": "Pennsylvania",
        "PR": "Puerto Rico",
        "RI": "Rhode Island",
        "SC": "South Carolina",
        "SD": "South Dakota",
        "TN": "Tennessee",
        "TX": "Texas",
        "UT": "Utah",
        "VT": "Vermont",
        "VI": "Virgin Islands",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"
    }
    return Object.keys(states).reduce((formattedStates, key) => {
        formattedStates[states[key].toLowerCase()] = key;
        return formattedStates;
    }, {})
}
