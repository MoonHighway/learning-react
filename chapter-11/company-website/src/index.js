import React from 'react'
import { render } from 'react-dom'

import {
  HashRouter as Router,
  Route,
  NavLink as Link,
  Switch
} from 'react-router-dom'

import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404
} from './pages'

window.React = React

render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route component={Whoops404} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('react-container')
)
