import React from 'react'
import {MainMenu} from './ui/menus'
import '../stylesheets/App.scss'

const App = ({location, children}) =>
    <div className="app">
        {(location.pathname !== '/') ?
            <MainMenu /> :
            ""
        }
        {children}
    </div>

export default App
