import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App'
import Whoops404 from './components/ui/Whoops404'
import { Colors, Color } from './components/containers'

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Colors}/>
            <Route path="/sort/:sort" component={Colors}/>
        </Route>
        <Route path="/:id" component={Color}/>
        <Route path="*" component={Whoops404}/>
    </Router>
)

export default routes