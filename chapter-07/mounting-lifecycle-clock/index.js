import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Clock from './clock'
const target = document.getElementById('react-container')

window.React = React

render(
    <Clock onClose={() => unmountComponentAtNode(target) }/>,
    target
)