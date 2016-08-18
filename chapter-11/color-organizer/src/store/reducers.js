import C from '../constants'

export const color = (state = {}, action={ type: null }) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            }
        case C.RATE_COLOR:
            return (state.id !== action.id) ? state :
            {
                ...state,
                rating: action.rating
            }
        default :
            return state
    }
}

export const colors = (state = [], action={ type: null }) => {
    switch (action.type) {
        case C.ADD_COLOR :
            return [
                ...state,
                color({}, action)
            ]
        case C.RATE_COLOR :
            return state.map(
                c => color(c, action)
            )
        case C.REMOVE_COLOR :
            return state.filter(
                c => c.id !== action.id
            )
        default:
            return state
    }
}