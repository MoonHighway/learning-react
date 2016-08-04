import { connect } from 'react-redux'
import AddColorForm from './ui/AddColorForm'
import SortMenu from './ui/SortMenu'
import ColorList from './ui/ColorList'
import actionCreators from '../actions'
import { sortFunction } from '../lib/array-helpers'


export const NewColor = connect(
    null,
    dispatch =>
        ({
            onNewColor(title, color) {
                var results = actionCreators.addColor(title,color)


                dispatch(actionCreators.addColor(title,color))
            }
        })
)(AddColorForm)

export const Menu = connect(
    state =>
        ({
            sort: state.sort
        }),
    dispatch =>
        ({
            onSelect(sortBy) {
                dispatch(actionCreators.sortColors(sortBy))
            }
        })
)(SortMenu)

export const Colors = connect(
    state =>
        ({
            colors: [...state.colors].sort(sortFunction(state.sort))
        }),
    dispatch =>
        ({
            onRemove(id) {
                dispatch(actionCreators.removeColor(id))
            },
            onRate(id, rating) {
                dispatch(actionCreators.rateColor(id, rating))
            }
        })
)(ColorList)