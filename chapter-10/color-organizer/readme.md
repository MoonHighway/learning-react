Unit Testing the Color Organizer
=====================
In this section, we will demonstrate techniques that can be used to unit test the typical parts that make up React
Redux applications. This chapter will not only cover testing, but it will also cover tools that can be used to help
evaluate and improve your code as well as your tests.

Clone, Install, and Test
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

#### Run ESLINT
Run this command to lint the javascript source.
```
$ npm run lint
```

### Run Webpack Dev Serer
Run this command to start the app using the webpack dev server
```
$ npm run dev
```

#### Run Tests
Run this command to quickly run the tests without babel-node and without code coverage.
```
$ npm test
```

#### View Code Coverage
Run this command to view current code coverage report
```
$ npm run coverage
```

Updates
----------
We've updated this repo to use React 16 with enzyme 3. We've made the following updates to the samples and examples:

### Enzyme Adaptor changes
The biggest change that needs to be made to work with React 16 has to do with upgrading to enzyme 3,
the version of enzyme that supports React 16. An Adaptor is requred when using Enzyme 3. In order
to make the tests work with React 16, the following changes were made:

#### Change [Test Global Setup](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/__tests__/global.js) from:
```javascript
    import React from 'react'
    import deepFreeze from 'deep-freeze'

    global.React = React

    ...
```

#### TO
The `enzyme-adapter-react-16` npm needs to be installed:
```
  npm install --save-dev enzyme-adapter-react-16
```

Next, we need to configure enzyme and the adapter, it is easiest to do so in the
[global.js](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/__tests__/global.js) file where each test is setup:
```javascript
    import React from 'react'
    import deepFreeze from 'deep-freeze'
    import Enzyme from 'enzyme'
    import Adapter from 'enzyme-adapter-react-16'

    Enzyme.configure({ adapter: new Adapter() })

    global.React = React
    global.Enzyme = Enzyme

    ...
```

#### Finally
Everywhere we import enzyme's shallow or mount function, we need to reference this global
instance instead of importing the package. For example:

__Change__:
```javascript
   import { shallow, mount } from 'enzyme'
```

__T0__:
```javascript
   const { shallow, mount } = Enzyme
```

This change needs to occur in every component test that imports `enzyme`

### Children and childAt(index) Changes
In places where components are mounted into a wrapper and a click of that wrappers
children is simulated, we need to add the `.children()` function before selecting
a single child with `childAt(index)`. For Example:

#### Change From:
```javascript
   wrapper.childAt(3).simulate("click")
```

#### To:
```javascript
   wrapper.children().childAt(3).simulate("click")
```

This change occurs in numerous component tests.

### Setting Form Ref changes
In the `<AddColorForm />` UI component test, we set the value of the form using refs.
The ref function that is returned on a mounted wrapper is the node we are currently looking for.
There is no need to use `.get(0)` to select the node. For example:

#### Change From:
```javascript
    wrapper.ref('_title').get(0).value = 'test-color'
    wrapper.ref('_color').get(0).value = '#0000FF'

    ...

    expect(wrapper.ref('_title').get(0).value).toBe("")
```

#### To:
```javascript
    wrapper.ref('_title').value = 'test-color'
    wrapper.ref('_color').value = '#0000FF'

    ...

    expect(wrapper.ref('_title').value).toBe("")
```

### Shim to hide warnings
Finally testing React 16 components with enzyme 3 will display the following
warning across all of your tests:

#### Annoying Warning:
```
    console.error node_modules/fbjs/lib/warning.js:33
      Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills
```

#### Solution 1
One way to get rid of this warning is to execute jest with the `setupTestFrameworkScriptFile` flag: `jest --setupTestFrameworkScriptFile=raf/polyfill`

#### Solution 2
Create a file called `shim.js` and add it to the first item of the jest setup files array in `package.json`.
Don't forget to ignore the shim in the `modulePathIgnorePatterns` node.

__Shim.js__
```javascript
    global.requestAnimationFrame = callback => {
        setTimeout(callback, 0)
    }
```

__package.json__
```javascript
    "jest": {
      "setupFiles": [
        "./__tests__/shim.js",
        "./__tests__/global.js"
      ],
      "modulePathIgnorePatterns": [
        "shim.js",
        "global.js"
      ],
      "verbose": true,

      ...

```

For more information on React 16 migration with enzyme 3 you can checkout the [enzyme documentation](http://airbnb.io/enzyme/).
