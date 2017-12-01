(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sym-components"] = factory();
	else
		root["sym-components"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sym_data_table_SymDataTable__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SymDataTable", function() { return __WEBPACK_IMPORTED_MODULE_0__components_sym_data_table_SymDataTable__["a"]; });


/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    Vue.component('sym-data-table', __WEBPACK_IMPORTED_MODULE_0__components_sym_data_table_SymDataTable__["a" /* default */]);
  }
});



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_SymDataTable_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bf0bae8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_SymDataTable_vue__ = __webpack_require__(9);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1bf0bae8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_SymDataTable_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bf0bae8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_SymDataTable_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\sym-data-table\\SymDataTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bf0bae8", Component.options)
  } else {
    hotAPI.reload("data-v-1bf0bae8", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("a4c5ce1c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1bf0bae8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./SymDataTable.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1bf0bae8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./SymDataTable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, "\n/* Rules for sizing the icon. */\n.material-icons.md-18[data-v-1bf0bae8] { font-size: 18px;\n}\n.material-icons.md-24[data-v-1bf0bae8] { font-size: 24px;\n}\n.material-icons.md-36[data-v-1bf0bae8] { font-size: 36px;\n}\n.material-icons.md-48[data-v-1bf0bae8] { font-size: 48px;\n}\n.sym-icon-button[data-v-1bf0bae8] {\n  border: 0;\n  background: transparent;\n  outline: 0;\n  cursor: pointer;\n  color: rgba(0,0,0,0.54)\n}\n.sym-icon-button[disabled][data-v-1bf0bae8] {\n  color: rgba(0,0,0,0.12)\n}\n.sym-icon-button-primary[data-v-1bf0bae8] {\n  color: rgba(0,0,0,0.83)\n}\n.sym-icon-button[data-v-1bf0bae8]:focus {\n  outline: 0;\n}\n.extra-commands[data-v-1bf0bae8] {\n  display: inline;\n}\n.unselectable[data-v-1bf0bae8] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.selected[data-v-1bf0bae8] {\n  background-color: rgba(0, 0, 0, 0.06);\n}\n.sym-table[data-v-1bf0bae8] {\n  font-family: 'Roboto', sans-serif;\n}\n.sym-table > table[data-v-1bf0bae8] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntd[data-v-1bf0bae8] {\n  border: none;\n}\ntd.begin[data-v-1bf0bae8] {\n  width: 13px;\n  border-left: 3px solid rgba(0, 0, 0, 0);\n}\ntd.begin-selected[data-v-1bf0bae8] {\n  border-left: 3px solid #FFA300;\n}\ntd.end[data-v-1bf0bae8] {\n  width: 16px;\n}\nth[data-v-1bf0bae8] {\n  font-weight: 400 !important;\n}\n.sym-table > table > thead > tr[data-v-1bf0bae8] {\n  font-size: 12px;\n  font-weight: 400 !important;\n  color: rgba(0, 0, 0, 0.54);\n  height: 42px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.sym-table > table > tbody > tr[data-v-1bf0bae8] {\n  font-size: 13px;\n  font-weight: 400 !important;\n  color: rgba(0, 0, 0, 0.83);\n  height: 36px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.sym-table > table > tbody > tr > td[data-v-1bf0bae8],\n.sym-table > table > tfoot > tr > th[data-v-1bf0bae8],  \n.sym-table > table > thead > tr > th[data-v-1bf0bae8] {\n    padding: 0 8px 0 0;\n}\n.sym-table > table > tfoot > tr > th[data-v-1bf0bae8]:first-child {\n    padding: 0 0 0 16px;\n}\n.sym-table > table > tbody > tr[data-v-1bf0bae8]:hover {\n  cursor: pointer;\n}\n.sym-table > table > tbody > tr:hover td[data-v-1bf0bae8]:first-child {\n  border-left: 3px solid #FFA300;\n}\n.sym-table-icons[data-v-1bf0bae8] {\n  float: right;\n  padding-right: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; \n  -webkit-box-orient: vertical; \n  -webkit-box-direction: normal; \n      -ms-flex-flow: column; \n          flex-flow: column; \n  height: 100%; \n  -ms-flex-pack: distribute; \n      justify-content: space-around;\n}\n.card[data-v-1bf0bae8] {\n  background-color: white;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n}\n.sym-table-header[data-v-1bf0bae8] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  height: 47px;\n  display: table;\n  overflow: hidden;\n  width: 100%;\n}\n.sym-table-header-content[data-v-1bf0bae8] {\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.83);\n  display: table-cell;\n  vertical-align: middle;\n  padding-left: 16px;\n  outline: 0;\n  cursor: pointer;\n}\n.col-string[data-v-1bf0bae8], \n.head-string[data-v-1bf0bae8] {\n  text-align: left;\n}\n.col-currency[data-v-1bf0bae8], \n.head-currency[data-v-1bf0bae8] {\n  text-align: right;\n}\n.footer[data-v-1bf0bae8], \n.footer > th[data-v-1bf0bae8] {\n  font-size: 14px;\n  font-weight: 600 !important;\n  color: rgba(0, 0, 0, 0.83);\n  height: 36px;\n}\n.footer-label[data-v-1bf0bae8] {\n  text-align: left;\n  padding-left: 14px;\n}\n.icon-down[data-v-1bf0bae8] {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n.icon-up[data-v-1bf0bae8] {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n.slide-enter-active[data-v-1bf0bae8] {\n  -webkit-transition: all .3s ease-in-out;\n  transition: all .3s ease-in-out;\n}\n.slide-leave-active[data-v-1bf0bae8] {\n  -webkit-transition: all .8s ease-in-out;\n  transition: all .8s ease-in-out;\n}\n.slide-enter[data-v-1bf0bae8], .slide-leave-to[data-v-1bf0bae8] {\n  -webkit-transform: translateY(-100px);\n          transform: translateY(-100px);\n}\n.ripple[data-v-1bf0bae8] {\n  position: relative;\n  overflow: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n.ripple[data-v-1bf0bae8]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #000 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  -webkit-transform: scale(10, 10);\n          transform: scale(10, 10);\n  opacity: 0;\n  -webkit-transition: opacity 1s, -webkit-transform .5s;\n  transition: opacity 1s, -webkit-transform .5s;\n  transition: transform .5s, opacity 1s;\n  transition: transform .5s, opacity 1s, -webkit-transform .5s;\n}\n.ripple[data-v-1bf0bae8]:active:after {\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  opacity: .2;\n  -webkit-transition: 0s;\n  transition: 0s;\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(6)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * SymDataTable (usage sym-data-table)
 * A Data Table component using Material Design
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'sym-data-table',

  data: function data() {
    return {

      /* placeholder for selected rows */
      selectedRows: [],

      /* placeholder for collapsed state */
      isCollapsed: false
    };
  },
  mounted: function mounted() {
    this.isCollapsed = this.collapsed;
  },


  computed: {
    /* columns totals can be calculated here */
    totals: function totals() {
      /* without footer visible, no need to calculate totals */
      if (this.hasFooter) {
        var totalsRow = [];
        for (var i = 0; i < this.columns.length - 1; i++) {
          /* if the column has total, calculate */
          if (this.columns[i + 1].hasTotal) {
            totalsRow.push({
              hasTotal: this.columns[i + 1].hasTotal,
              width: this.columns[i + 1].width,
              type: this.columns[i + 1].type,
              format: this.columns[i + 1].format,
              value: this.sumRowsByColumn(this.columns[i + 1].name)
            });
            /* otherwise create an empty row to preserve XHTML validation */
          } else {
            totalsRow.push({
              hasTotal: false,
              width: this.columns[i + 1].width,
              type: this.columns[i + 1].type,
              value: '',
              format: undefined
            });
          }
        }
        return totalsRow;
      }
    }
  },

  props: {
    /* the title of the table */
    title: {
      type: String,
      required: true,
      default: 'sym-data-table'
    },

    /* when true, multiple rows can be selected */
    multiSelect: {
      type: Boolean,
      required: false,
      default: false
    },

    /* when true, provide a card with shadow and 16px padding */
    isCard: {
      type: Boolean,
      required: false,
      default: false
    },

    /* when true, display a collapse icon and make the table collapsible */
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    },

    /* when true, the table is hidden by default */
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },

    /* when true, display a footer */
    hasFooter: {
      type: Boolean,
      required: false,
      default: false
    },

    /* when set, provides a custom label for the totals */
    footerLabel: {
      type: String,
      required: false,
      default: 'Totals'
    },

    /* the items data-bound to the data table */
    items: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    },

    /* the columns configuration */
    columns: {
      type: Array,
      required: false,
      default: function _default() {
        return [];
      }
    },

    /* the optionals actions */
    actions: {
      type: Array,
      required: false,
      default: function _default() {
        return [];
      }
    },

    /* when true, display the pagination control */
    hasPagination: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods: {

    /**
      * When a specific action is triggered
    */
    actionTriggered: function actionTriggered(action) {
      this.$emit('action-triggered', action);
    },

    /**
      * Triggered when a TR is selected/unselected
      * bound to a single click/tap event
    */
    toggleRow: function toggleRow(item) {
      /* get the selected row */
      var index = this.selectedRows.indexOf(item);

      /* if it's selected, unselected or vice-versa */
      if (index > -1) {
        this.selectedRows.splice(index, 1);
      } else {
        if (!this.multiSelect) {
          this.selectedRows.splice(0, this.selectedRows.length);
        }
        this.selectedRows.push(item);
      }

      /* notify */
      this.$emit('selected-rows-changed', this.selectedRows);
    },

    /**
      * switch between collapsed mode
     */
    toggleCollapse: function toggleCollapse() {
      // Do nothing if not collapsible
      if (!this.collapsible) {
        return;
      }
      this.isCollapsed = !this.isCollapsed;
      this.$emit('collapse-toggle', this.isCollapsed);
    },

    /**
      * sum all values of a specified column
     */
    sumRowsByColumn: function sumRowsByColumn(column) {
      var sum = 0;
      for (var i = 0; i < this.items.length; i++) {
        sum += parseFloat(this.items[i][column]);
      }
      return sum;
    },

    /**
      * format a value base on type
     */
    formatValue: function formatValue(val, col, item) {
      /* use custom format if defined */
      if (col.format) {
        return col.format(val, item);
      }

      /* safe type check */
      if (val === null) {
        return null;
      }

      /* if col is currency */
      if (col.type === 'currency') {
        return '' + parseFloat(val).toFixed(2);
      }
      return val;
    }
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "sym-table", class: { card: _vm.isCard } },
    [
      _c("div", { staticClass: "sym-table-header" }, [
        _c(
          "div",
          {
            staticClass: "sym-table-header-content",
            class: {
              ripple: _vm.collapsible
            },
            on: { click: _vm.toggleCollapse }
          },
          [_vm._v(_vm._s(_vm.title))]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "sym-table-icons" }, [
          _c(
            "div",
            { attrs: { name: "table-commands" } },
            [
              _vm._l(_vm.actions, function(act, actIndex) {
                return _c(
                  "button",
                  {
                    key: actIndex,
                    staticClass: "sym-icon-button",
                    class: { ripple: !act.disabled },
                    attrs: { disabled: act.disabled },
                    on: {
                      click: function($event) {
                        _vm.actionTriggered(act)
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "material-icons md-24" }, [
                      _vm._v(_vm._s(act.icon))
                    ])
                  ]
                )
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "extra-commands" },
                [_vm._t("extra-commands")],
                2
              ),
              _vm._v(" "),
              _vm.collapsible
                ? _c(
                    "button",
                    {
                      staticClass:
                        "sym-icon-button sym-icon-button-primary ripple",
                      on: { click: _vm.toggleCollapse }
                    },
                    [
                      _c(
                        "i",
                        {
                          staticClass: "material-icons md-24",
                          class: "icon-" + (_vm.isCollapsed ? "down" : "up")
                        },
                        [_vm._v("expand_less")]
                      )
                    ]
                  )
                : _vm._e()
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "none" } }, [
        !_vm.isCollapsed
          ? _c("table", { staticClass: "unselectable" }, [
              _c("thead", [
                _c(
                  "tr",
                  [
                    _c("th", { staticClass: "begin" }),
                    _vm._v(" "),
                    _vm._l(_vm.columns, function(col, colIndex) {
                      return _c(
                        "th",
                        {
                          key: colIndex,
                          class: "head-" + col.type,
                          attrs: {
                            width: isNaN(col.width) ? "auto" : col.width
                          }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(col.label) +
                              "\n          "
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("th", { staticClass: "end" })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _vm.hasFooter
                ? _c("tfoot", [
                    _c(
                      "tr",
                      { staticClass: "footer" },
                      [
                        _c(
                          "th",
                          {
                            staticClass: "footer-label",
                            attrs: { colspan: "2" }
                          },
                          [_vm._v(_vm._s(_vm.footerLabel))]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.totals, function(col, colIndex) {
                          return _c(
                            "th",
                            {
                              key: colIndex,
                              class: "head-" + col.type,
                              attrs: {
                                width: isNaN(col.width) ? "auto" : col.width
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(
                                    _vm.formatValue(col.value, col, null)
                                  ) +
                                  "\n          "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.items, function(item, index) {
                  return _c(
                    "tr",
                    {
                      key: index,
                      class: { selected: _vm.selectedRows.indexOf(item) > -1 },
                      on: {
                        click: function($event) {
                          _vm.toggleRow(item)
                        }
                      }
                    },
                    [
                      _c("td", {
                        staticClass: "begin",
                        class: {
                          "begin-selected": _vm.selectedRows.indexOf(item) > -1
                        }
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.columns, function(col, colIndex) {
                        return _c(
                          "td",
                          { key: colIndex, class: "col-" + col.type },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(
                                  _vm.formatValue(item[col.name], col, item)
                                ) +
                                "\n          "
                            )
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c("td", { staticClass: "end" })
                    ],
                    2
                  )
                })
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.hasPagination
        ? _c("div", { staticClass: "sym-pagination" }, [
            _c("span", [_vm._v("Rows per page")]),
            _vm._v(" "),
            _vm._m(0, false, false),
            _vm._v(" "),
            _c("span", [_vm._v("1-3 of 3")]),
            _vm._v(" "),
            _vm._m(1, false, false),
            _vm._v(" "),
            _vm._m(2, false, false)
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "bottom-commands" },
        [_vm._t("bottom-commands")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("select", [
      _c("option", [_vm._v("5")]),
      _vm._v(" "),
      _c("option", [_vm._v("10")]),
      _vm._v(" "),
      _c("option", [_vm._v("25")]),
      _vm._v(" "),
      _c("option", [_vm._v("50")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "sym-icon-button ripple" }, [
      _c("i", { staticClass: "material-icons md-24" }, [
        _vm._v("navigate_before")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "sym-icon-button ripple" }, [
      _c("i", { staticClass: "material-icons md-24" }, [
        _vm._v("navigate_next")
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1bf0bae8", esExports)
  }
}

/***/ })
/******/ ]);
});