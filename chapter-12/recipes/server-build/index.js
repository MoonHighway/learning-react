/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_Menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Menu.js */ \"./src/Menu.js\");\nvar _jsxFileName = \"/Users/eveporcello/Desktop/recipes/server/index.js\";\n\n\n\n\n\n\nconst PORT = process.env.PORT || 4000;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static(\"./build\"));\napp.get(\"/*\", (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_Menu_js__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: undefined\n  }));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"./build/index.html\");\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, \"utf8\", (err, data) => {\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/eveporcello/Desktop/recipes/src/Menu.js\";\n\n\nfunction Recipe({\n  name,\n  ingredients,\n  steps\n}) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    id: name.toLowerCase().replace(/ /g, \"-\"),\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8\n    },\n    __self: this\n  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"ingredients\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9\n    },\n    __self: this\n  }, ingredients.map((ingredient, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: i,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11\n    },\n    __self: this\n  }, ingredient.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"instructions\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: this\n  }, \"Cooking Instructions\"), steps.map((step, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    key: i,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17\n    },\n    __self: this\n  }, step))));\n}\n\nfunction Menu({\n  title,\n  recipes\n}) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28\n    },\n    __self: this\n  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"recipes\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30\n    },\n    __self: this\n  }, recipes.map((recipe, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Recipe, Object.assign({\n    key: i\n  }, recipe, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32\n    },\n    __self: this\n  })))));\n}\n\n//# sourceURL=webpack:///./src/Menu.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });