import HomeIcon from 'react-icons/lib/fa/home'
import { Link, hashHistory } from 'react-router'
import '../../stylesheets/menus.scss'

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}

const addSelectedStyle = (pathname, path) =>
    (pathname === path) ? selectedStyle : {}


export const MainMenu = () =>
    <nav className="main-menu">
        <Link to="/"><HomeIcon/></Link>
        <Link to="about" activeStyle={selectedStyle}>[About]</Link>
        <Link to="events" activeStyle={selectedStyle}>[Events]</Link>
        <Link to="products" activeStyle={selectedStyle}>[Products]</Link>
        <Link to="contact" activeStyle={selectedStyle}>[Contact Us]</Link>
    </nav>


export const AboutMenu = ({pathname}) =>
    <div className="about-menu">
        <li>
            <Link to="/about"
                  activeStyle={addSelectedStyle(pathname, '/about')}>
                [Company]
            </Link>
        </li>
        <li>
            <Link to="/about/history"
                  activeStyle={selectedStyle}>
                [History]
            </Link>
        </li>
        <li>
            <Link to="/about/services"
                  activeStyle={selectedStyle}>
                [Services]
            </Link>
        </li>
        <li>
            <Link to="/about/location"
                  activeStyle={selectedStyle}>
                [Location]
            </Link>
        </li>
    </div>


export const HomeLink = ({path}) =>
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
    (path) ? <li>{path}</li> : <span />


export const Breadcrumbs = ({ routes=[] }) =>
    <ul className="breadcrumbs">
        {routes.map((route, i) =>
            (route.path === '/') ?
                <HomeLink path={route.path}/> :
                (route.path && i < (routes.length-1)) ?
                    <SelectableRoute path={route.path}/> :
                    <SelectedRoute path={route.path}/>
        )}
    </ul>

