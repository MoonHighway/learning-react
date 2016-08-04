import C from './constants'
import { v4 } from 'node-uuid'

export var addColor = (title, color) =>
    ({
        type: C.ADD_COLOR,
        id: v4(),
        title,
        color,
        timestamp: new Date().toString()
    })

export var removeColor = id =>
    ({
        type: C.REMOVE_COLOR,
        id
    })

export var rateColor = (id, rating) =>
    ({
        type: C.RATE_COLOR,
        id,
        rating
    })

export var sortColors = (sortBy="SORTED_BY_DATE") =>
    ({
        type: C.SORT_COLORS,
        sortBy
    })