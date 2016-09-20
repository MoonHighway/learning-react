import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import fs from 'fs'
import { Provider } from 'react-redux'
import { compose } from 'redux'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import api from './color-api'
import App from '../components/App'
import storeFactory from '../store'
import initialState from '../../data/initialState.json'
import routes from '../routes'

const defaultStyles = fs.readFileSync(path.join(__dirname, '../../dist/assets/bundle.css'))
const fileAssets = express.static(path.join(__dirname, '../../dist/assets'))

const serverStore = storeFactory(true, initialState)

serverStore.subscribe(() => fs.writeFile(
    path.join(__dirname, '../../data/initialState.json'),
    JSON.stringify(serverStore.getState()),
    error => (error) ? console.log("Error saving state!", error) : null
    )
)

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next()
}

const addStoreToRequestPipeline = (req, res, next) => {
    req.store = serverStore
    next()
}

const makeClientStoreFrom = store => renderProps =>
    ({
        store: storeFactory(false, store.getState()),
        renderProps
    })

const renderComponentsToHTML = ({renderProps, store}) =>
    ({
        state: store.getState(),
        css: defaultStyles,
        html: renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>
        )
    })

const buildHTMLPage = ({html, state, css}) => `
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" />
        <meta charset="utf-8">
        <title>Universal Color Organizer</title>
        <style>${css}</style>
    </head>
    <body>
        <div id="react-container">${html}</div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(state)}
        </script>
        <script src="/bundle.js"></script>
    </body>
</html>
`

const htmlResponse = compose(
    buildHTMLPage,
    renderComponentsToHTML,
    makeClientStoreFrom(serverStore)
)

const successfulResponse = (res, renderProps) =>
    res.status(200).send(htmlResponse(renderProps))

const errorResponse = (res, error) =>
    res.status(500).send(error.message)

const redirectResponse = (res, location) =>
    res.redirect(302, location)

const notFoundResponse = res =>
    res.status(404).send('Not found')

const matchRoutes = (req, res) =>
    match({routes, location: req.url}, (error, redirectLocation, renderProps) =>
        (error) ?
            errorResponse(res, error) :
            (redirectLocation) ?
                redirectResponse(res, redirectLocation.search) :
                (renderProps) ?
                    successfulResponse(res, renderProps) :
                    notFoundResponse()
    )

export default express()
    .use(bodyParser.json())
    .use(logger)
    .use(fileAssets)
    .use(addStoreToRequestPipeline)
    .use('/api', api)
    .use(matchRoutes)