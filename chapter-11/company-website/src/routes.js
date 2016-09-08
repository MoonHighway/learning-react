import React from 'react'

import {
    Router,
    Route,
    hashHistory,
    IndexRoute
} from 'react-router'

import Page from './components/Page'
import {
    Home,
    About,
    Company,
    History,
    Services,
    Location,
    Events,
    Whoops404,
    UpcomingEvents,
    EventDetails
} from './components/ui/pages'

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/" component={Page}>
            <Route path="about" component={About}>
                <IndexRoute component={Company}/>
                <Route path="history" component={History}/>
                <Route path="services" component={Services}/>
                <Route path="location" component={Location}/>
            </Route>
            <Route path="events" component={Events}>
                <IndexRoute component={UpcomingEvents}/>
                <Route path="/:id" component={EventDetails}/>
            </Route>
        </Route>
        <Route path="*" component={Whoops404}/>
    </Router>
)