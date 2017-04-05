Color Organizer Redux
=====================
Redux has emerged as one of the clear winners in the field of Flux or Flux-like libraries. Redux is based on Flux,
and it was designed to tackle the challenge of understanding how data changes flow through your application.

Demo
-------------
You can interact with the store from the console in this demo:

```javascript

    // Dispatch an addColor action
    store.dispatch(
      addColor("Bonkers Blue", "#1122FF")
    )

    // Rate an existing color (check state for ids)
    store.dispatch(
      rateColor("8658c1d0-9eda-4a90-95e1-8001e8eb6036", 5)
    )

    // Sort colors by title or date or rating
    store.dispatch(
      sortColors("title")
    )

    // Change a colors rating (check state for ids)
    store.dispatch(
      removeColor("a5685c39-6bdc-4727-9188-6c9a00bf7f95")
    )

    // Get the store's current State
    store.getState()

```

[Demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-08/color-organizer-redux/dist/index.html)


#### Installation
Run this npm command to install dependencies:
```
$ npm install
```

#### Build
Run this npm command to build the JavaScript bundle:
```
$ npm run build
```

#### Run
Run this npm command to build the JavaScript bundle and open the browser to the app using the file api:
```
$ npm start
```
