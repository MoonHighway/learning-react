Universal Color Organizer
=====================
The final version of the color organizer app that runs on both the client and the server and reuses code between both environments.

Important Files
--------------

* Express App Configuration ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-12/color-organizer/src/server/app.js))
* Express Routes ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-12/color-organizer/src/server/color-api.js))
* Redux Thunks ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-12/color-organizer/src/actions.js))

Clone and Install
-------------

#### Installation
Run this npm command to install dependencies.
```
$ npm install
```

#### Build
Run this npm command to build the JavaScript Bundle
```
$ npm run build
```

#### Run
Run this npm command to build the JavaScript Bundle and open the browser to the app using the file api.
```
$ npm start
```

### Run Webpack Dev Serer
Run this command to start the app using the webpack dev server
```
$ npm run dev
```

Updates
--------
We've updated this repo to use React 16. React 16 handles server rendering more efficiently.
To take advantage of this in the client you will need to use the `hydrate` instead
of the `render function`.

#### Change [src/index](https://github.com/MoonHighway/learning-react/blob/master/chapter-12/color-organizer/src/index.js) From:
```javascript

    import React from 'react'
    import { render } from 'react-dom'

    ...

    console.log('rendered from here...')

    render(
        <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('react-container')
    )

```

#### To:
```javascript

    import React from 'react'
    import { hydrate } from 'react-dom'

    ...

    console.log('rendered from here...')

    hydrate(
        <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('react-container')
    )

```
