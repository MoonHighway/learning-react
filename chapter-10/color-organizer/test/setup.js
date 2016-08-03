import jsdom from 'jsdom'
import React from 'react'

process.env.NODE_ENV = 'test'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.localStorage = {
    "redux-store": false
}
global.React = React
global.navigator = {userAgent: 'node.js'}