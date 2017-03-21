Chapter 10 : Testing
==================
In order to keep up with our competitors, we must move quickly and ensure quality. One vital tool in our arsenal that
allows us to move quickly while ensuring quality is unit testing. Unit testing allows us to verify that every piece,
or unit, of our application functions as intended.

Samples
----------

#### eslint

* ESLint configuration file ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/.eslintrc.yml))

#### Testing Redux

* color reducer ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/store/reducers.js)
[TEST](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/__tests__/store/reducers/color.test.js))
* actions with store([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/actions.js)
[TEST](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/__tests__/actions.test.js))

#### Testing React components

* [global setup](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/__tests__/global.js)
* Star ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/components/ui/Star.js)
[TEST](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/__tests__/components/ui/Star.test.js))
* HOC Expandable ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/components/HOC/Expandable.js)
[TEST](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/__tests__/components/HOC/Expandable.test.js))

#### Jest Mocks

* ColorList Component ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/components/ui/ColorList.js)
[TEST](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/__tests__/components/ui/ColorList.test.js)
* Colors Container ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/components/containers.js)
[ColorList Mock](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/components/ui/__mocks__/ColorList.js)
[TEST](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/__tests__/components/containers/Colors.test.js)

#### Snapshot Testing

* Color Component ([SUT](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/src/components/ui/Color.js)
[Snapshot](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/__tests__/components/ui/__snapshots__/Color.test.js.snap)
[TEST](https://github.com/MoonHighway/learning-react/blob/master/chapter-10/color-organizer/__tests__/components/ui/Color.test.js))
