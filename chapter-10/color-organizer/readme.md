Unit Testing the Color Organizer
=====================
In this section, we will demonstrate techniques that can be used to unit test the typical parts that make up React 
Redux applications. This chapter will not only cover testing, but it will also cover tools that can be used to help 
evaluate and improve your code as well as your tests.

Book Tests
-------------
All of the components are tested in this project and are here for you to reveiw. However, the book only covers
a few of the tests found in this project. There are the files covered by the book: 

* ESLint configuration file ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/.eslintrc.yml))
* color reducer ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/store/reducers.js) 
| [SPEC](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/test/store/reducers/color-spec.js))
* colors reducer ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/store/reducers.js)
| [SPEC](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/test/store/reducers/colors-spec.js))
* sort reducer ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/store/reducers.js)
| [SPEC](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/test/store/reducers/sort-spec.js))
* store with action creators ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/actions.js)
| [SPEC](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/actions-spec.js))
* Star Component ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/components/ui/Star.js) 
 [SPEC](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/test/components/ui/Star-spec.js))
* StarRating Component ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/components/ui/StarRating.js) 
[SPEC](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/test/components/ui/StarRating-spec.js))
* Testing HOC's ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/components/HOC/Expandable.js) 
[SPEC](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/test/components/HOC/Expandable-spec.js))


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

#### Run Shallow Tests
Run this command to quickly run the tests without babel-node and without code coverage.
```
$ npm run shallow-test
```

#### Run Individual Spec
Send the grep flag to the shallow test to run specs that match the grep value.
```
$ npm run shallow-test -- --grep "<Star />"
```

#### Run Tests with Code Coverage
Run this npm command to build the JavaScript Bundle and open the browser to the app using the file api.
```
$ npm test
```

#### View Code Coverage
Run this command to view current code coverage report
```
$ npm run coverage
```