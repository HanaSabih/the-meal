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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".nav-container {\\r\\n  background-color: #004332;\\r\\n  color: #c0a159;\\r\\n  display: flex;\\r\\n  height: 5rem;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 30px;\\r\\n}\\r\\n\\r\\n#nav-logo {\\r\\n  height: 50px;\\r\\n  width: 120px;\\r\\n}\\r\\n\\r\\n.nav-list {\\r\\n  list-style-type: none;\\r\\n  display: flex;\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\n.nav-item:hover {\\r\\n  background-color: #c0a159;\\r\\n  color: #004332;\\r\\n  padding: 0 4px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: #004332;\\r\\n  color: #c0a159;\\r\\n  position: absolute;\\r\\n  height: 5rem;\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  align-content: center;\\r\\n  padding: 20px 0;\\r\\n}\\r\\n\\r\\n.greenColor {\\r\\n  color: #004332;\\r\\n}\\r\\n.greenBg {\\r\\n  background-color: #004332;\\r\\n}\\r\\n\\r\\n.greenBorderTB {\\r\\n  border: 0;\\r\\n  border-bottom: 1rem solid #004332;\\r\\n  border-top: 1rem solid #004332;\\r\\n}\\r\\n\\r\\n.yellowColor {\\r\\n  color: #c0a159;\\r\\n}\\r\\n\\r\\n.yellowBorderTB {\\r\\n  border: 0;\\r\\n  border-bottom: 0.1rem solid #c0a159;\\r\\n  border-top: 0.1rem solid #c0a159;\\r\\n}\\r\\n\\r\\n.whiteBg {\\r\\n  background-color: #ecebe6;\\r\\n}\\r\\n\\r\\n/* side nav  */\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n/* menu list */\\r\\n.ListMenu {\\r\\n  color: #c0a159;\\r\\n  border: 0;\\r\\n  border-bottom: 0.2rem solid #c0a159;\\r\\n  border-top: 0.2rem solid #c0a159;\\r\\n}\\r\\n.ListMenu:hover {\\r\\n  color: #004332;\\r\\n  background-color: #c0a159;\\r\\n}\\r\\n/* menu meals */\\r\\n/* .optionsbtn .optionsbtn {\\r\\n  color: #004332;\\r\\n  border: 0;\\r\\n  border-bottom: 0.1rem solid #004332;\\r\\n  border-top: 0.1rem solid #004332;\\r\\n}\\r\\n.optionsbtn:hover {\\r\\n  color: #c0a159;\\r\\n  background-color: #004332;\\r\\n} */\\r\\n.categoryslctd {\\r\\n  color: #004332;\\r\\n  background-color: #ecebe6;\\r\\n  border: 0;\\r\\n  border-bottom: 0.2rem solid #004332;\\r\\n  border-top: 0.2rem solid #004332;\\r\\n}\\r\\n.categoryslctd:hover {\\r\\n  color: #c0a159;\\r\\n  background-color: #004332;\\r\\n  border-bottom: 0.2rem solid #c0a159;\\r\\n  border-top: 0.2rem solid #c0a159;\\r\\n}\\r\\n.modalImg {\\r\\n  height: 15rem;\\r\\n}\\r\\n.menuActive {\\r\\n  background-color: #004332;\\r\\n  color: #c0a159;\\r\\n  border-bottom: 0.2rem solid #c0a159;\\r\\n  border-top: 0.2rem solid #c0a159;\\r\\n}\\r\\n.dBlock {\\r\\n  display: block;\\r\\n}\\r\\n.dNone {\\r\\n  display: none;\\r\\n}\\r\\n/* .cntspnmeals {\\r\\n  display: none;\\r\\n} */\\r\\n.contAll {\\r\\n  min-height: 50rem;\\r\\n}\\r\\n.translate-middle {\\r\\n  transform: translate(-100%, 50%) !important;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://the-meal/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://the-meal/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://the-meal/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://the-meal/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://the-meal/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://the-meal/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://the-meal/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://the-meal/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://the-meal/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://the-meal/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_mealsMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mealsMenu.js */ \"./src/modules/mealsMenu.js\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n\r\n\r\n\r\n\r\n\r\nconst logoLink = document.querySelector(\".logo-link\");\r\nconst logo = new Image();\r\nlogo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_2__;\r\nlogo.id = \"nav-logo\";\r\nlogoLink.appendChild(logo);\r\n\r\nconst menuListUrl = \"https://www.themealdb.com/api/json/v1/1/list.php?c=list\";\r\n\r\n(0,_modules_mealsMenu_js__WEBPACK_IMPORTED_MODULE_1__.getData)(menuListUrl);\r\n\n\n//# sourceURL=webpack://the-meal/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentcounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentcounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getCount = () => {\r\n    const list = document.querySelectorAll(\".shown-comment\");\r\n    const counted = list.length;\r\n    return counted;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCount);\n\n//# sourceURL=webpack://the-meal/./src/modules/commentcounter.js?");

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst appLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7P9rWHY7WsKk1rSNM8nF/comments';\r\n\r\nconst postComment = async (MealId, name, message) => {\r\n    if(name.value && message.value) {\r\n        await fetch(appLink, {\r\n            method: 'post',\r\n            body: JSON.stringify({\r\n                item_id: MealId,\r\n                username: name.value,\r\n                comment: message.value,\r\n            }),\r\n            headers: {\r\n                'Content-type': 'application/json; charset=UTF-8',\r\n            },\r\n        })\r\n    }\r\n};\r\n\r\nconst getComments = async (hostId) => {\r\n    const commentLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7P9rWHY7WsKk1rSNM8nF/comments?item_id=' + hostId;\r\n    const response = await fetch(commentLink);\r\n    if(response.ok) {\r\n        const retrieved = await response.json();\r\n        return retrieved;\r\n    }\r\n    else if(response.status === 400){\r\n        return [];        \r\n    }\r\n}\n\n//# sourceURL=webpack://the-meal/./src/modules/involvement.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikesNumber\": () => (/* binding */ getLikesNumber),\n/* harmony export */   \"likeButtonAction\": () => (/* binding */ likeButtonAction)\n/* harmony export */ });\nconst singleMeal = document.querySelectorAll(\".singleMeal\");\r\nconst url =\r\n  \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7P9rWHY7WsKk1rSNM8nF/likes\";\r\n  \r\n\r\nconst getLikesNumber = async () => {\r\n  const cards = document.querySelectorAll(\".singleMeal\");\r\n  const likeCount = document.querySelectorAll(\".displayLikes\");\r\n  await fetch(url)\r\n    .then((response) => response.json())\r\n    .then((json) => {\r\n      cards.forEach((card, index) => {\r\n        json.forEach((item) => {\r\n          if (item.item_id === card.id) {\r\n            likeCount[index].innerHTML = item.likes;\r\n          }\r\n        });\r\n      });\r\n    });\r\n};\r\nconst likeButtonAction = async () => {\r\n  const likeButtons = document.querySelectorAll(\".likeButton\");\r\n  const likeBtnCount = document.querySelectorAll(\".displayLikes\");\r\n  likeButtons.forEach((btn, index) => {\r\n    btn.addEventListener(\"click\", (e) => {\r\n      e.target.textContent = \"❤️\";\r\n      likeBtnCount[index].innerHTML = Number(likeBtnCount[index].innerHTML) + 1;\r\n      fetch(url, {\r\n        method: \"POST\",\r\n        body: JSON.stringify({\r\n          item_id: btn.closest(\".singleMeal\").dataset.id,\r\n        }),\r\n        headers: {\r\n          \"Content-type\": \"application/json; charset=UTF-8\",\r\n        },\r\n      });\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://the-meal/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/mealsMenu.js":
/*!**********************************!*\
  !*** ./src/modules/mealsMenu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"itemsCounter\": () => (/* binding */ itemsCounter),\n/* harmony export */   \"mealsCnt\": () => (/* binding */ mealsCnt),\n/* harmony export */   \"optionsBtn\": () => (/* binding */ optionsBtn)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\r\n\r\n\r\n\r\nconst menuCategories = document.querySelector(\".menuCategories\");\r\nconst menuOptions = document.querySelector(\".menuOptions\");\r\n\r\nconst menuListUrl = \"https://www.themealdb.com/api/json/v1/1/list.php?c=list\";\r\n\r\nconst getData = async (url) => {\r\n  menuCategories.innerHTML = \"\";\r\n  const response = await fetch(url);\r\n  const resultData = await response.json();\r\n  const allCategories = resultData.meals;\r\n  let displayMenuCategories = \"\";\r\n  displayMenuCategories = allCategories.map(\r\n    (item) =>\r\n      `<div class=\"position-relative\">\r\n      <button type=\"button\"  class=\"btn categoryslctd px-2 py-1 fs-4 m-3 \" >${item.strCategory}</button>\r\n      <span class=\"cntspnmeals   position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger\" data-user=\"${item.strCategory}\"  ></span>\r\n      </div>`\r\n  );\r\n  menuCategories.innerHTML = displayMenuCategories.join(\" \");\r\n  optionsBtn();\r\n};\r\n\r\nconst itemsCounter = (elm, options) => {\r\n  const cntspnmeals = document.querySelectorAll(\".cntspnmeals\");\r\n  cntspnmeals.forEach((countsMl) => {\r\n    if (countsMl.dataset.user === elm) {\r\n      countsMl.textContent = `(${options})`;\r\n    }\r\n  });\r\n};\r\nconst mealsCnt = (data) => {\r\n  const mealsCount = Object.keys(data).length;\r\n  return mealsCount;\r\n};\r\n// display all meals\r\nconst getOptionsData = async (element) => {\r\n  const url = \"https://www.themealdb.com/api/json/v1/1/filter.php?c=\" + element;\r\n  menuOptions.innerHTML = \"\";\r\n\r\n  const response = await fetch(url);\r\n  const resultData = await response.json();\r\n  const allOptions = resultData.meals;\r\n  const count = mealsCnt(allOptions);\r\n  itemsCounter(element, count);\r\n\r\n  const displayMenuOptions = allOptions.map(\r\n    (item) => `\r\n        <div class=\"card m-2 px-0 singleMeal shadow-lg p-3 mb-5 bg-body rounded\" style=\"width: 12rem;\" id=\"${item.idMeal}\" data-id=\"${item.idMeal}\">\r\n      <img src=\"${item.strMealThumb}\" class=\"card-img-top\" alt=\"...\">\r\n      <div class=\"card-body d-flex flex-column\">\r\n        <h5 class=\"card-title\">${item.strMeal}</h5>\r\n        <h5 class=\"card-title\">${item.idMeal}</h5>\r\n        <button class=\"likeButton border-0 bg-transparent\" >🤍</button>\r\n        \r\n        <span class=\"displayLikes\">0</span>\r\n        <p>Likes</p>\r\n        <button type=\"button\" class=\"btn btn-primary commentBtn\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">Comments\r\n  </button>\r\n        \r\n      </div>\r\n    </div>`\r\n  );\r\n\r\n  menuOptions.innerHTML = displayMenuOptions.join(\" \");\r\n\r\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.commentBtnAction)();\r\n  (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.likeButtonAction)();\r\n  (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.getLikesNumber)();\r\n};\r\n\r\nconst optionsBtn = () => {\r\n  const options = document.querySelectorAll(\".categoryslctd\");\r\n  options.forEach((opt) => {\r\n    opt.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      const category = e.target.textContent;\r\n\r\n      document.querySelector(\".menuActive\")\r\n        ? document.querySelector(\".menuActive\").classList.remove(\"menuActive\")\r\n        : \"\";\r\n      e.target.classList.add(\"menuActive\");\r\n      getOptionsData(category);\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://the-meal/./src/modules/mealsMenu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commDisplay\": () => (/* binding */ commDisplay),\n/* harmony export */   \"commentBtnAction\": () => (/* binding */ commentBtnAction)\n/* harmony export */ });\n/* harmony import */ var _commentcounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentcounter.js */ \"./src/modules/commentcounter.js\");\n/* harmony import */ var _involvement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvement.js */ \"./src/modules/involvement.js\");\n\r\n\r\n\r\nconst modalTitle = document.querySelector(\".modal-title\");\r\nconst modalImg = document.querySelector(\".modalImg\");\r\nconst modalId = document.querySelector(\"#mdl-Id\");\r\n\r\nconst categoryMdl = document.querySelector(\".categoryMdl\");\r\nconst areaMdl = document.querySelector(\".areaMdl\");\r\nconst tagsMdl = document.querySelector(\".tagsMdl\");\r\n\r\nconst commDisplay = document.querySelector(\".comntContainer\");\r\nconst commCount = document.querySelector(\".commentsNum\");\r\nconst addCmtBtn = document.querySelector(\"#addCmtForm\");\r\nconst user = document.querySelector(\"#nameCmt\");\r\nconst message = document.querySelector(\"#textCmt\");\r\n\r\nconst setMealUrl = (mealId) => {\r\n  getMealData(\"https://www.themealdb.com/api/json/v1/1/lookup.php?i=\" + mealId);\r\n};\r\n\r\n// Activate Popup Button \r\nconst commentBtnAction = () => {\r\n  const commentBtnS = document.querySelectorAll(\".commentBtn\");\r\n  commentBtnS.forEach((commentBtn) => {\r\n    commentBtn.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      const commentIdS = commentBtn.closest(\".singleMeal\").dataset.id;\r\n      setMealUrl(commentIdS);\r\n      displayComments(commentIdS);\r\n    });\r\n  });\r\n};\r\n\r\nconst changeId = () => {\r\n  const newId = modalId.getAttribute(\"id\");\r\n  return newId;\r\n}\r\n\r\n// populate popup\r\nconst getMealData = async (url) => {\r\n  const response = await fetch(url);\r\n  const resultData = await response.json();\r\n  const mealDes = resultData.meals[0];\r\n  modalTitle.innerHTML = mealDes.strMeal;\r\n  modalImg.src = mealDes.strMealThumb;\r\n  modalId.id = mealDes.idMeal;\r\n\r\n  categoryMdl.innerHTML = \"Category: \" + mealDes.strCategory;\r\n  areaMdl.innerHTML = \"Area: \" + mealDes.strArea;\r\n  tagsMdl.innerHTML = \"Tags: \" + mealDes.strTags;\r\n};\r\n\r\n// Display comments in popup\r\nconst displayComments = async (hostId) => {\r\n  const allComments = await (0,_involvement_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(hostId);\r\n  if(allComments === 0) {\r\n    return;\r\n  }\r\n  let cmntsMarkup = \"\";\r\n  allComments.forEach((item) => {\r\n    cmntsMarkup += `<li class=\"shown-comment\">${item.creation_date} - ${item.username} <br> ${item.comment}</li>`\r\n  })\r\n  commDisplay.innerHTML = cmntsMarkup;\r\n  const comments = await (0,_commentcounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  console.log(comments);\r\n  commCount.innerHTML = comments;\r\n  addCmtBtnAction();\r\n};\r\n\r\n// Add comment function\r\nconst addCmtBtnAction = () => {\r\n  addCmtBtn.onsubmit = async (e) => {\r\n    e.preventDefault();\r\n    const mealId = changeId();\r\n    await (0,_involvement_js__WEBPACK_IMPORTED_MODULE_1__.postComment)(mealId, user, message);\r\n    displayComments(mealId);\r\n    addCmtBtn.reset();\r\n  };\r\n};\n\n//# sourceURL=webpack://the-meal/./src/modules/modal.js?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"891e2da6f399b9ee0326.png\";\n\n//# sourceURL=webpack://the-meal/./src/images/logo.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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