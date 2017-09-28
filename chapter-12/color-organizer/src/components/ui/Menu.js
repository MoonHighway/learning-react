import PropTypes from 'prop-types'
import { NavLink as Link } from 'react-router-dom'
import '../../stylesheets/Menu.scss'

const selectedStyle = { color: 'red' }

const Menu = ({ sort }) =>
    <nav className="menu">
        <Link to="/" activeStyle={(sort === '/') ? selectedStyle : {}}>date</Link>
        <Link to="/sort/title" activeStyle={selectedStyle}>title</Link>
        <Link to="/sort/rating" activeStyle={selectedStyle}>rating</Link>
    </nav>

Menu.propTypes = {
    sort: PropTypes.string
}

export default Menu
