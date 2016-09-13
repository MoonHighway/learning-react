import React from 'react'

import {
    Router, Route,
    Redirect, IndexRoute,
    hashHistory
} from 'react-router'

import {
    Home, About, Company,
    History, Services, Location,
    Whoops404, Events, Products,
    Contact
} from './components/ui/pages'

import Page from './components/Page'

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Redirect from="history" to="/about/history"/>
        <Redirect from="services" to="/about/services"/>
        <Redirect from="location" to="/about/location"/>
        <Route path="/" component={Page}>
            <Route path="about" component={About}>
                <IndexRoute component={Company}/>
                <Route path="history" component={History}/>
                <Route path="services" component={Services}/>
                <Route path="location" component={Location}/>
            </Route>
            <Route path="events" component={Events}/>
            <Route path="products" component={Products}/>
            <Route path="contact" component={Contact}/>
        </Route>
        <Route path="*" component={Whoops404}/>
    </Router>
)