const sortByDate = field =>
    (a, b) => new Date(b[field]) - new Date(a[field])

const sortByString = field =>
    (a, b) => (a[field].toLowerCase() < b[field].toLowerCase()) ? -1 : 1

const sortByNumber = field =>
    (a, b) => b[field] - a[field]

const sortBy = (type, field) =>
    (type === "date") ?
        sortByDate(field) :
        (type === "string") ?
            sortByString(field) :
            sortByNumber(field)

export const sortFunction = sort =>
    (sort === "SORTED_BY_TITLE") ?
        sortBy("string", "title") :
        (sort === "SORTED_BY_RATING") ?
            sortBy("number", "rating") :
            sortBy("date", "timestamp")