Chapter 4 : Pure React
==================
If you take the time to understand what is going on behind the scenes you will be more efficient, especially when
it comes time to debug.

Samples
--------

### Page Setup

  1. HTML Document Setup ([code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/01-page-setup/01-page-setup.html))
  2. HTML for a Recipe ([demo](http://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/01-page-setup/02-baked-salmon.html),
[code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/update-localize-samples/chapter-04/01-page-setup/02-baked-salmon))

### React Elements

  1. Rendering an Element ([demo](https://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/02-react-elements/01-elements.html), [code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/02-react-elements/01-elements.html), [bin](http://jsbin.com/fumiyu/1/edit?js,output))
  2. Rendering an Element with Properties ([demo](https://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/02-react-elements/02-elements.html), [code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/02-react-elements/02-elements.html), [bin](http://jsbin.com/fumiyu/2/edit?js,output))
  3. Rendering Lists ([demo](https://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/02-react-elements/03-elements.html), [code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/02-react-elements/03-elements.html), [bin](http://jsbin.com/fumiyu/3/edit?js,output))
  4. Mapping over Elements ([demo](https://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/02-react-elements/04-elements.html), [code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/02-react-elements/04-elements.html), [bin](http://jsbin.com/fumiyu/4/edit?js,output))
  5. Adding Keys ([demo](https://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/02-react-elements/05-elements.html), [code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/02-react-elements/05-elements.html), [bin](http://jsbin.com/fumiyu/5/edit?js,output))

### React Components

  1. createReactClass() ([demo](https://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/03-react-components/01-components.html), [code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/03-react-components/01-components.html), [bin](http://jsbin.com/cezotew/1/edit?js,output))
  2. createReactClass() with props ([demo](https://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/03-react-components/02-components.html), [code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/03-react-components/02-components.html), [bin](http://jsbin.com/cezotew/2/edit?js,output))
  3. createReactClass() with lists ([demo](https://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/03-react-components/03-components.html), [code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/03-react-components/03-components.html), [bin](http://jsbin.com/cezotew/3/edit?js,output))
  4. ES6 Classes ([demo](https://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/03-react-components/04-components.html), [code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/03-react-components/04-components.html), [bin](http://jsbin.com/cezotew/4/edit?js,output))
  5. Stateless Functional Components ([demo](https://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/03-react-components/05-components.html), [code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/03-react-components/05-components.html), [bin](http://jsbin.com/cezotew/5/edit?js,output))

### DOM Rendering

  1. team moods ([demo (firefox only)](http://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/04-dom-rendering-moods/DOM-rendering-moods.html),
[code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/04-dom-rendering-moods/DOM-rendering-moods.js))

### Factories -- mebahe

  1. DOM Factories - h1 ([demo](https://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/05-factories/01-factories.html), [code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/05-factories/01-factories.html), [bin](http://jsbin.com/mebahe/1/edit?js,output))
  2. DOM Factories - ul ([demo](https://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/05-factories/02-factories.html), [code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/05-factories/02-factories.html), [bin](http://jsbin.com/mebahe/2/edit?js,output))
  3. DOM Factories - props ([demo](https://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/05-factories/03-factories.html), [code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/05-factories/03-factories.html), [bin](http://jsbin.com/mebahe/3/edit?js,output))
  4. Component Factories ([demo](https://rawgit.com/MoonHighway/learning-react/update-localize-samples/chapter-04/05-factories/04-factories.html), [code](https://github.com/MoonHighway/learning-react/blob/update-localize-samples/chapter-04/05-factories/04-factories.html), [bin](http://jsbin.com/mebahe/4/edit?js,output))

  Note: All JSBin links throughout this repository use React 15. To update, change the script tag CDN links to version 16.

  Change

  ```html
    <script src="https://fb.me/react-with-addons-15.1.0.js"></script>
    <script src="https://fb.me/react-dom-15.1.0.js"></script>
  ```

  To

  ```html
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
