import HomeIcon from 'react-icons/lib/fa/home'
import { Link, hashHistory } from 'react-router'

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}

const addSelectedClass = (pathname, path) =>
    (pathname === path) ? 'selected' : ''

export const AboutMenu = ({location}) =>
    <nav className="about-menu">
        <li>
            <Link to="/about"
                  className={addSelectedClass(location.pathname, '/about')}>
                Company
            </Link>
        </li>
        <li>
            <Link to="/about/history"
                  activeStyle={selectedStyle}>
                History
            </Link>
        </li>
        <li>
            <Link to="/about/services"
                  activeStyle={selectedStyle}>
                Services
            </Link>
        </li>
        <li>
            <Link to="/about/location"
                  activeStyle={selectedStyle}>
                Location
            </Link>
        </li>
    </nav>


export const HomeLink = ({ path }) =>
    <li>
        <Link to={path}>
            <HomeIcon/>
        </Link>
    </li>


export const SelectableRoute = ({path}) =>
    <li>
        <Link to={path}>{path}</Link>
    </li>


export const SelectedRoute = ({path}) =>
    <li>{path}</li>


export const Breadcrumbs = ({ routes }) =>
    <ul className="breadcrumbs">
        {routes.map((route, i) =>
            (route.path === '/') ?
                <HomeLink route={route} /> :
                (route.path && i === routes.length - 1) ?
                    <SelectedRoute route={route} /> :
                    <SelectableRoute route={route} />
        )}
    </ul>

export const MainMenu = () =>
    <nav className="main-menu">
        <Link to="/"><HomeIcon/></Link>
        <Link to="about" activeStyle={selectedStyle}>About</Link>
        <Link to="events" activeStyle={selectedStyle}>Events</Link>
    </nav>