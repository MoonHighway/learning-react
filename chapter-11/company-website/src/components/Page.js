import React from 'react'
import {MainMenu} from './ui/menus'
import '../stylesheets/Page.scss'

const Page = ({children}) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>

export default Page
