Chapter 1 : Introduction
==================
The widespread use of React on large websites shows that it is stable enough to use at scale. React is ready.

Installing Node.js and NPM
--------------------
When working with Node and React, you will need to use the command line. On the Mac, this is called the terminal. On a PC,
it is called the command prompt. Run the following commands to check your current version on node and npm. If needed,
instructions on how to install or upgrade are below.

First, Check to see if you have Node JS installed
```
$ node -v
```

Then, if needed, [install or update Node.js](https://nodejs.org/en/) from the Node.js website. Download the installer,
run it, and follow the instructions.

--------------------------------

Next, check your version of npm:
```
$ npm -v
```

Then, if you are running anything less than version 3, you will need to update npm:

##### Update NPM on Mac
```
$ sudo npm update -g npm
```

##### Update NPM on PC
Make sure to run the command prompt with administrator privileges:
```
$ npm update -g npm
```

##### Optionally install Yarn
Yarn is a package manager created at Facebook. It is a compatible alternative to npm. Yarn's use is not required,
but you can optionally install it if you like:
```
$ sudo npm install -g yarn
```

Finally, there are some nice options for switching Node versions. This is not required, but you can
optionally install one of these version mangers:

* [Install Node Version Manager - mac only (optional)](https://github.com/creationix/nvm)
* [Install NVM-Windows - pc only (optional)](https://github.com/coreybutler/nvm-windows)

--------------------------------

Installing the React Tools
--------------------------------
Next, install the React developer tools:

* Development Tools ([Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) |
[Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/))

Working with JSBin
--------------------------------
This repository links to samples hosted on JSBin so that you can immediately begin changing each sample and checking
output to see how each sample has changed.

Here is a Hello World sample that JSBin has assigned the identifier __gosabo__. There are 3 available versions of this sample in JSBin under the same identifier.

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
```

##### A preview of the latest version in a sample:
[http://output.jsbin.com/gosabo](http://output.jsbin.com/gosabo)
##### The sample in the editor:
[http://output.jsbin.com/gosabo/edit](http://output.jsbin.com/gosabo/edit)
##### The sample in the editor with JavaScript and output tabs open:
[http://jsbin.com/gosabo/edit?js,output](http://jsbin.com/gosabo/edit?js,output)
##### A pure preview of the sample:
[http://output.jsbin.com/gosabo/quite](http://output.jsbin.com/gosabo/quiet)
##### Version 1 of the sample as output:
[http://output.jsbin.com/gosabo/1](http://output.jsbin.com/gosabo/1)
##### Version 1 of the sample in the editor:
[http://output.jsbin.com/gosabo/1/edit](http://output.jsbin.com/gosabo/1/edit)
##### Version 2 of the sample as output:
[http://output.jsbin.com/gosabo/2](http://output.jsbin.com/gosabo/2)
##### Version 3 of the sample in the editor with html and javascript tabs open:
[http://output.jsbin.com/gosabo/3/edit](http://output.jsbin.com/gosabo/3/edit?html,js)

CDN's for JavaScript libraries
--------------------------------
Ultimately, we will be working with webpack and npms, but to get running quickly, here are some CDN links that
can be included in JSBin with this syntax: `<script src="https://[CDN LINK]"></script>`

* [React](https://unpkg.com/react@16/umd/react.development.js)
* [React DOM](https://unpkg.com/react-dom@16/umd/react-dom.development.js)
* [Babel Inline Transpiler](https://unpkg.com/babel-standalone@6.15.0/babel.min.js)
* [fetch](https://cdnjs.cloudflare.com/ajax/libs/fetch/1.0.0/fetch.min.js)
* [Redux](https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.min.js)
* [React Router Source](https://cdnjs.cloudflare.com/ajax/libs/react-router/4.0.0/react-router.min.js)

React Resources
--------------------------------
Finally, we have some links to resources and official documentation for the libraries that we will be using:

* [React Documentation](https://facebook.github.io/react/index.html)
* [React Source](https://github.com/facebook/react)
* [React NPM](https://www.npmjs.com/package/react)
* [Webpack Documentation](https://webpack.js.org/)
* [Flux Documentation](https://facebook.github.io/flux/docs/overview.html)
* [Redux Documentation](http://redux.js.org/index.html)
* [Jest Documentation](https://facebook.github.io/jest/)
* [React Router Documentation](https://reacttraining.com/react-router/)
