import Menu from './ui/Menu'
import { NewColor } from './containers'
import '../stylesheets/APP.scss'

const App = ({children, params}) =>
    <div className="app">
        <Menu sort={params.sort} />
        <NewColor />
        {children}
    </div>

export default App