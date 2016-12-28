import C from './constants'
import { v4 } from 'uuid'

export const addColor = (title, color) =>
    ({
        type: C.ADD_COLOR,
        id: v4(),
        title,
        color,
        timestamp: new Date().toString()
    })

export const removeColor = id =>
    ({
        type: C.REMOVE_COLOR,
        id
    })

export const rateColor = (id, rating) =>
    ({
        type: C.RATE_COLOR,
        id,
        rating
    })

export const sortColors = (sortBy="SORTED_BY_DATE") =>
    ({
        type: C.SORT_COLORS,
        sortBy
    })
