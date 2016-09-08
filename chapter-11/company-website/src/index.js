import React from 'react'
import routes from './routes'
import { render } from 'react-dom'

window.React = React

render(
    routes,
    document.getElementById('react-container')
)