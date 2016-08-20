import { PropTypes } from 'react'
import { Link } from 'react-router'
import '../../stylesheets/Menu.scss'

const selectedStyle = { color: 'red' }

const Menu = ({ path }) =>
    <nav className="menu">
        <Link to="/" style={(path === '/') ? selectedStyle : null}>date</Link>
        <Link to="/sort/title" activeStyle={selectedStyle}>title</Link>
        <Link to="/sort/rating" activeStyle={selectedStyle}>rating</Link>
    </nav>

export default Menu