Passing the Store via Context
=====================
We can set up a root component that holds the store in a React feature called context. Context allows us 
to pass variables to components without having to explicitly pass them as properties. Any child component can 
access these context variables.

Demo
-------------
[Demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-09/color-organizer-context/dist/index.html)

Important Files
-------------

* index ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-context/src/index.js))
* App ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-context/src/components/App.js))
* SortMenu ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-context/src/components/SortMenu.js))
* AddColorForm ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-context/src/components/AddColorForm.js))
* Color ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-context/src/components/Color.js))

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