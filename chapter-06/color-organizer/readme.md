Color Organizer React
=====================
The Color Organizer allows users to add, name, rate, and remove colors from their customized list. The entire state of
the color organizer can be represented with a single array.

```javascript
{
    colors: [
        {
            "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
            "title": "ocean at dusk",
            "color": "#00c4e2",
            "rating": 5
        },
        {
            "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
            "title": "lawn",
            "color": "#26ac56",
            "rating": 3
        },
        {
            "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
            "title": "bright red",
            "color": "#ff0000",
            "rating": 0
        }
    ]
}
```

Demo
-------------
[color organizer](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/color-organizer/dist/index.html)


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

Updates
-------------
We've updated this repo to use React 16. We've made the following updates to the
samples and examples:

### PropTypes Library
Since React 15, [PropTypes has been deprecated](https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html)
and it no longer ships with React. To use PropTypes as they are taught in the book,
you will need to install the `prop-types` library and load them from this module.

```
    npm install prop-types --save
```

#### Change
```
import { PropTypes } from 'react'
```

#### To
```javascript
import PropTypes from 'prop-types'
````

### Set State updater functions
In React 16, Fiber prioritizes updates and intermittently relinquishes control back
to the main JavaScript thread. This change has made using the previous state, `this.state`,
when calling `setState` problematic. To address this, `setState` [now accepts a function called
an updater](https://facebook.github.io/react/docs/react-component.html) as the first argument.
This function passes the previous state that you may need to use when creating the next state.

#### In [App.js](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/color-organizer/src/components/App.js) Change
```javascript
    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ]
        this.setState({colors})
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
            (color.id !== id) ?
                color :
                {
                    ...color,
                    rating
                }
        )
        this.setState({colors})
    }

    removeColor(id) {
        const colors = this.state.colors.filter(color => color.id !== id)
        this.setState({colors})
    }
```


### To
```javascript
    addColor(title, color) {
        this.setState(prevState => ({
            colors: [
                ...prevState.colors,
                {
                    id: v4(),
                    title,
                    color,
                    rating: 0
                }
            ]
        }))
    }

    rateColor(id, rating) {
        this.setState(prevState => ({
            colors: prevState.colors.map(color =>
                (color.id !== id) ?
                    color :
                    {
                        ...color,
                        rating
                    }
            )
        }))
    }

    removeColor(id) {
        this.setState(prevState => ({
          colors: prevState.colors.filter(color => color.id !== id)
        }))
    }
```
