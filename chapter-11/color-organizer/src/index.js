import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, NavLink } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import storeFactory from './store'

const store = storeFactory()

window.React = React
window.store = store

// TODO: Setup Whoops404 Routes
// TODO: Change Readme, push all updates

render(
    <Provider store={store}>
       <HashRouter>
         <App />
       </HashRouter>
    </Provider>,
    document.getElementById('react-container')
)
