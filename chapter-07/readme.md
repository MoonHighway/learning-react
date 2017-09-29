Chapter 7 : Enhancing Components
==================
Before we can enhance our applications with 3rd party JavaScript libraries or backend data requests, we must
first understand how to work with the component lifecycle: a series of methods that can be invoked every time we
mount or update a component.

Samples
--------

### Mounting Lifecycle

  1. getFakeMembers ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/01-mounting-lifecycle/01-mounting.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/01-mounting-lifecycle/01-mounting.html), [bin](http://jsbin.com/qobiwit/1/edit?js,console))
  2. getFakeMembers Lifecycle ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/01-mounting-lifecycle/02-mounting.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/01-mounting-lifecycle/02-mounting.html), [bin](http://jsbin.com/qobiwit/2/edit?js,output))
  3. Clock ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/mounting-lifecycle-clock/dist/index.html),
  [source](https://github.com/MoonHighway/learning-react/blob/master/chapter-07/mounting-lifecycle-clock))

### Color Organizer

  1. Color Organizer - Updating Lifecycle ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/color-organizer/dist/index.html),
  [source](https://github.com/MoonHighway/learning-react/blob/master/chapter-07/color-organizer))

### Updating Lifecycle

  1. Hidden Messages - Mounting Methods ❌ ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/02-updating-lifecycle/01-updating.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/02-updating-lifecycle/01-updating.html), [bin](http://jsbin.com/buvutef/1/edit?js,output))
  2. componentWillReceiveProps ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/02-updating-lifecycle/02-updating.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/02-updating-lifecycle/02-updating.html), [bin](http://jsbin.com/buvutef/2/edit?js,output))

### Children

  1. Display Component ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/03-children/01-children.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/03-children/01-children.html), [bin](http://jsbin.com/filikap/1/edit?js,output))
  2. Filtering Components ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/03-children/02-children.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/03-children/02-children.html), [bin](http://jsbin.com/filikap/2/edit?js,output))
  3. Filtering Components - Different Ages ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/03-children/03-children.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/03-children/03-children.html), [bin](http://jsbin.com/filikap/3/edit?js,output))

### JavaScript Library Integration

  1. Fetching Data ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/04-library-integration/01-libraries.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/04-library-integration/01-libraries.html), [bin](http://jsbin.com/levaduv/1/edit?js,output))
  2. Fetch with componentWillMount ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/04-library-integration/02-libraries.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/04-library-integration/02-libraries.html), [bin](http://jsbin.com/levaduv/2/edit?js,output))
  3. D3 Timeline v1 ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/04-library-integration/03-libraries.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/04-library-integration/03-libraries.html), [bin](http://jsbin.com/levaduv/3/edit?js,output))
  4. D3 Ski Milestones ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/04-library-integration/04-libraries.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/04-library-integration/04-libraries.html), [bin](http://jsbin.com/levaduv/4/edit?js,output))

### Higher Order Components

  1. People List ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/05-higher-order-components/01-hocs.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/05-higher-order-components/01-hocs.html), [bin](http://jsbin.com/nitagof/1/edit?js,output))
  2. Data Component HOC ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/05-higher-order-components/02-hocs.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/05-higher-order-components/02-hocs.html), [bin](http://jsbin.com/nitagof/2/edit?js,output))
  3. Country Dropdown ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/05-higher-order-components/03-hocs.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/05-higher-order-components/03-hocs.html), [bin](http://jsbin.com/nitagof/3/edit?js,output))
  4. Expandable HOC ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/05-higher-order-components/04-hocs.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/05-higher-order-components/04-hocs.html), [bin](http://jsbin.com/nitagof/4/edit?js,output))
  5. Pop-up With Expandable ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/05-higher-order-components/04-hocs.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/05-higher-order-components/04-hocs.html), [bin](http://jsbin.com/nitagof/5/edit?js,output))

### Managing State Outside of React

  1. Clock without React State ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-07/06-managing-state-outside-react/01-state.html), [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-07/06-managing-state-outside-react/01-state.html), [bin](http://jsbin.com/juxewiw/1/edit?js,output))
  2. Flux ([bin only](http://jsbin.com/juxewiw/2/edit?js,console,output))
