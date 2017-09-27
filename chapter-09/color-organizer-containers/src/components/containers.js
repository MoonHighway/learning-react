import PropTypes from 'prop-types'
import AddColorForm from './ui/AddColorForm'
import SortMenu from './ui/SortMenu'
import ColorList from './ui/ColorList'
import { addColor, sortColors, rateColor, removeColor } from '../actions'
import { sortFunction } from '../lib/array-helpers'

export const NewColor = (props, { store }) =>
    <AddColorForm onNewColor={(title, color) =>
                      store.dispatch(addColor(title,color))
                  } />

NewColor.contextTypes = {
    store: PropTypes.object
}

export const Menu = (props, { store }) =>
    <SortMenu sort={store.getState().sort}
              onSelect={sortBy =>
                  store.dispatch(sortColors(sortBy))
              } />

Menu.contextTypes = {
    store: PropTypes.object
}

export const Colors = (props, { store }) => {
    const { colors, sort } = store.getState()
    const sortedColors = [...colors].sort(sortFunction(sort))
    return (
        <ColorList colors={sortedColors}
                   onRemove={id =>
                       store.dispatch( removeColor(id) )
                   }
                   onRate={(id, rating) =>
                       store.dispatch( rateColor(id, rating) )
                   }/>
    )
}

Colors.contextTypes = {
    store: PropTypes.object
}
