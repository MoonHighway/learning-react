import { Menu, NewColor, Colors } from './containers'
import '!style!css!sass!postcss-loader!../stylesheets/APP.scss'

const App = () =>
    <div className="app">
        <Menu />
        <NewColor />
        <Colors />
    </div>

export default App