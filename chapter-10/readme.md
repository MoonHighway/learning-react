Chapter 10 : Testing
==================
In order to keep up with our competitors, we must move quickly and ensure quality. One vital tool in our arsenal that 
allows us to move quickly while ensuring quality is unit testing. Unit testing allows us to verify that every piece, 
or unit, of our application functions as intended.

Samples
--------

#### eslint

* ESLint configuration file ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/.eslintrc.yml))

#### Testing Redux

* color reducer ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/store/reducers.js) 
| [SPEC](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/test/store/reducers/color-spec.js))
* colors reducer ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/store/reducers.js)
| [SPEC](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/test/store/reducers/colors-spec.js))
* sort reducer ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/store/reducers.js)
| [SPEC](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/test/store/reducers/sort-spec.js))
* store with action creators ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/actions.js)
| [SPEC](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/actions-spec.js))

#### enzyme

* Star Component ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/components/ui/Star.js) 
 [SPEC](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/test/components/ui/Star-spec.js))
* StarRating Component ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/components/ui/StarRating.js) 
[SPEC](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/test/components/ui/StarRating-spec.js))
* Testing HOC's ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/components/HOC/Expandable.js) 
[SPEC](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/test/components/HOC/Expandable-spec.js))

#### Color Organizer With Tests

* sample ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/))
