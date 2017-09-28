import '../../stylesheets/Menu.scss'
import PropTypes from 'prop-types'
import { sortColors } from '../actions'

const options = {
    date: "SORTED_BY_DATE",
    title: "SORTED_BY_TITLE",
    rating: "SORTED_BY_RATING"
}

const SortMenu = ({ store }) =>
    <nav className="menu">
        <h1>Sort Colors</h1>
        {Object.keys(options).map((item, i) =>
            <a key={i}
               href="#"
               className={(store.getState().sort === options[item]) ? "selected" : null}
               onClick={e => {
                   e.preventDefault()
                   store.dispatch(sortColors(options[item]))
               }}>{item}</a>
        )}
    </nav>

SortMenu.propTypes = {
    store: PropTypes.object
}

export default SortMenu
