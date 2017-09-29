Chapter 3 : Functional Programming with JavaScript
==================
React, Flux, and Redux all fit within the functional JavaScript paradigm. Understanding the basic concepts of
functional programming will make you better at structuring React applications.

Samples
--------

### Introduction

#### What it means to be Functional

  1. Functions as Variables ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/01-functional-javascript/01-functional.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/01-functional-javascript/01-functional.html), [bin](http://jsbin.com/pixmu/1/edit?js,output))
  2. Arrow Functions ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/01-functional-javascript/02-functional.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/01-functional-javascript/02-functional.html), [bin](http://jsbin.com/pixmu/2/edit?js,output))
  3. Object Methods ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/01-functional-javascript/03-functional.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/01-functional-javascript/03-functional.html), [bin](http://jsbin.com/pixmu/3/edit?js,output))
  4. Functions within Arrays ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/01-functional-javascript/04-functional.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/01-functional-javascript/04-functional.html), [bin](http://jsbin.com/pixmu/4/edit?js,output))
  5. Functions as Arguments ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/01-functional-javascript/05-functional.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/01-functional-javascript/05-functional.html), [bin](http://jsbin.com/pixmu/5/edit?js,output))
  6. Returned Functions ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/01-functional-javascript/06-functional.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/01-functional-javascript/06-functional.html), [bin](http://jsbin.com/pixmu/6/edit?js,output))
  7. ES6 Enhancements ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/01-functional-javascript/07-functional.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/01-functional-javascript/07-functional.html), [bin](http://jsbin.com/pixmu/7/edit?js,output))

#### Imperative vs. Declarative

  1. Imperative ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/02-imperative-vs-declarative/01-imperative-declarative.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/02-imperative-vs-declarative/01-imperative-declarative.html), [bin](http://jsbin.com/cuqapu/1/edit?js,output))
  2. Declarative ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/02-imperative-vs-declarative/02-imperative-declarative.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/02-imperative-vs-declarative/02-imperative-declarative.html), [bin](http://jsbin.com/cuqapu/2/edit?js,output))


#### Populate the US

  1. Populate the US ([demo](http://rawgit.com/MoonHighway/learning-react/master/chapter-03/03-populate-the-us/populate-united-states.html),
  [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-03/03-populate-the-us/populate-united-states.js), [bin](http://jsbin.com/gesimonadi/1/edit?html,js,output))


### Immutability

  1. Mutations ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/04-immutability/01-immutability.html),
  [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-03/04-immutability/01-immutability.html), [bin](http://jsbin.com/kemimi/1/edit?js,output))
  2. Object.assign() ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/04-immutability/02-immutability.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/04-immutability/02-immutability.html), [bin](http://jsbin.com/kemimi/2/edit?js,output))
  3. Spread Operator with Objects ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/04-immutability/03-immutability.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/04-immutability/03-immutability.html), [bin](http://jsbin.com/kemimi/3/edit?js,output))
  4. Array.push() ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/04-immutability/04-immutability.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/04-immutability/04-immutability.html), [bin](http://jsbin.com/kemimi/4/edit?js,output))
  5. Array.concat() ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/04-immutability/05-immutability.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/04-immutability/05-immutability.html), [bin](http://jsbin.com/kemimi/5/edit?js,output))
  6. Spread Operator with Arrays ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/04-immutability/06-immutability.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/04-immutability/06-immutability.html), [bin](http://jsbin.com/kemimi/6/edit?js,output))

### Pure Functions

  1. Impure Function ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/05-pure-functions/01-pure-functions.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/05-pure-functions/01-pure-functions.html), [bin](http://jsbin.com/kosogo/1/edit?js,output))
  2. Object Mutation ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/05-pure-functions/02-pure-functions.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/05-pure-functions/02-pure-functions.html), [bin](http://jsbin.com/kosogo/2/edit?js,output))
  3. Pure Function ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/05-pure-functions/03-pure-functions.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/05-pure-functions/03-pure-functions.html), [bin](http://jsbin.com/kosogo/3/edit?js,output))
  4. Side Effects ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/05-pure-functions/04-pure-functions.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/05-pure-functions/04-pure-functions.html), [bin](http://jsbin.com/kosogo/4/edit?js,output))
  5. React Component ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/05-pure-functions/05-pure-functions.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/05-pure-functions/05-pure-functions.html), [bin](http://jsbin.com/kosogo/5/edit?js,output))

### Transforming Data  

  1. Joining Array Items ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/06-transforming-data/01-data.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/06-transforming-data/01-data.html), [bin](http://jsbin.com/qehige/1/edit?js,output))
  2. Filtering Arrays ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/06-transforming-data/02-data.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/06-transforming-data/02-data.html), [bin](http://jsbin.com/qehige/2/edit?js,output))
  3. Filtering Array Function ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/06-transforming-data/03-data.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/06-transforming-data/03-data.html), [bin](http://jsbin.com/qehige/3/edit?js,output))
  4. Mapping Arrays ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/06-transforming-data/04-data.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/06-transforming-data/04-data.html), [bin](http://jsbin.com/qehige/4/edit?js,output))
  5. Creating Objects with .map() ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/06-transforming-data/05-data.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/06-transforming-data/05-data.html), [bin](http://jsbin.com/qehige/5/edit?js,output))
  6. Updating Array of Objects ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/06-transforming-data/06-data.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/06-transforming-data/06-data.html), [bin](http://jsbin.com/qehige/6/edit?js,output))
  7. Editing Arrays of Objects ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/06-transforming-data/07-data.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/06-transforming-data/07-data.html), [bin](http://jsbin.com/qehige/7/edit?js,output))
  8. Object.keys() ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/06-transforming-data/08-data.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/06-transforming-data/08-data.html), [bin](http://jsbin.com/qehige/8/edit?js,output))
  9. Reducing Arrays ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/06-transforming-data/09-data.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/06-transforming-data/09-data.html), [bin](http://jsbin.com/qehige/9/edit?js,output))
  10. Array.reduce() Shorter Syntax ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/06-transforming-data/10-data.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/06-transforming-data/10-data.html), [bin](http://jsbin.com/qehige/10/edit?js,output))
  11. Colors Hash ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/06-transforming-data/11-data.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/06-transforming-data/11-data.html), [bin](http://jsbin.com/qehige/11/edit?js,output))
  12. distinctColors() ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/06-transforming-data/12-data.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/06-transforming-data/12-data.html), [bin](http://jsbin.com/qehige/12/edit?js,output))


### Higher Order Functions  

  1. invokeIf ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/07-higher-order-functions/01-higher-order-fns.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/07-higher-order-functions/01-higher-order-fns.html), [bin](http://jsbin.com/raxuyew/1/edit?js,output))
  2. userLogs ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/07-higher-order-functions/02-higher-order-fns.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/07-higher-order-functions/02-higher-order-fns.html), [bin](http://jsbin.com/raxuyew/2/edit?js,output))

### Recursion  

  1. Countdown ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/08-recursion/01-recursion.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/08-recursion/01-recursion.html), [bin](http://jsbin.com/romezi/1/edit?js,output))
  2. Countdown with setTimeout ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/08-recursion/02-recursion.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/08-recursion/02-recursion.html), [bin](http://jsbin.com/romezi/2/edit?js,output))
  3. deepPick() ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/08-recursion/03-recursion.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/08-recursion/03-recursion.html), [bin](http://jsbin.com/romezi/3/edit?js,output))

### Composition  

  1. Clock Template with .replace() ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/09-composition/01-composition.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/09-composition/01-composition.html), [bin](http://jsbin.com/zivevu/1/edit?js,output))
  2. Clock with Composition ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/09-composition/02-composition.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/09-composition/02-composition.html), [bin](http://jsbin.com/zivevu/2/edit?js,output))
  3. Click with Compose Function ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/09-composition/03-composition.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/09-composition/03-composition.html), [bin](http://jsbin.com/zivevu/3/edit?js,output))
  4. Imperative Clock ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/09-composition/04-imperative-clock.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/09-composition/04-imperative-clock.js))
  5. Declarative Clock ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-03/09-composition/05-declarative-clock.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-03/09-composition/05-declarative-clock.js))
