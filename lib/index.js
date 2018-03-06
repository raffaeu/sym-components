(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["sym-components"] = factory(require("vue"));
	else
		root["sym-components"] = factory(root["vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_46__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(6);
var defined = __webpack_require__(7);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(35);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sym_data_table_SymDataTable__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SymDataTable", function() { return __WEBPACK_IMPORTED_MODULE_0__components_sym_data_table_SymDataTable__["a"]; });


/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    Vue.component('sym-data-table', __WEBPACK_IMPORTED_MODULE_0__components_sym_data_table_SymDataTable__["a" /* default */]);
  }
});



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_SymDataTable_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bf0bae8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_SymDataTable_html__ = __webpack_require__(47);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(11)
}
var normalizeComponent = __webpack_require__(16)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bf0bae8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_SymDataTable_html__["a" /* default */],
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("74eb1204", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1bf0bae8\",\"scoped\":true,\"hasInlineConfig\":false}!./SymDataTable.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1bf0bae8\",\"scoped\":true,\"hasInlineConfig\":false}!./SymDataTable.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, "\n/*==============================================================\r\n    Table of Contents\r\n        1. General\r\n        2. Icons and Buttons    \r\n        3. Table Layout\r\n        4. Animation\r\n==============================================================*/\r\n/*==============================================================\r\n    1. General\r\n==============================================================*/\n.sym-card[data-v-1bf0bae8] {\r\n  background-color: white;\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.sym-unselectable[data-v-1bf0bae8] {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\n}\n.sym-selectable>table>tbody>tr[data-v-1bf0bae8]:hover {\r\n  cursor: pointer;\r\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.sym-selectable>table>tbody>tr:hover td[data-v-1bf0bae8]:first-child {\r\n  border-left: 4px solid #FFA300;\n}\n.sym-head-selectable[data-v-1bf0bae8] {\r\n  cursor: pointer;\n}\n.sym-head-sorted[data-v-1bf0bae8] {\r\n  color: rgba(0, 0, 0, .87);\n}\n.sym-head-selectable[data-v-1bf0bae8]:hover {\r\n  cursor: pointer;\r\n  background-color: rgba(0, 0, 0, 0.06);\n}\n.sym-row-selected[data-v-1bf0bae8] {\r\n  background-color: rgba(0, 0, 0, 0.06);\n}\n.sym-row-begin[data-v-1bf0bae8] {\r\n    border-left: 4px solid rgba(0, 0, 0, 0);\n}\n.sym-row-begin-selected[data-v-1bf0bae8] {\r\n  border-left: 4px solid #FFA300;\n}\n.sym-row-begin[data-v-1bf0bae8],\r\n.sym-row-begin-selected[data-v-1bf0bae8] {\r\n    width: 13px;\r\n    min-width: 13px;\r\n    max-width: 13px;\n}\r\n/*==============================================================\r\n    2. Icons and Buttons\r\n==============================================================*/\n.material-icons.md-14[data-v-1bf0bae8] {\r\n  font-size: 14px;\n}\n.material-icons.md-18[data-v-1bf0bae8] {\r\n  font-size: 18px;\n}\n.material-icons.md-24[data-v-1bf0bae8] {\r\n  font-size: 24px;\n}\n.material-icons.md-36[data-v-1bf0bae8] {\r\n  font-size: 36px;\n}\n.material-icons.md-48[data-v-1bf0bae8] {\r\n  font-size: 48px;\n}\n.sym-icon-button[data-v-1bf0bae8] {\r\n  border: 0;\r\n  background: transparent;\r\n  outline: 0;\r\n  cursor: pointer;\r\n  color: rgba(0, 0, 0, 0.54)\n}\n.sym-icon-button[disabled][data-v-1bf0bae8] {\r\n  color: rgba(0, 0, 0, 0.12)\n}\n.sym-icon-button-primary[data-v-1bf0bae8] {\r\n  color: rgba(0, 0, 0, 0.83)\n}\n.sym-icon-button[data-v-1bf0bae8]:focus {\r\n  outline: 0;\n}\n.icon-down[data-v-1bf0bae8] {\r\n  -webkit-transform: rotate(0deg);\r\n          transform: rotate(0deg);\r\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\r\n  transition: -webkit-transform 0.3s ease-in-out;\r\n  transition: transform 0.3s ease-in-out;\r\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n.icon-up[data-v-1bf0bae8] {\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg);\r\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\r\n  transition: -webkit-transform 0.3s ease-in-out;\r\n  transition: transform 0.3s ease-in-out;\r\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\r\n/*==============================================================\r\n    3. Table layout\r\n==============================================================*/\n.sym-table[data-v-1bf0bae8] {\r\n  font-family: 'Roboto', sans-serif;\n}\n.sym-table>table[data-v-1bf0bae8] {\r\n  width: 100%;\r\n  border-collapse: collapse;\n}\n.sym-table-header[data-v-1bf0bae8] {\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\r\n  height: 47px;\r\n  display: table;\r\n  overflow: hidden;\r\n  width: 100%;\n}\n.sym-table-header-content[data-v-1bf0bae8] {\r\n  font-size: 20px;\r\n  color: rgba(0, 0, 0, 0.83);\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  padding-left: 16px;\r\n  outline: 0;\r\n  cursor: pointer;\r\n  width: 100%\n}\n.sym-table-icons[data-v-1bf0bae8] {\r\n    float: right;\r\n    padding-right: 16px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    height: 100%;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content\n}\n.sym-extra-commands[data-v-1bf0bae8] {\r\n  display: inline;\n}\n.sym-sub-header[data-v-1bf0bae8] {\r\n  padding: 0 16px;\n}\ntd[data-v-1bf0bae8] {\r\n    border: none;\n}\ntd.end[data-v-1bf0bae8] {\r\n    width: 16px;\n}\nth[data-v-1bf0bae8] {\r\n    font-weight: 400 !important;\n}\nthead>tr[data-v-1bf0bae8] {\r\n    font-size: 12px;\r\n    font-weight: 400 !important;\r\n    color: rgba(0, 0, 0, 0.54);\r\n    height: 42px;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\ntbody>tr[data-v-1bf0bae8] {\r\n    font-size: 13px;\r\n    font-weight: 400 !important;\r\n    color: rgba(0, 0, 0, 0.83);\r\n    height: 36px;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\ntbody>tr>td[data-v-1bf0bae8],\r\n  tfoot>tr>th[data-v-1bf0bae8],\r\n  thead>tr>th[data-v-1bf0bae8] {\r\n    padding: 0 8px 0 0;\n}\ntfoot>tr>th[data-v-1bf0bae8]:first-child {\r\n    padding: 0 0 0 16px;\n}\n.detail[data-v-1bf0bae8] {\r\n    padding: 0 16px 0 16px;\n}\n.sym-table-commands[data-v-1bf0bae8] {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\n}\r\n/*==============================================================\r\n    4. Table behaviour\r\n==============================================================*/\n.col-string[data-v-1bf0bae8],\r\n.head-string[data-v-1bf0bae8] {\r\n  text-align: left;\n}\n.col-currency[data-v-1bf0bae8],\r\n.head-currency[data-v-1bf0bae8] {\r\n  text-align: right;\n}\n.sym-table-footer[data-v-1bf0bae8],\r\n.sym-table-footer>th[data-v-1bf0bae8] {\r\n  font-size: 14px;\r\n  font-weight: 600 !important;\r\n  color: rgba(0, 0, 0, 0.83);\r\n  height: 36px;\n}\n.sym-table-footer-label[data-v-1bf0bae8] {\r\n  text-align: left;\r\n  padding-left: 14px;\n}\n.sym-table-no-data[data-v-1bf0bae8] {\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: rgba(0, 0, 0, 0.38);\r\n    height: 36px;\r\n    text-align: center;\r\n    line-height: 36px;\n}\r\n/*==============================================================\r\n    4. Animation\r\n==============================================================*/\n.slide-enter-active[data-v-1bf0bae8] {\r\n  -webkit-transition: all .3s ease-in-out;\r\n  transition: all .3s ease-in-out;\n}\n.slide-leave-active[data-v-1bf0bae8] {\r\n  -webkit-transition: all .8s ease-in-out;\r\n  transition: all .8s ease-in-out;\n}\n.slide-enter[data-v-1bf0bae8],\r\n.slide-leave-to[data-v-1bf0bae8] {\r\n  -webkit-transform: translateY(-100px);\r\n          transform: translateY(-100px);\n}\n.sym-ripple[data-v-1bf0bae8] {\r\n  position: relative;\r\n  overflow: hidden;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\n}\n.sym-ripple[data-v-1bf0bae8]:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  pointer-events: none;\r\n  background-image: radial-gradient(circle, #000 10%, transparent 10.01%);\r\n  background-repeat: no-repeat;\r\n  background-position: 50%;\r\n  -webkit-transform: scale(10, 10);\r\n          transform: scale(10, 10);\r\n  opacity: 0;\r\n  -webkit-transition: opacity 1s, -webkit-transform .5s;\r\n  transition: opacity 1s, -webkit-transform .5s;\r\n  transition: transform .5s, opacity 1s;\r\n  transition: transform .5s, opacity 1s, -webkit-transform .5s;\n}\n.sym-ripple[data-v-1bf0bae8]:active:after {\r\n  -webkit-transform: scale(0, 0);\r\n          transform: scale(0, 0);\r\n  opacity: .2;\r\n  -webkit-transition: 0s;\r\n  transition: 0s;\n}\r\n/*==============================================================\r\n    5. Pagination\r\n==============================================================*/\n.sym-pagination[data-v-1bf0bae8] {\r\n    height: 47px;\r\n    display: table;\r\n    overflow: hidden;\r\n    width: 100%;\n}\n.sym-pagination-icons[data-v-1bf0bae8],\r\n.sym-pagination-navigation[data-v-1bf0bae8] {\r\n    float: right;\r\n    padding-right: 16px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row;\r\n            flex-flow: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 100%;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content\n}\n.sym-pagination-icons *[data-v-1bf0bae8] {\r\n    padding-left: 16px;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    color: rgba(0, 0, 0, .54);\n}\n.sym-pagination-navigation *[data-v-1bf0bae8] {\r\n    padding: 0 3px;\r\n    font-size: 13px;\r\n    font-weight: 400;\n}", ""]);

// exports


/***/ }),
/* 13 */
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
/* 14 */
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

var listToStyles = __webpack_require__(15)

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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);

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
      isCollapsed: false,

      /* backward pagination enabled */
      backDisabled: true,

      /* forward pagination enabled */
      forwardDisabled: true
    };
  },
  mounted: function mounted() {
    this.isCollapsed = this.collapsed;
    this.evaluatePager();
  },


  computed: {
    /* columns totals can be calculated here */
    totals: function totals() {
      /* without footer visible, no need to calculate totals */
      if (this.hasFooter) {
        var totalsRow = [];
        var rowsToSkip = 0;
        for (var i = 0; i < this.columns.length - rowsToSkip; i++) {
          /* if the column has total, calculate */
          if (this.columns[i + rowsToSkip].hasTotal && this.calculateTotals) {
            totalsRow.push({
              hasTotal: this.columns[i + rowsToSkip].hasTotal,
              width: this.columns[i + rowsToSkip].width,
              type: this.columns[i + rowsToSkip].type,
              format: this.columns[i + rowsToSkip].format,
              value: this.sumRowsByColumn(this.columns[i + rowsToSkip].name)
            });
            /* otherwise create an empty row to preserve XHTML validation */
          } else {
            totalsRow.push({
              hasTotal: false,
              width: this.columns[i + rowsToSkip].width,
              type: this.columns[i + rowsToSkip].type,
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

    /* when true, rows can be selected */
    selectable: {
      type: Boolean,
      required: false,
      default: true
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

    calculateTotals: {
      type: Boolean,
      required: false,
      default: true
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

    /* the amount of items to be shown per each page */
    itemsPerPage: {
      type: Number,
      required: false,
      default: 25
    },

    /* the total nr of items */
    totalItems: {
      type: Number,
      required: false,
      default: 100
    },

    /* the current page */
    currentPage: {
      type: Number,
      required: false,
      default: 1
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
    },

    /* this property will be watched, when it's toggled to true selected items will be reset */
    clearSelection: {
      type: Boolean,
      required: false,
      default: false
    },

    /* message to show when there are no items */
    noDataMessage: {
      type: String,
      required: false,
      default: 'No data'
    },

    /* indicates if the table can be sorted */
    sortable: {
      type: Boolean,
      required: false,
      default: false
    },

    /* optional function that styles a row */
    rowStyler: {
      type: Function,
      required: false,
      default: function _default(item) {
        return {};
      }
    }
  },

  watch: {
    /* when clearSelection property is toggled to true, reset selected items */
    clearSelection: function clearSelection(value) {
      if (value === true) {
        this.selectedRows = [];
      }
    },
    /* when items change */
    items: function items(value) {
      this.evaluatePager();
    }
  },

  methods: {
    /**
     * Re-evaluate the pager commands
     */
    evaluatePager: function evaluatePager() {
      var from = (this.currentPage - 1) * this.itemsPerPage + 1;
      var to = (this.currentPage - 1) * this.itemsPerPage + this.items.length;
      // if BOF
      if (from <= 1) {
        this.backDisabled = true;
      } else {
        this.backDisabled = false;
      }

      // if EOF
      if (to === this.totalItems) {
        this.forwardDisabled = true;
      } else {
        this.forwardDisabled = false;
      }
    },

    /**
     * When a specific action is triggered
     */
    actionTriggered: function actionTriggered(action) {
      this.$emit('action-triggered', action);
    },

    /**
     * When the pagination is changed
     */
    pagerTriggered: function pagerTriggered(page) {
      this.$emit('page-changed', page);
    },

    /**
     * Triggered when a TR is selected/unselected
     * bound to a single click/tap event
     */
    toggleRow: function toggleRow(item, event) {
      /* if select is disabled, do nothing */
      if (!this.selectable) {
        return;
      }

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
      this.$emit('selected-rows-changed', { rows: this.selectedRows, event: event });
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
      /* safe type check */
      if (val === null | val === '') {
        return null;
      }

      /* use custom format if defined */
      if (col.format) {
        return col.format(val, item);
      }

      /* if col is currency */
      if (col.type === 'currency') {
        return '' + parseFloat(val).toFixed(2);
      }
      return val;
    },

    /**
     * toggle or activate the sorting
     */
    toggleSort: function toggleSort(col) {
      if (!this.sortable || !col.sortable) {
        return;
      }

      // reset sorted columns
      this.columns.forEach(function (element) {
        if (element !== col && element.sortable) {
          __WEBPACK_IMPORTED_MODULE_1_vue___default.a.set(element, 'sorted', false);
        }
      });

      if (!col.sorted) {
        __WEBPACK_IMPORTED_MODULE_1_vue___default.a.set(col, 'sorted', true);
        __WEBPACK_IMPORTED_MODULE_1_vue___default.a.set(col, 'sort_order', 'ASC');
      } else {
        __WEBPACK_IMPORTED_MODULE_1_vue___default.a.set(col, 'sort_order', col.sort_order === 'DESC' ? 'ASC' : 'DESC');
      }

      this.$emit('column-sorted', { col: col.name, sort_order: col.sort_order });
    },

    /*
    * sets the row's classes for styling
    */
    styleRow: function styleRow(item) {
      var userStyles = this.$props.rowStyler(item);

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({ 'sym-row-selected': this.selectedRows.indexOf(item) > -1 }, userStyles);
    }
  }
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(19), __esModule: true };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
module.exports = __webpack_require__(4).Object.assign;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(21);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(31) });


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(4);
var ctx = __webpack_require__(22);
var hide = __webpack_require__(24);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(23);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(25);
var createDesc = __webpack_require__(30);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(26);
var IE8_DOM_DEFINE = __webpack_require__(27);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(32);
var gOPS = __webpack_require__(43);
var pIE = __webpack_require__(44);
var toObject = __webpack_require__(45);
var IObject = __webpack_require__(6);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(42);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(34);
var toIObject = __webpack_require__(5);
var arrayIndexOf = __webpack_require__(36)(false);
var IE_PROTO = __webpack_require__(39)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(5);
var toLength = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(38);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(8);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(8);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(40)('keys');
var uid = __webpack_require__(41);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(7);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "sym-table",
      class: {
        "sym-card": _vm.isCard,
        "sym-selectable": _vm.selectable
      }
    },
    [
      _c(
        "div",
        { staticClass: "sym-table-header" },
        [
          _vm._t("pre-title"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "sym-table-header-content",
              class: {
                "sym-ripple": _vm.collapsible
              },
              on: { click: _vm.toggleCollapse }
            },
            [_vm._v(_vm._s(_vm.title))]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "sym-table-icons" }, [
            _c(
              "div",
              {
                staticClass: "sym-table-commands",
                attrs: { name: "table-commands" }
              },
              [
                _vm._l(_vm.actions, function(act, actIndex) {
                  return _c(
                    "button",
                    {
                      key: actIndex,
                      staticClass: "sym-icon-button",
                      class: { "sym-ripple": !act.disabled },
                      attrs: {
                        disabled: act.disabled,
                        alt: act.tooltip,
                        title: act.tooltip
                      },
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
                  { staticClass: "sym-extra-commands" },
                  [_vm._t("extra-commands")],
                  2
                ),
                _vm._v(" "),
                _vm.collapsible
                  ? _c(
                      "button",
                      {
                        staticClass:
                          "sym-icon-button sym-icon-button-primary sym-ripple",
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
        ],
        2
      ),
      _vm._v(" "),
      !_vm.isCollapsed
        ? _c(
            "div",
            { staticClass: "sym-sub-header" },
            [_vm._t("sub-header")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.items != null && _vm.items.length > 0
        ? _c("transition", { attrs: { name: "none" } }, [
            !_vm.isCollapsed
              ? _c("table", { staticClass: "sym-unselectable" }, [
                  _c("thead", [
                    _vm.$slots.detail
                      ? _c("tr", [
                          _c(
                            "th",
                            {
                              staticClass:
                                "head-string sym-unselectable detail",
                              attrs: { colspan: _vm.columns.length + 2 }
                            },
                            [_vm._t("detail")],
                            2
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "tr",
                      [
                        _c("th", { staticClass: "sym-row-begin" }),
                        _vm._v(" "),
                        _vm._l(_vm.columns, function(col, colIndex) {
                          return _c(
                            "th",
                            {
                              key: colIndex,
                              class:
                                "head-" +
                                col.type +
                                " " +
                                (_vm.sortable && col.sortable
                                  ? "sym-head-selectable sym-ripple"
                                  : "sym-unselectable") +
                                " " +
                                (col.sorted ? "sym-head-sorted" : ""),
                              attrs: {
                                width: isNaN(col.width) ? "auto" : col.width
                              },
                              on: {
                                click: function($event) {
                                  _vm.toggleSort(col)
                                }
                              }
                            },
                            [
                              col.sorted
                                ? _c(
                                    "i",
                                    {
                                      staticClass: "material-icons md-14",
                                      class:
                                        "icon-" +
                                        (col.sort_order === "DESC"
                                          ? "down"
                                          : "up") +
                                        " " +
                                        (col.sorted ? "sym-head-sorted" : "")
                                    },
                                    [_vm._v("arrow_upward")]
                                  )
                                : _vm._e(),
                              _vm._v(
                                "\r\n            " +
                                  _vm._s(col.label) +
                                  "\r\n          "
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
                          { staticClass: "sym-table-footer" },
                          [
                            _c("th", { staticClass: "sym-row-begin" }),
                            _vm._v(" "),
                            _vm._l(_vm.totals, function(col, colIndex) {
                              return _c(
                                "th",
                                { key: colIndex, class: "head-" + col.type },
                                [
                                  _vm._v(
                                    "\r\n            " +
                                      _vm._s(
                                        _vm.formatValue(col.value, col, null)
                                      ) +
                                      "\r\n          "
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
                          class: _vm.styleRow(item),
                          on: {
                            click: function($event) {
                              _vm.toggleRow(item, $event)
                            }
                          }
                        },
                        [
                          _c("td", {
                            class: {
                              "sym-row-begin":
                                _vm.selectedRows.indexOf(item) < 0,
                              "sym-row-begin-selected":
                                _vm.selectedRows.indexOf(item) > -1
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.columns, function(col, colIndex) {
                            return _c(
                              "td",
                              { key: colIndex, class: "col-" + col.type },
                              [
                                _vm._v(
                                  "\r\n            " +
                                    _vm._s(
                                      _vm.formatValue(item[col.name], col, item)
                                    ) +
                                    "\r\n          "
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
          ])
        : _c("div", { staticClass: "sym-table-no-data" }, [
            _vm._v("\r\n    " + _vm._s(_vm.noDataMessage) + "\r\n  ")
          ]),
      _vm._v(" "),
      _vm.hasPagination
        ? _c("div", { staticClass: "sym-pagination" }, [
            _c("div", { staticClass: "sym-pagination-navigation" }, [
              _c(
                "button",
                {
                  staticClass: "sym-icon-button",
                  class: { "sym-ripple": !_vm.backDisabled },
                  attrs: { disabled: _vm.backDisabled },
                  on: {
                    click: function($event) {
                      _vm.pagerTriggered(_vm.currentPage - 1)
                    }
                  }
                },
                [
                  _c("i", { staticClass: "material-icons md-24" }, [
                    _vm._v("navigate_before")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "sym-icon-button",
                  class: { "sym-ripple": !_vm.forwardDisabled },
                  attrs: { disabled: _vm.forwardDisabled },
                  on: {
                    click: function($event) {
                      _vm.pagerTriggered(_vm.currentPage + 1)
                    }
                  }
                },
                [
                  _c("i", { staticClass: "material-icons md-24" }, [
                    _vm._v("navigate_next")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "sym-pagination-icons" }, [
              _c("span", [_vm._v("Rows per page")]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.itemsPerPage))]),
              _vm._v(" "),
              _c("span", [_vm._v("Records")]),
              _vm._v(" "),
              _c("span", [
                _vm._v(
                  _vm._s((_vm.currentPage - 1) * _vm.itemsPerPage + 1) +
                    " - " +
                    _vm._s(
                      (_vm.currentPage - 1) * _vm.itemsPerPage +
                        _vm.items.length
                    ) +
                    " of " +
                    _vm._s(_vm.totalItems)
                )
              ])
            ])
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
var staticRenderFns = []
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