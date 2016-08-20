import Menu from './ui/Menu'
import { NewColor } from './containers'
import '../stylesheets/APP.scss'

const App = ({children, location}) =>
    <div className="app">
        <Menu path={location.pathname} />
        <NewColor />
        {children}
    </div>

export default App