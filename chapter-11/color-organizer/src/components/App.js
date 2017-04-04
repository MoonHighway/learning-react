import { Route, Switch } from 'react-router-dom'
import Menu from './ui/Menu'
import Whoops404 from './ui/Whoops404'
import { Colors, Color, NewColor } from './containers'
import '../stylesheets/APP.scss'

const App = () =>
    <Switch>
        <Route exact path="/:id" component={Color} />
        <Route path="/"
            component={({match, location}) => (
                <div className="app">
                    <Menu sort={location.pathname.replace('/sort/', '')} />
                    <NewColor />
                    <Switch>
                        <Route exact path="/" component={Colors} />
                        <Route path="/sort/:sort" component={Colors} />
                        <Route component={Whoops404} />
                    </Switch>
                </div>
            )} />
    </Switch>

export default App
