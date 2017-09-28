import '../../stylesheets/ColorList.scss'
import PropTypes from 'prop-types'
import Color from './Color'
import { rateColor, removeColor } from '../actions'
import { sortFunction } from '../lib/array-helpers'

const ColorList = ({ store }) => {
    const { colors, sort } = store.getState()
    const sortedColors = [...colors].sort(sortFunction(sort))
    return (
        <div className="color-list">
            {(colors.length === 0) ?
                <p>No Colors Listed. (Add a Color)</p> :
                sortedColors.map(color =>
                    <Color key={color.id}
                        {...color}
                           onRate={(rating) =>
                               store.dispatch(
                                   rateColor(color.id, rating)
                               )
                       }
                           onRemove={() =>
                               store.dispatch(
                                   removeColor(color.id)
                               )
                       }
                    />
                )
            }
        </div>
    )
}

ColorList.propTypes = {
    store: PropTypes.object
}

export default ColorList
