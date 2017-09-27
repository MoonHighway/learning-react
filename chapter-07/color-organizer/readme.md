Color Organizer Lifecycle
=====================
This is a modified version of the color organizer from the last chapter. The Color component has ben enhanced with
some updating lifecycle methods.

```javascript

    class Color extends Component {

        componentWillMount() {
            this.style = { backgroundColor: "#CCC" }
        }

        shouldComponentUpdate(nextProps) {
            const { rating } = this.props
            return rating !== nextProps.rating
        }

        componentWillUpdate(nextProps) {
            const { title, rating } = this.props
            this.style = null
            this.refs.title.style.backgroundColor = "red"
            this.refs.title.style.color = "white"
            alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
        }

        componentDidUpdate(prevProps) {
            const { title, rating } = this.props
            const status = (rating > prevProps.rating) ? 'better' : 'worse'
            console.log(`${title} is getting ${status}`)
            this.refs.title.style.backgroundColor = ""
            this.refs.title.style.color = "black"
        }

        render() {
            const { title, color, rating, onRemove, onRate} = this.props
            return (
                <section className="color" style={this.style}>
                    <h1 ref="title">{title}</h1>
                    <button onClick={onRemove}>X</button>
                    <div className="color"
                         style={{ backgroundColor: color }}>
                    </div>
                    <div>
                        <StarRating starsSelected={rating} onRate={onRate}/>
                    </div>
                </section>
            )
        }

    }

```

Demo
-------------
[Demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/color-organizer/dist/index.html)


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
We've updated this repo to use React 16. These updates include using the `prop-types` library
and using an updater function when setting state. Refer to the [Chapter 6 Color Organizer Readme](https://github.com/MoonHighway/learning-react/tree/master/chapter-06/color-organizer)
for details about these changes.
