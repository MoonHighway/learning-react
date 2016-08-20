import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import App from './components/App'
import Whoops404 from './components/ui/Whoops404'
import { Colors, Color } from './components/containers'
import storeFactory from './store'

const store = storeFactory()

window.React = React
window.store = store

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Colors} />
                <Route path="/sort/:sort" component={Colors} />
            </Route>
            <Route path="/:id" component={Color}/>
            <Route path="*" component={Whoops404}/>
        </Router>
    </Provider>,
    document.getElementById('react-container')
)