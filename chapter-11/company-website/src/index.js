import React from 'react'
import App from './components/App'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Home, About, Company, History, Services, Location, Events, Whoops404 } from './components/ui/pages'

window.React = React

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}>
                <IndexRoute component={Company}/>
                <Route path="history" component={History}/>
                <Route path="services" component={Services}/>
                <Route path="location" component={Location}/>
            </Route>
            <Route path="events" component={Events}/>
        </Route>
        <Route path="*" component={Whoops404}/>
    </Router>,
    document.getElementById('react-container')
)