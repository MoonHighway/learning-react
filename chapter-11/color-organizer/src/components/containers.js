import { connect } from 'react-redux'
import { compose } from 'redux'
import ColorList from './ui/ColorList'
import ColorDetails from './ui/ColorDetails'
import AddColorForm from './ui/AddColorForm'
import { addColor, rateColor, removeColor } from '../actions'
import { getColorByLocation } from '../lib/array-helpers'
import { sortColors } from '../lib/array-helpers'

export const NewColor = connect(
    null,
    dispatch =>
        ({
            onNewColor(title, color) {
                dispatch(addColor(title, color))
            }
        })
)(AddColorForm)

export const Colors = connect(
    ({colors}, {location}) =>
        ({
            colors: sortColors(colors, location.pathname.replace('/sort/', ''))
        }),
    dispatch =>
        ({
            onRemove(id) {
                dispatch(removeColor(id))
            },
            onRate(id, rating) {
                dispatch(rateColor(id, rating))
            }
        })
)(ColorList)

export const Color = connect(
    ({ colors }, { location }) =>
        ({
            ...getColorByLocation(colors, location)
        })
)(ColorDetails)