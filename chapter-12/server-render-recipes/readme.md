Server Rendered Recipes
=======================
Sample of an Isomorphic React application that renders content on the server and the client.

Clone and Install
-------------

#### Installation
Run this npm command to install dependencies:
```
$ npm install
```

#### Build
Run this script to build the `index-client.js` -> `./assets/bundle.js`:
```
$ npm run build
```

#### Build and Run
Run this command to start a webserver at [http://localhost:3000](http://localhost:3000):
```
$ npm start
```

Updates
--------
We've updated this repo to use React 16. React 16 handles server rendering more efficiently.
To take advantage of this in the client you will need to use the `hydrate` instead
of the `render function`.

#### Change [index-client](https://github.com/MoonHighway/learning-react/blob/master/chapter-12/server-render-recipes/index-client.js) From:
```javascript

    import React from 'react'
    import { render } from 'react-dom'

    ...

    render(
      <Menu recipes={__DATA__} />,
      document.getElementById("react-container")
    )

```

#### To:
```javascript

    import React from 'react'
    import { hydrate } from 'react-dom'

    ...

    hydrate(
        <Menu recipes={__DATA__} />,
        document.getElementById("react-container")
    )

```
