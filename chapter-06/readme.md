Chapter 6 : Props, State, and the Component Tree
==================
Data handling within component trees is one of the key advantages of working with React. There are techniques that you
can use when working with data in React components that will make your life much easier in the long run.

Samples
--------

### Property Validation and default Props

#### Validation with `prop-types`

  1. Incorrect properties do not always show errors (
    [demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/01-property-validation-and-default-props/01-incorrect-props-no-error.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/01-property-validation-and-default-props/01-incorrect-props-no-error.html), [bin](http://jsbin.com/pozozi/1/edit?js,output))
  2. Introducing `prop-types` npm ❌ (
    [demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/01-property-validation-and-default-props/02-introducing-prop-types-npm.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/01-property-validation-and-default-props/02-introducing-prop-types-npm.html), [bin](http://jsbin.com/pozozi/2/edit?js,console,output))
  3. PropTypes success (
    [demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/01-property-validation-and-default-props/03-prop-types-success.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/01-property-validation-and-default-props/03-prop-types-success.html), [bin](http://jsbin.com/pozozi/3/edit?js,output))
  4. cryptic problems when prop missing ❌ (
    [demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/01-property-validation-and-default-props/04-cryptic-problems-when-prop-missing.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/01-property-validation-and-default-props/04-cryptic-problems-when-prop-missing.html), [bin](http://jsbin.com/pozozi/4/edit?js,console,output))
  5. better errors with .isRequired ❌ (
    [demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/01-property-validation-and-default-props/05-better-errors-with-is-required.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/01-property-validation-and-default-props/05-better-errors-with-is-required.html), [bin](http://jsbin.com/pozozi/5/edit?js,console,output))
  6. catching validation errors ❌ (
    [demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/01-property-validation-and-default-props/06-successful-validation.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/01-property-validation-and-default-props/06-successful-validation.html), [bin](http://jsbin.com/pozozi/6/edit?js,output))
  7. default properties (
    [demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/01-property-validation-and-default-props/07-default-properties.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/01-property-validation-and-default-props/07-default-properties.html), [bin](http://jsbin.com/pozozi/7/edit?js,output))
  8. custom validation ❌ (
    [demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/01-property-validation-and-default-props/08-custom-validation.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/01-property-validation-and-default-props/08-custom-validation.html), [bin](http://jsbin.com/pozozi/8/edit?js,console,output))
  9. stateless prop validation ❌ (
    [demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/01-property-validation-and-default-props/09-stateless-prop-validation.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/01-property-validation-and-default-props/09-stateless-prop-validation.html), [bin](http://jsbin.com/pozozi/9/edit?js,output))  
  10. stateless default props (
    [demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/01-property-validation-and-default-props/10-stateless-default-props.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/01-property-validation-and-default-props/10-stateless-default-props.html), [bin](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/01-property-validation-and-default-props/http://jsbin.com/pozozi/10/edit?js,output))  

### Refs

  1. Color component ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/02-refs/01-color-component-before-refs.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/02-refs/01-color-component-before-refs.html), [bin](http://jsbin.com/funeyol/1/edit?js,output))
  2. Color component with refs ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/02-refs/02-color-component-with-refs.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/02-refs/02-color-component-with-refs.html), [bin](http://jsbin.com/funeyol/2/edit?js,output))
  3. Two way data binding ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/02-refs/03-Color-Component-binding.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/02-refs/03-Color-Component-binding.html), [bin](http://jsbin.com/funeyol/3/edit?js,console,output))
  4. Two way data todo note ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/02-refs/04-two-way-data-todo.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/02-refs/04-two-way-data-todo.html), [bin](http://jsbin.com/funeyol/4/edit?js,console,output))
  5. without a default function prop ❌ ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/02-refs/05-without-default-function.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/02-refs/05-without-default-function.html), [bin](http://jsbin.com/funeyol/5/edit?js,console,output))
  6. checking for the function property ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/02-refs/06-check-for-property.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/02-refs/06-check-for-property.html), [bin](http://jsbin.com/funeyol/6/edit?js,console,output))
  7. using a default function property ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/02-refs/07-default-property.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/02-refs/07-default-property.html), [bin](http://jsbin.com/funeyol/7/edit?js,console,output))
  8. stateless default function property ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/02-refs/08-stateless-default-prop.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/02-refs/08-stateless-default-prop.html), [bin](http://jsbin.com/funeyol/8/edit?js,console,output))
  9. stateless default argument function property ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/02-refs/09-stateless-default-arg.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/02-refs/09-stateless-default-arg.html), [bin](http://jsbin.com/funeyol/9/edit?js,console,output))

### Component State

  1. The Star Component (
    [demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/03-component-state/01-the-star-component.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/03-component-state/01-the-star-component.html), [bin](http://jsbin.com/budanem/1/edit?js,output))
  2. The Star Rating Component Class (
    [demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/03-component-state/02-the-star-rating-component.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/03-component-state/02-the-star-rating-component.html), [bin](http://jsbin.com/budanem/2/edit?js,output))
  3. Setting State From Props (
    [demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/03-component-state/03-setting-state-from-props.html), [code](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/03-component-state/03-setting-state-from-props.html), [bin](http://jsbin.com/budanem/3/edit?js,output))

### State within the Component Tree

1. Color Organizer App ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-06/color-organizer/dist/index.html),
[source](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/color-organizer))
