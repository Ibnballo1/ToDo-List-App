/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: bisque;\\r\\n}\\r\\n\\r\\n.main {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  margin-top: 100px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  margin-bottom: 20px;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#eachList {\\r\\n  position: absolute;\\r\\n  top: 12vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 20px;\\r\\n  padding-top: 12px;\\r\\n  width: 90%;\\r\\n  max-width: 750px;\\r\\n  min-width: 350px;\\r\\n  margin-bottom: 15%;\\r\\n  background-color: rgb(49, 47, 43);\\r\\n  box-shadow: 7px 5px 5px black;\\r\\n}\\r\\n\\r\\n.section {\\r\\n  width: 65%;\\r\\n}\\r\\n\\r\\n.todo-today,\\r\\n.add-items,\\r\\n.completed,\\r\\n.added-items {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 16px 10px;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\nli button,\\r\\n.todo-today button,\\r\\n.add-items button,\\r\\n.completed button {\\r\\n  border: none;\\r\\n  background-color: #fff;\\r\\n  color: grey;\\r\\n  cursor: pointer;\\r\\n  padding: 6px;\\r\\n}\\r\\n\\r\\n.add-items button {\\r\\n  border: 1px solid brown;\\r\\n  border-radius: 2px;\\r\\n  background-color: bisque;\\r\\n}\\r\\n\\r\\n.add-items input,\\r\\nli input[type='text'] {\\r\\n  border: 1px solid #000;\\r\\n  border-radius: 2px;\\r\\n  width: 95%;\\r\\n  height: 24px;\\r\\n  font-style: italic;\\r\\n  font-size: 16px;\\r\\n  padding: 6px;\\r\\n}\\r\\n\\r\\n/* Added Item Style */\\r\\n.added-items {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nli input[type='text'] {\\r\\n  border: none;\\r\\n  width: 92%;\\r\\n}\\r\\n\\r\\nli input[type='text']:hover {\\r\\n  border: 1px solid #000;\\r\\n}\\r\\n\\r\\n.each-task {\\r\\n  padding: 12px 10px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.inputs {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"] {\\r\\n  border: 3px solid gray;\\r\\n}\\r\\n\\r\\n.each-task button {\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  background-color: #f6f6f6;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.clear-all {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\n.clear-all:hover {\\r\\n  color: grey;\\r\\n  text-decoration: underline;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_forTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/forTask.js */ \"./src/modules/forTask.js\");\n\r\n\r\n\r\nconst formAddItems = document.getElementById('formAddItems');\r\nconst addDescription = document.getElementById('toAdd');\r\nconst listTitle = document.getElementById('listTitle');\r\nconst clearTask = document.getElementById('clearTask');\r\n\r\nlet dataCount = 0;\r\nconst getStorage = localStorage.getItem('dataCount');\r\nif (getStorage) {\r\n  dataCount = getStorage;\r\n}\r\n\r\nconst eachList = new _modules_forTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](dataCount);\r\neachList.addedItems = eachList.getData();\r\n\r\nif (localStorage.getItem('listName')) {\r\n  listTitle.value = localStorage.getItem('listName');\r\n}\r\n\r\nlistTitle.addEventListener('input', () => {\r\n  eachList.setListName(listTitle.value);\r\n});\r\n\r\n// Populating the data\r\nfor (let i = 0; i < eachList.addedItems.length; i += 1) {\r\n  const newTask = eachList.addedItems[i];\r\n  eachList.addLiTag(newTask);\r\n  const description = document.getElementById(`input${newTask.id}`);\r\n  const checkbox = document.getElementById(`checkbox${newTask.id}`);\r\n  const removeButton = document.getElementById(`button${newTask.id}`);\r\n  if (newTask.isCompleted) eachList.checkTask(newTask.id);\r\n\r\n  // event listeners:\r\n  removeButton.addEventListener('click', () => {\r\n    eachList.removeEachTask(newTask);\r\n  });\r\n  description.addEventListener('input', () => {\r\n    eachList.updateDescription(description.value, newTask);\r\n  });\r\n  description.addEventListener('click', () => {\r\n    eachList.selectTask(newTask);\r\n  });\r\n  description.addEventListener('keydown', () => {\r\n    eachList.selectTask(newTask);\r\n  });\r\n  checkbox.addEventListener('change', () => {\r\n    eachList.updateCheckbox(newTask);\r\n    eachList.checkTask(newTask.id);\r\n  });\r\n}\r\n\r\nformAddItems.addEventListener('submit', () => {\r\n  const newTask = eachList.formAddItems(addDescription.value);\r\n  eachList.addLiTag(eachList.addedItems[eachList.addedItems.length - 1]);\r\n  const description = document.getElementById(`input${eachList.taskIndex - 1}`);\r\n  const checkbox = document.getElementById(`checkbox${eachList.taskIndex - 1}`);\r\n  const removeButton = document.getElementById(`button${eachList.taskIndex - 1}`);\r\n  addDescription.value = '';\r\n  // event listeners:\r\n  removeButton.addEventListener('click', () => {\r\n    eachList.removeEachTask(newTask);\r\n  });\r\n  description.addEventListener('input', () => {\r\n    eachList.updateDescription(description.value, newTask);\r\n  });\r\n  description.addEventListener('click', () => {\r\n    eachList.selectTask(newTask);\r\n  });\r\n  description.addEventListener('keydown', () => {\r\n    eachList.selectTask(newTask);\r\n  });\r\n  checkbox.addEventListener('change', () => {\r\n    eachList.updateCheckbox(newTask);\r\n    eachList.checkTask(newTask.id);\r\n  });\r\n});\r\n\r\nclearTask.addEventListener('click', () => {\r\n  eachList.addedItems = eachList.addedItems.filter(eachList.clearTask);\r\n  eachList.setData();\r\n});\r\n\r\nlistTitle.addEventListener('click', () => {\r\n  eachList.removeHighlight();\r\n});\r\nformAddItems.addEventListener('click', () => {\r\n  eachList.removeHighlight();\r\n});\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/forTask.js":
/*!********************************!*\
  !*** ./src/modules/forTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MyTasks {\r\n  constructor(taskIndex) {\r\n    this.addedItems = [];\r\n    this.taskIndex = Number(taskIndex);\r\n  }\r\n\r\n  formAddItems = (description, index, isCompleted) => {\r\n    const newTask = {\r\n      description: description ?? 'description',\r\n      isCompleted: isCompleted ?? false,\r\n      index: index ?? this.addedItems.length,\r\n      id: this.taskIndex,\r\n    };\r\n    newTask.index += 1;\r\n    this.addedItems.push(newTask);\r\n    this.taskIndex += 1;\r\n    this.setData();\r\n    return newTask;\r\n  };\r\n\r\n  addLiTag = (task) => {\r\n    const ul = document.getElementById('addedItems');\r\n    const li = document.createElement('li');\r\n    const checkbox = document.createElement('INPUT');\r\n    const input = document.createElement('INPUT');\r\n    const button = document.createElement('button');\r\n    const trash = document.createElement('i');\r\n    li.setAttribute('id', `li${task.id}`);\r\n    checkbox.setAttribute('id', `checkbox${task.id}`);\r\n    input.setAttribute('id', `input${task.id}`);\r\n    button.setAttribute('id', `button${task.id}`);\r\n    checkbox.setAttribute('type', 'checkbox');\r\n    input.setAttribute('type', 'text');\r\n    trash.classList.add('fa', 'fa-trash');\r\n    trash.setAttribute('aria-hidden', 'true');\r\n    checkbox.checked = task.isCompleted;\r\n    button.appendChild(trash);\r\n    input.value = task.description;\r\n    li.append(checkbox, input, button);\r\n    ul.append(li);\r\n  };\r\n\r\n  removeEachTask = (task) => {\r\n    const ul = document.getElementById('addedItems');\r\n    const index = this.getTaskIndex(task.id);\r\n    const li = document.getElementById(`li${task.id}`);\r\n    this.addedItems.splice(index, 1);\r\n    ul.removeChild(li);\r\n    for (let i = index; i < this.addedItems.length; i += 1) {\r\n      this.addedItems[i].index -= 1;\r\n    }\r\n    this.setData();\r\n  };\r\n\r\n  removeDiv = (task) => {\r\n    const ul = document.getElementById('addedItems');\r\n    const index = this.getTaskIndex(task.id);\r\n    const li = document.getElementById(`li${task.id}`);\r\n    ul.removeChild(li);\r\n    for (let i = index; i < this.addedItems.length; i += 1) {\r\n      this.addedItems[i].index -= 1;\r\n    }\r\n  };\r\n\r\n  clearTask = (task) => {\r\n    if (task.isCompleted === true) {\r\n      this.removeDiv(task);\r\n      return false;\r\n    }\r\n    return true;\r\n  };\r\n\r\n  selectTask = (task) => {\r\n    this.removeHighlight();\r\n    const input = document.getElementById(`input${task.id}`);\r\n    const removeButton = document.getElementById(`button${task.id}`);\r\n    input.classList.add('highlight');\r\n    removeButton.classList.remove('hidden');\r\n  };\r\n\r\n  removeHighlight = () => {\r\n    const id = this.findHighlight();\r\n    if (id >= 0) {\r\n      const input = document.getElementById(`input${id}`);\r\n      const removeButton = document.getElementById(`button${id}`);\r\n      input.classList.remove('highlight');\r\n      removeButton.classList.add('hidden');\r\n    }\r\n  };\r\n\r\n  findHighlight = () => {\r\n    for (let i = 0; i < this.addedItems.length; i += 1) {\r\n      const { id } = this.addedItems[i];\r\n      const input = document.getElementById(`input${id}`);\r\n      if (input.classList.contains('highlight')) {\r\n        return id;\r\n      }\r\n    }\r\n    return -1;\r\n  };\r\n\r\n  updateDescription = (description, task) => {\r\n    task.description = description;\r\n    this.setData();\r\n  };\r\n\r\n  updateCheckbox = (task) => {\r\n    task.isCompleted = !task.isCompleted;\r\n    this.setData();\r\n  };\r\n\r\n  checkTask = (id) => {\r\n    const description = document.getElementById(`input${id}`);\r\n    description.toggleAttribute('disabled');\r\n    description.classList.toggle('done');\r\n  };\r\n\r\n  // local storage\r\n  setData = () => {\r\n    localStorage.setItem('dataTasks', JSON.stringify(this.addedItems));\r\n    localStorage.setItem('dataCount', this.taskIndex);\r\n  };\r\n\r\n  getData = () => {\r\n    const getStoredVal = localStorage.getItem('dataTasks');\r\n    if (getStoredVal) {\r\n      return JSON.parse(getStoredVal);\r\n    }\r\n    return [];\r\n  };\r\n\r\n  getTaskIndex = (id) => {\r\n    let i = 0;\r\n    while (this.addedItems[i].id !== id) {\r\n      i += 1;\r\n    }\r\n    return i;\r\n  };\r\n\r\n  setListName = (newTitle) => {\r\n    localStorage.setItem('listName', newTitle);\r\n  };\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTasks);\n\n//# sourceURL=webpack://webpack/./src/modules/forTask.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;