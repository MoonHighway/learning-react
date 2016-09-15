import { compose } from 'redux'

const sortByDate = field =>
    (a, b) => new Date(b[field]) - new Date(a[field])

const sortByString = field =>
    (a, b) => (a[field].toLowerCase() < b[field].toLowerCase()) ? -1 : 1

const sortByNumber = field =>
    (a, b) => b[field] - a[field]

const whichSort = (type, field) =>
    (type === "date") ?
        sortByDate(field) :
        (type === "string") ?
            sortByString(field) :
            sortByNumber(field)

export const sortFunction = sort =>
    (sort === "SORTED_BY_TITLE") ?
        whichSort("string", "title") :
        (sort === "SORTED_BY_RATING") ?
            whichSort("number", "rating") :
            whichSort("date", "timestamp")

const getSortState = (sortBy = "date",
                      stateHash = {
                          date: "SORTED_BY_DATE",
                          title: "SORTED_BY_TITLE",
                          rating: "SORTED_BY_RATING"
                      }) => stateHash[sortBy]

const locateSortFunction = compose(
    sortFunction,
    getSortState
)

export const sortColors = (colors, sortBy) => compose(
    fn => [...colors].sort(fn),
    locateSortFunction
)(sortBy)

export const getFirstArrayItem = array => array[0]

export const filterArrayById = (array, id) =>
    array.filter(item => item.id === id)

export const findById = compose(
    getFirstArrayItem,
    filterArrayById
)