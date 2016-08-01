Chapter 9 : React-Redux
==================
In this chapter, we'll take a look at various ways to incorporate the Redux store. We will first look at how 
the store can be used without any additional frameworks. After that, we will explore react-redux, a framework that 
can be used to integrate a Redux store with React components. 

Samples
--------

#### Explicitly passing the Store

* index ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-explicit/index.js))
* App ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-explicit/components/App.js))
* SortMenu ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-explicit/components/SortMenu.js))
* AddColorForm ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-explicit/components/AddColorForm.js))
* ColorList ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-explicit/components/ColorList.js))
* Complete Sample ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-09/color-organizer-explicit/dist/index.html),
[source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-explicit))

#### Passing the Store via context

* index ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-context/index.js))
* App ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-context/components/App.js))
* SortMenu ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-context/components/SortMenu.js))
* AddColorForm ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-context/components/AddColorForm.js))
* Color ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-context/components/Color.js))
* Complete Sample ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-09/color-organizer-context/dist/index.html),
[source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-context))

#### Presentation vs. Containers

* SortMenu ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-containers/components/ui/SortMenu.js))
* AddColorForm ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-containers/components/ui/AddColorForm.js))
* ColorList ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-containers/components/ui/ColorList.js))
* containers ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-containers/components/ui/containers.js))
* Complete Sample ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-09/color-organizer-containers/dist/index.html),
[source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer-containers))

#### React Redux

* index ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer/index.js))
* App ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer/components/App.js))
* containers ([source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer/components/containers.js))
* complete sample ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-09/color-organizer/dist/index.html),
[source](https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer/))