Chapter 1 : Introduction
==================
The widespread use of React on large websites shows that it is stable enough to use at scale. React is ready, 
but nothing is set in stone. The unique opportunity we all have is that since it's so new, we can be part of building it. 
As the library and its tools evolve, we can suggest enhancements. When ideas come to mind about how to work with 
React more efficiently, we can build them. React is already great, but we can play an active role in building 
its even better future.


Installing Node js and NPM
--------------------
When working with Node and React, you will need to use the command line. In the mac this is called the terminal on a PC 
it is called the command prompt. Run the following commands to check your current version on node and npm. If needed
instruction on how to install or upgrade are below.

First, Check to see if you have Node JS installed
```
$ node -v
```

Then, if needed, [install or update Node JS](https://nodejs.org/en/) from the node js website. Download the installer, 
run it, and follow the instructions.

--------------------------------

Next, Check your version of npm 
```
$ npm -v
```

Then, if you are running anything less than version three you will need to update npm.

##### Update NPM on Mac
```
$ sudo npm update -g npm 
```

##### Update NPM on PC
Make sure to run the command prompt with administrator privilages
```
$ npm update -g npm
```

Finally, there are some nice options for switching node versions. You can install one of these optional version mangers:

* [Install Node Version Manager - mac only (optional)](https://github.com/creationix/nvm)
* [Install NVM-Windows - pc only (optional)](https://github.com/coreybutler/nvm-windows)

--------------------------------

Installing the React Tools
--------------------------------
Next, there are some developer chrome extensions or Firefox addons that you will need to install in order to debug React.

* Detector ([Chrome](https://chrome.google.com/webstore/detail/react-detector/jaaklebbenondhkanegppccanebkdjlh?hl=en-US))
* Development Tools ([Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) | 
[Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/))

Working with JSBin
--------------------------------
This repository links to samples hosted on JSBin so that you can immediately begin changing each sample and checking
output to see how each sample has changed. 

Here is a Hello World sample that JSBin has assigned the identifier __gosabo__. There are 3 available versions of this 
sample in JSBin under the same identifier.

##### A preview of the latest version in a sample: 
[http://output.jsbin.com/gosabo](http://output.jsbin.com/gosabo)
##### The sample in the editor: 
[http://output.jsbin.com/gosabo/edit](http://output.jsbin.com/gosabo/edit)
##### The sample in the editor with JavaScript and output tabs open: 
[http://jsbin.com/gosabo/edit?js,output](http://jsbin.com/gosabo/edit?js,output)
##### A pure preview of the sample: 
[http://output.jsbin.com/gosabo/quite](http://output.jsbin.com/gosabo)
##### Version 1 of the sample as output: 
[http://output.jsbin.com/gosabo/1](http://output.jsbin.com/gosabo/1)
##### Version 1 of te sample in the editor: 
[http://output.jsbin.com/gosabo/1/edit](http://output.jsbin.com/gosabo/1/edit)
##### Version 2 of the sample as output: 
[http://output.jsbin.com/gosabo/2](http://output.jsbin.com/gosabo/2)
##### Version 3 of the sample in the editor with html and javascript tabs open: 
[http://output.jsbin.com/gosabo/3/edit](http://output.jsbin.com/gosabo/3/edit?html,js)

CDN's for javascript libraries
--------------------------------
Ultimately, we will be working with webpack and npms, but to get running quickly here are some CDN links that 
can be included in JSBin with this syntax: `<script src="https://[CDN LINK]"></script>`

* [React Source](https://fb.me/react-with-addons-15.1.0.js)
* [React DOM Source](https://fb.me/react-dom-15.1.0.js)
* [Babel Inline Transpiller](https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.js)
* [fetch](https://cdnjs.cloudflare.com/ajax/libs/fetch/1.0.0/fetch.min.js)
* [Redux Source](https://cdnjs.cloudflare.com/ajax/libs/redux/3.5.2/redux.min.js)
* [React Router Source](https://cdnjs.cloudflare.com/ajax/libs/react-router/2.6.0/ReactRouter.min.js)
* [Mocha](https://cdnjs.cloudflare.com/ajax/libs/mocha/3.0.0-1/mocha.min.js)
* [Chai](https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.min.js)
* [Sinon](https://cdnjs.cloudflare.com/ajax/libs/sinon.js/1.15.4/sinon.min.js)

React Resources
--------------------------------
Finally, we have some links to resources and official documentation for the libraies that we will be using.

* [React Documentation](https://facebook.github.io/react/index.html)
* [React Source](https://github.com/facebook/react)
* [React NPM](https://www.npmjs.com/package/react)
* [Webpack Documentation](https://webpack.github.io/docs/)
* [Flux Documentation](https://facebook.github.io/flux/docs/overview.html)
* [Redux Documentation](http://redux.js.org/index.html)
* [React Router Documentation](https://github.com/reactjs/react-router/tree/master/docs)
* [Mocha Documentation](https://mochajs.org/)
* [Sinon Documentation](http://sinonjs.org/)