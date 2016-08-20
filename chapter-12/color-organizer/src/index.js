import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import storeFactory from './store'

window.React = React

render(
    <Provider store={storeFactory(false, window.__INITIAL_STATE__)}>
        {routes}
    </Provider>,
    document.getElementById('react-container')
)