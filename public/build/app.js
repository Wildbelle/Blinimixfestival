(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/App.jsx":
/*!***************************!*\
  !*** ./assets/js/App.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Theme */ "./assets/js/components/Theme.jsx");
/* harmony import */ var _theme_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theme-context */ "./assets/js/theme-context.js");












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(_theme_context__WEBPACK_IMPORTED_MODULE_13__.themes.blue),
      _useState2 = _slicedToArray(_useState, 2),
      currentTheme = _useState2[0],
      setCurrentTheme = _useState2[1];

  var changeTheme = function changeTheme(colorName) {
    setCurrentTheme(_theme_context__WEBPACK_IMPORTED_MODULE_13__.themes[colorName]);
  };

  var contextValue = {
    theme: currentTheme,
    changeTheme: changeTheme
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement(_theme_context__WEBPACK_IMPORTED_MODULE_13__.ThemeContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement(_components_Theme__WEBPACK_IMPORTED_MODULE_12__.default, null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.jsx */ "./assets/js/App.jsx");




react_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/components/Navigation.jsx":
/*!*********************************************!*\
  !*** ./assets/js/components/Navigation.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Navigation = /*#__PURE__*/function (_Component) {
  _inherits(Navigation, _Component);

  var _super = _createSuper(Navigation);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _super.apply(this, arguments);
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react__WEBPACK_IMPORTED_MODULE_12__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
<<<<<<< HEAD
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
=======
>>>>>>> e9b7e2f (add navigation to scene)
        className: "nav-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "logo-2 border"
      }, "Logo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "menu border"
      }, "---")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "nav-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "nav-item-page border card-link left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "icon"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "title"
<<<<<<< HEAD
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("h6", null, "La"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("h6", null, "str'eat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("h6", null, "food"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
=======
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("h5", null, "La"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("h5", null, "str'eat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("h5", null, "food"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
>>>>>>> e9b7e2f (add navigation to scene)
        className: "nav-item-page border card-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "icon"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "title"
<<<<<<< HEAD
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("h6", null, "Le"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("h6", null, "blini"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("h6", null, "game"))))));
=======
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("h5", null, "Le"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("h5", null, "blini"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("h5", null, "game")))));
>>>>>>> e9b7e2f (add navigation to scene)
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_12__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./assets/js/components/Scene.jsx":
/*!****************************************!*\
  !*** ./assets/js/components/Scene.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _theme_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../theme-context */ "./assets/js/theme-context.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Navigation */ "./assets/js/components/Navigation.jsx");
=======
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _theme_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../theme-context */ "./assets/js/theme-context.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Navigation */ "./assets/js/components/Navigation.jsx");
>>>>>>> e9b7e2f (add navigation to scene)
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Scene = /*#__PURE__*/function (_Component) {
  _inherits(Scene, _Component);

  var _super = _createSuper(Scene);

  function Scene() {
    _classCallCheck(this, Scene);

    return _super.apply(this, arguments);
  }

  _createClass(Scene, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.context.changeTheme(this.props.location.state.theme.name);
    }
  }, {
    key: "render",
    value: function render() {
      var theme = this.props.location.state.theme;
<<<<<<< HEAD
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(react__WEBPACK_IMPORTED_MODULE_13__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_15__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h1", {
        className: "title-scene"
      }, theme.title)));
=======
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react__WEBPACK_IMPORTED_MODULE_15__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_17__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("h1", {
        className: "title-scene"
      }, theme.name.replace(' ', '</br>')));
>>>>>>> e9b7e2f (add navigation to scene)
    }
  }]);

  return Scene;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

_defineProperty(Scene, "contextType", _theme_context__WEBPACK_IMPORTED_MODULE_16__.ThemeContext);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scene);

/***/ }),

/***/ "./assets/js/components/SceneButton.jsx":
/*!**********************************************!*\
  !*** ./assets/js/components/SceneButton.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var SceneButton = /*#__PURE__*/function (_Component) {
  _inherits(SceneButton, _Component);

  var _super = _createSuper(SceneButton);

  function SceneButton() {
    _classCallCheck(this, SceneButton);

    return _super.apply(this, arguments);
  }

  _createClass(SceneButton, [{
    key: "render",
    value: function render() {
      var theme = this.props.theme;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.NavLink, {
        className: "illus-map",
        style: {
          backgroundColor: theme.color
        },
        to: {
          pathname: theme.url,
          state: {
            theme: theme
          }
        }
      });
    }
  }]);

  return SceneButton;
}(react__WEBPACK_IMPORTED_MODULE_12__.Component);

_defineProperty(SceneButton, "propTypes", {
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object.isRequired)
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneButton);

/***/ }),

/***/ "./assets/js/components/Theme.jsx":
/*!****************************************!*\
  !*** ./assets/js/components/Theme.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _routes_LoadingPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routes/LoadingPage */ "./assets/js/routes/LoadingPage.jsx");
/* harmony import */ var _routes_InteractiveMap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../routes/InteractiveMap */ "./assets/js/routes/InteractiveMap.jsx");
/* harmony import */ var _theme_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../theme-context */ "./assets/js/theme-context.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Scene */ "./assets/js/components/Scene.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Theme = /*#__PURE__*/function (_Component) {
  _inherits(Theme, _Component);

  var _super = _createSuper(Theme);

  function Theme() {
    _classCallCheck(this, Theme);

    return _super.apply(this, arguments);
  }

  _createClass(Theme, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react__WEBPACK_IMPORTED_MODULE_12__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "main",
        style: {
          backgroundColor: this.context.theme.color
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
        exact: true,
        path: "/",
        component: _routes_LoadingPage__WEBPACK_IMPORTED_MODULE_13__.default
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
        exact: true,
        path: "/map",
        component: _routes_InteractiveMap__WEBPACK_IMPORTED_MODULE_14__.default
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
        path: ['/food', '/game', '/scene'],
        component: _Scene__WEBPACK_IMPORTED_MODULE_16__.default
      }))));
    }
  }]);

  return Theme;
}(react__WEBPACK_IMPORTED_MODULE_12__.Component);

_defineProperty(Theme, "contextType", _theme_context__WEBPACK_IMPORTED_MODULE_15__.ThemeContext);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);

/***/ }),

/***/ "./assets/js/routes/InteractiveMap.jsx":
/*!*********************************************!*\
  !*** ./assets/js/routes/InteractiveMap.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_SceneButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/SceneButton */ "./assets/js/components/SceneButton.jsx");
/* harmony import */ var _theme_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../theme-context */ "./assets/js/theme-context.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var InteractiveMap = /*#__PURE__*/function (_Component) {
  _inherits(InteractiveMap, _Component);

  var _super = _createSuper(InteractiveMap);

  function InteractiveMap(props) {
    var _this;

    _classCallCheck(this, InteractiveMap);

    _this = _super.call(this, props);
    _this.state = {
      items: []
    };
    return _this;
  }

  _createClass(InteractiveMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.context.changeTheme('aqua');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react__WEBPACK_IMPORTED_MODULE_15__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "logo"
      }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "page-interactive-map"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "bloc-interactive-map"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "item"
      }, Object.keys(_theme_context__WEBPACK_IMPORTED_MODULE_17__.themes).map(function (value, index) {
        if (index > 0 && index < 4) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_components_SceneButton__WEBPACK_IMPORTED_MODULE_16__.default, {
            key: index,
            theme: Object.values(_theme_context__WEBPACK_IMPORTED_MODULE_17__.themes)[index]
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "item"
      }, Object.keys(_theme_context__WEBPACK_IMPORTED_MODULE_17__.themes).map(function (value, index) {
        if (index > 3) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_components_SceneButton__WEBPACK_IMPORTED_MODULE_16__.default, {
            key: index,
            theme: Object.values(_theme_context__WEBPACK_IMPORTED_MODULE_17__.themes)[index]
          });
        }
      })))));
    }
  }]);

  return InteractiveMap;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

_defineProperty(InteractiveMap, "contextType", _theme_context__WEBPACK_IMPORTED_MODULE_17__.ThemeContext);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InteractiveMap);

/***/ }),

/***/ "./assets/js/routes/LoadingPage.jsx":
/*!******************************************!*\
  !*** ./assets/js/routes/LoadingPage.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var LoadingPage = /*#__PURE__*/function (_Component) {
  _inherits(LoadingPage, _Component);

  var _super = _createSuper(LoadingPage);

  function LoadingPage() {
    _classCallCheck(this, LoadingPage);

    return _super.apply(this, arguments);
  }

  _createClass(LoadingPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      setTimeout(function () {
        _this.props.history.push('/map');
      }, 3000);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "loader"
      }, "Loading Page");
    }
  }]);

  return LoadingPage;
}(react__WEBPACK_IMPORTED_MODULE_13__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingPage);

/***/ }),

/***/ "./assets/js/theme-context.js":
/*!************************************!*\
  !*** ./assets/js/theme-context.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "themes": () => (/* binding */ themes),
/* harmony export */   "ThemeContext": () => (/* binding */ ThemeContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var themes = {
  aqua: {
    color: "#96F2DC"
  },
  pink: {
    name: "pink",
    color: "#FFBCD7",
    title: "La {'\n'} str'eat {'\n'} food",
    url: "/food"
  },
  blue: {
    name: "blue",
    color: "#CEF2FF",
    title: "Le blini game",
    url: "/game"
  },
  red: {
    name: "red",
    color: "#FF8080",
    title: "La remix room",
    url: "/scene/1"
  },
  yellow: {
    name: "yellow",
    color: "#FFF3B1",
    title: "La urban room",
    url: "/scene/2"
  },
  green: {
    name: "green",
    color: "#D8FACC",
    title: "La chill room",
    url: "/scene/3"
  }
};
var ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  theme: {},
  changeTheme: function changeTheme() {}
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-07c506"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmlnYXRpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NjZW5lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TY2VuZUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVGhlbWUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yb3V0ZXMvSW50ZXJhY3RpdmVNYXAuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yb3V0ZXMvTG9hZGluZ1BhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJ0aGVtZXMiLCJjdXJyZW50VGhlbWUiLCJzZXRDdXJyZW50VGhlbWUiLCJjaGFuZ2VUaGVtZSIsImNvbG9yTmFtZSIsImNvbnRleHRWYWx1ZSIsInRoZW1lIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiTmF2aWdhdGlvbiIsIkNvbXBvbmVudCIsIlNjZW5lIiwiY29udGV4dCIsInByb3BzIiwibG9jYXRpb24iLCJzdGF0ZSIsIm5hbWUiLCJ0aXRsZSIsIlRoZW1lQ29udGV4dCIsIlNjZW5lQnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYXRobmFtZSIsInVybCIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJUaGVtZSIsIkxvYWRpbmdQYWdlIiwiSW50ZXJhY3RpdmVNYXAiLCJpdGVtcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwidmFsdWVzIiwic2V0VGltZW91dCIsImhpc3RvcnkiLCJwdXNoIiwiYXF1YSIsInBpbmsiLCJibHVlIiwicmVkIiwieWVsbG93IiwiZ3JlZW4iLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxHQUFlO0FBRWIsa0JBQXdDQyxnREFBUSxDQUFDQyx3REFBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT0MsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxTQUFELEVBQWU7QUFDakNGLG1CQUFlLENBQUNGLG1EQUFNLENBQUNJLFNBQUQsQ0FBUCxDQUFmO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFNBQUssRUFBRUwsWUFEWTtBQUVuQkUsZUFBVyxFQUFYQTtBQUZtQixHQUFyQjtBQUtBLHNCQUNFLGtEQUFDLGtFQUFEO0FBQXVCLFNBQUssRUFBRUU7QUFBOUIsa0JBQ0Usa0RBQUMsdURBQUQsT0FERixDQURGO0FBS0Q7O0FBRUQsaUVBQWVQLEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBUyw2Q0FBQSxlQUNJLGlEQUFDLDZDQUFELE9BREosRUFFRUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBRkYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0lBRU1DLFU7Ozs7Ozs7Ozs7Ozs7V0FDSixrQkFBUztBQUNQLDBCQUNFLGtEQUFDLDRDQUFELHFCQUNBO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLGdCQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDO0FB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QUc7QUFDTHpCLFFBQUksRUFBRSxNQUREO0FBRUxLLFNBQUssRUFBRSxTQUZGO0FBR0xKLFNBQUssRUFBRSxlQUhGO0FBSUxNLE9BQUcsRUFBRTtBQUpBLEdBWGE7QUFpQnBCbUIsS0FBRyxFQUFFO0FBQ0gxQixRQUFJLEVBQUUsS0FESDtBQUVISyxTQUFLLEVBQUUsU0FGSjtBQUdISixTQUFLLEVBQUUsZUFISjtBQUlITSxPQUFHLEVBQUU7QUFKRixHQWpCZTtBQXVCcEJvQixRQUFNLEVBQUU7QUFDTjNCLFFBQUksRUFBRSxRQURBO0FBRU5LLFNBQUssRUFBRSxTQUZEO0FBR05KLFNBQUssRUFBRSxlQUhEO0FBSU5NLE9BQUcsRUFBRTtBQUpDLEdBdkJZO0FBNkJwQnFCLE9BQUssRUFBRTtBQUNMNUIsUUFBSSxFQUFFLE9BREQ7QUFFTEssU0FBSyxFQUFFLFNBRkY7QUFHTEosU0FBSyxFQUFFLGVBSEY7QUFJTE0sT0FBRyxFQUFFO0FBSkE7QUE3QmEsQ0FBZjtBQXFDQSxJQUFNTCxZQUFZLGdCQUFHMkIsZ0RBQUEsQ0FBb0I7QUFDOUN4QyxPQUFLLEVBQUUsRUFEdUM7QUFFOUNILGFBQVcsRUFBRSx1QkFBTSxDQUFFO0FBRnlCLENBQXBCLENBQXJCLEM7Ozs7Ozs7Ozs7OztBQ3ZDUCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGhlbWUgZnJvbSAnLi9jb21wb25lbnRzL1RoZW1lJztcbmltcG9ydCB7IFRoZW1lQ29udGV4dCwgdGhlbWVzIH0gZnJvbSAnLi90aGVtZS1jb250ZXh0JztcblxuZnVuY3Rpb24gQXBwKCkge1xuXG4gIGNvbnN0IFtjdXJyZW50VGhlbWUsIHNldEN1cnJlbnRUaGVtZV0gPSB1c2VTdGF0ZSh0aGVtZXNbJ2JsdWUnXSlcblxuICBjb25zdCBjaGFuZ2VUaGVtZSA9IChjb2xvck5hbWUpID0+IHtcbiAgICBzZXRDdXJyZW50VGhlbWUodGhlbWVzW2NvbG9yTmFtZV0pXG4gIH1cbiAgXG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHtcbiAgICB0aGVtZTogY3VycmVudFRoZW1lLFxuICAgIGNoYW5nZVRoZW1lXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XG4gICAgICA8VGhlbWUgLz5cbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0ICcuLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC5qc3gnXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi0xXCI+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tMiBib3JkZXJcIj5Mb2dvPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgYm9yZGVyXCI+LS0tPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtMlwiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbS1wYWdlIGJvcmRlciBjYXJkLWxpbmsgbGVmdFwiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj48L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgIDxoNj5MYTwvaDY+XG4gICAgICAgICAgICAgPGg2PnN0cidlYXQ8L2g2PlxuICAgICAgICAgICAgIDxoNj5mb29kPC9oNj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW0tcGFnZSBib3JkZXIgY2FyZC1saW5rXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPjwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgPGg2PkxlPC9oNj5cbiAgICAgICAgICAgICA8aDY+Ymxpbmk8L2g2PlxuICAgICAgICAgICAgIDxoNj5nYW1lPC9oNj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lLWNvbnRleHQnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJztcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBUaGVtZUNvbnRleHRcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvbnRleHQuY2hhbmdlVGhlbWUodGhpcy5wcm9wcy5sb2NhdGlvbi5zdGF0ZS50aGVtZS5uYW1lKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHMubG9jYXRpb24uc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUtc2NlbmVcIj57dGhlbWUudGl0bGV9PC9oMT5cbiAgICAgICA8L2Rpdj5cbiAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNsYXNzIFNjZW5lQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8TmF2TGlua1xuICAgICAgICBjbGFzc05hbWU9XCJpbGx1cy1tYXBcIlxuICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3J9fVxuICAgICAgICB0bz17e1xuICAgICAgICAgIHBhdGhuYW1lOiB0aGVtZS51cmwsXG4gICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGVtZVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgIDwvTmF2TGluaz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lQnV0dG9uOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnLi4vcm91dGVzL0xvYWRpbmdQYWdlJ1xuaW1wb3J0IEludGVyYWN0aXZlTWFwIGZyb20gJy4uL3JvdXRlcy9JbnRlcmFjdGl2ZU1hcCdcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lLWNvbnRleHQnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSc7XG5cblxuY2xhc3MgVGhlbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBUaGVtZUNvbnRleHRcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5cIlxuICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiB0aGlzLmNvbnRleHQudGhlbWUuY29sb3J9fVxuICAgICAgICA+XG4gICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17TG9hZGluZ1BhZ2V9IC8+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9tYXBcIiBjb21wb25lbnQ9e0ludGVyYWN0aXZlTWFwfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9e1snL2Zvb2QnLCAnL2dhbWUnLCAnL3NjZW5lJ119IGNvbXBvbmVudD17U2NlbmV9IC8+XG4gICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2NlbmVCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9TY2VuZUJ1dHRvbic7XG5pbXBvcnQgeyBUaGVtZUNvbnRleHQsIHRoZW1lcyB9IGZyb20gJy4uL3RoZW1lLWNvbnRleHQnO1xuXG5jbGFzcyBJbnRlcmFjdGl2ZU1hcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IFRoZW1lQ29udGV4dFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXRlbXM6IFtdXG4gICAgfVxuICBcbiAgfVxuICBcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvbnRleHQuY2hhbmdlVGhlbWUoJ2FxdWEnKVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+SG9tZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaW50ZXJhY3RpdmUtbWFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jLWludGVyYWN0aXZlLW1hcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGVtZXMpLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IDQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxTY2VuZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e09iamVjdC52YWx1ZXModGhlbWVzKVtpbmRleF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGVtZXMpLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFNjZW5lQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17T2JqZWN0LnZhbHVlcyh0aGVtZXMpW2luZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyYWN0aXZlTWFwOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRpbmdQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL21hcCcpXG4gICAgICB9LCAzMDAwKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxuICAgICAgICBMb2FkaW5nIFBhZ2VcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1BhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgdGhlbWVzID0ge1xuXG4gIGFxdWE6IHtcbiAgICBjb2xvcjogXCIjOTZGMkRDXCJcbiAgfSxcbiAgcGluazoge1xuICAgIG5hbWU6IFwicGlua1wiLFxuICAgIGNvbG9yOiBcIiNGRkJDRDdcIixcbiAgICB0aXRsZTogXCJMYSB7J1xcbid9IHN0cidlYXQgeydcXG4nfSBmb29kXCIsXG4gICAgdXJsOiBcIi9mb29kXCJcbiAgfSxcbiAgYmx1ZSA6IHtcbiAgICBuYW1lOiBcImJsdWVcIixcbiAgICBjb2xvcjogXCIjQ0VGMkZGXCIsXG4gICAgdGl0bGU6IFwiTGUgYmxpbmkgZ2FtZVwiLFxuICAgIHVybDogXCIvZ2FtZVwiXG4gIH0sXG4gIHJlZDoge1xuICAgIG5hbWU6IFwicmVkXCIsXG4gICAgY29sb3I6IFwiI0ZGODA4MFwiLFxuICAgIHRpdGxlOiBcIkxhIHJlbWl4IHJvb21cIixcbiAgICB1cmw6IFwiL3NjZW5lLzFcIlxuICB9LFxuICB5ZWxsb3c6IHtcbiAgICBuYW1lOiBcInllbGxvd1wiLFxuICAgIGNvbG9yOiBcIiNGRkYzQjFcIixcbiAgICB0aXRsZTogXCJMYSB1cmJhbiByb29tXCIsXG4gICAgdXJsOiBcIi9zY2VuZS8yXCJcbiAgfSxcbiAgZ3JlZW46IHtcbiAgICBuYW1lOiBcImdyZWVuXCIsXG4gICAgY29sb3I6IFwiI0Q4RkFDQ1wiLFxuICAgIHRpdGxlOiBcIkxhIGNoaWxsIHJvb21cIixcbiAgICB1cmw6IFwiL3NjZW5lLzNcIlxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgdGhlbWU6IHt9LFxuICBjaGFuZ2VUaGVtZTogKCkgPT4ge31cbn0pIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmlnYXRpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NjZW5lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TY2VuZUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVGhlbWUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yb3V0ZXMvSW50ZXJhY3RpdmVNYXAuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yb3V0ZXMvTG9hZGluZ1BhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJ0aGVtZXMiLCJjdXJyZW50VGhlbWUiLCJzZXRDdXJyZW50VGhlbWUiLCJjaGFuZ2VUaGVtZSIsImNvbG9yTmFtZSIsImNvbnRleHRWYWx1ZSIsInRoZW1lIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiTmF2aWdhdGlvbiIsIkNvbXBvbmVudCIsIlNjZW5lIiwiY29udGV4dCIsInByb3BzIiwibG9jYXRpb24iLCJzdGF0ZSIsIm5hbWUiLCJyZXBsYWNlIiwiVGhlbWVDb250ZXh0IiwiU2NlbmVCdXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInBhdGhuYW1lIiwidXJsIiwiUHJvcFR5cGVzIiwiaXNSZXF1aXJlZCIsIlRoZW1lIiwiTG9hZGluZ1BhZ2UiLCJJbnRlcmFjdGl2ZU1hcCIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJ2YWx1ZXMiLCJzZXRUaW1lb3V0IiwiaGlzdG9yeSIsInB1c2giLCJhcXVhIiwicGluayIsInRpdGxlIiwiYmx1ZSIsInJlZCIsInllbGxvdyIsImdyZWVuIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEdBQVQsR0FBZTtBQUViLGtCQUF3Q0MsZ0RBQVEsQ0FBQ0Msd0RBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9DLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsU0FBRCxFQUFlO0FBQ2pDRixtQkFBZSxDQUFDRixtREFBTSxDQUFDSSxTQUFELENBQVAsQ0FBZjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxTQUFLLEVBQUVMLFlBRFk7QUFFbkJFLGVBQVcsRUFBWEE7QUFGbUIsR0FBckI7QUFLQSxzQkFDRSxrREFBQyxrRUFBRDtBQUF1QixTQUFLLEVBQUVFO0FBQTlCLGtCQUNFLGtEQUFDLHVEQUFELE9BREYsQ0FERjtBQUtEOztBQUVELGlFQUFlUCxHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFFQTtBQUNBO0FBQ0E7QUFFQVMsNkNBQUEsZUFDSSxpREFBQyw2Q0FBRCxPQURKLEVBRUVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUZGLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztJQUVNQyxVOzs7Ozs7Ozs7Ozs7O1dBQ0osa0JBQVM7QUFDUCwwQkFDRSxrREFBQyw0Q0FBRCxxQkFDQztBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixnQkFERixlQUVFO0FBQUssaUJBQVMsRUFBQztBQUFmLGVBRkYsQ0FERCxlQUtDO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFFBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRSxtRUFERixlQUVFLHdFQUZGLGVBR0UscUVBSEYsQ0FGRixDQURGLGVBU0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFERixlQUVFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFLG1FQURGLGVBRUUsc0VBRkYsZUFHRSxxRUFIRixDQUZGLENBVEYsQ0FMRCxDQURGO0FBMEJEOzs7O0VBNUJzQkMsNkM7O0FBK0J6QixpRUFBZUQsVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTs7SUFFTUUsSzs7Ozs7Ozs7Ozs7OztXQUdKLDZCQUFvQjtBQUNsQixXQUFLQyxPQUFMLENBQWFWLFdBQWIsQ0FBeUIsS0FBS1csS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxLQUFwQixDQUEwQlYsS0FBMUIsQ0FBZ0NXLElBQXpEO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AsVUFBUVgsS0FBUixHQUFrQixLQUFLUSxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLEtBQXRDLENBQVFWLEtBQVI7QUFDQSwwQkFDRSxrREFBQyw0Q0FBRCxxQkFDQyxrREFBQyxpREFBRCxPQURELGVBRUM7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FBNkJBLEtBQUssQ0FBQ1csSUFBTixDQUFXQyxPQUFYLENBQW1CLEdBQW5CLEVBQXdCLE9BQXhCLENBQTdCLENBRkQsQ0FERjtBQU1EOzs7O0VBZmlCUCw2Qzs7Z0JBQWRDLEssaUJBQ2lCTyx5RDs7QUFpQnZCLGlFQUFlUCxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTs7SUFFTVEsVzs7Ozs7Ozs7Ozs7OztXQUtKLGtCQUFTO0FBQ1AsVUFBT2QsS0FBUCxHQUFpQixLQUFLUSxLQUF0QixDQUFPUixLQUFQO0FBQ0EsMEJBQ0Usa0RBQUMsc0RBQUQ7QUFDRSxpQkFBUyxFQUFDLFdBRFo7QUFFRSxhQUFLLEVBQUU7QUFBQ2UseUJBQWUsRUFBRWYsS0FBSyxDQUFDZ0I7QUFBeEIsU0FGVDtBQUdFLFVBQUUsRUFBRTtBQUNGQyxrQkFBUSxFQUFFakIsS0FBSyxDQUFDa0IsR0FEZDtBQUVGUixlQUFLLEVBQUU7QUFDTFYsaUJBQUssRUFBRUE7QUFERjtBQUZMO0FBSE4sUUFERjtBQWFEOzs7O0VBcEJ1QkssNkM7O2dCQUFwQlMsVyxlQUNlO0FBQ2pCZCxPQUFLLEVBQUVtQixzRUFBMkJDO0FBRGpCLEM7O0FBc0JyQixpRUFBZU4sV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR01PLEs7Ozs7Ozs7Ozs7Ozs7V0FHSixrQkFBUztBQUNQLDBCQUNFLGtEQUFDLDRDQUFELHFCQUNFO0FBQ0UsaUJBQVMsRUFBQyxNQURaO0FBRUUsYUFBSyxFQUFFO0FBQUNOLHlCQUFlLEVBQUUsS0FBS1IsT0FBTCxDQUFhUCxLQUFiLENBQW1CZ0I7QUFBckM7QUFGVCxzQkFJRSxrREFBQyw0REFBRCxxQkFDRSxrREFBQyxvREFBRDtBQUFPLGFBQUssTUFBWjtBQUFhLFlBQUksRUFBQyxHQUFsQjtBQUFzQixpQkFBUyxFQUFFTSx5REFBV0E7QUFBNUMsUUFERixlQUVFLGtEQUFDLG9EQUFEO0FBQU8sYUFBSyxNQUFaO0FBQWEsWUFBSSxFQUFDLE1BQWxCO0FBQXlCLGlCQUFTLEVBQUVDLDREQUFjQTtBQUFsRCxRQUZGLGVBR0Usa0RBQUMsb0RBQUQ7QUFBTyxZQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixRQUFuQixDQUFiO0FBQTJDLGlCQUFTLEVBQUVqQiw0Q0FBS0E7QUFBM0QsUUFIRixDQUpGLENBREYsQ0FERjtBQWNEOzs7O0VBbEJpQkQsNkM7O2dCQUFkZ0IsSyxpQkFDaUJSLHlEOztBQW9CdkIsaUVBQWVRLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7O0lBRU1FLGM7Ozs7O0FBR0osMEJBQVlmLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLRSxLQUFMLEdBQWE7QUFDWGMsV0FBSyxFQUFFO0FBREksS0FBYjtBQUhpQjtBQU9sQjs7OztXQUdELDZCQUFvQjtBQUNsQixXQUFLakIsT0FBTCxDQUFhVixXQUFiLENBQXlCLE1BQXpCO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AsMEJBQ0Usa0RBQUMsNENBQUQscUJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsZ0JBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHNEIsTUFBTSxDQUFDQyxJQUFQLENBQVloQyxtREFBWixFQUFvQmlDLEdBQXBCLENBQXdCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUN6QyxZQUFJQSxLQUFLLEdBQUcsQ0FBUixJQUFhQSxLQUFLLEdBQUcsQ0FBekIsRUFBNEI7QUFDMUIsOEJBQ0Usa0RBQUMsNkRBQUQ7QUFDRSxlQUFHLEVBQUVBLEtBRFA7QUFFRSxpQkFBSyxFQUFFSixNQUFNLENBQUNLLE1BQVAsQ0FBY3BDLG1EQUFkLEVBQXNCbUMsS0FBdEI7QUFGVCxZQURGO0FBTUQ7QUFDRixPQVRBLENBREgsQ0FERixlQWFFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0dKLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZaEMsbURBQVosRUFBb0JpQyxHQUFwQixDQUF3QixVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDekMsWUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNiLDhCQUNFLGtEQUFDLDZEQUFEO0FBQ0UsZUFBRyxFQUFFQSxLQURQO0FBRUUsaUJBQUssRUFBRUosTUFBTSxDQUFDSyxNQUFQLENBQWNwQyxtREFBZCxFQUFzQm1DLEtBQXRCO0FBRlQsWUFERjtBQU1EO0FBQ0YsT0FUQSxDQURILENBYkYsQ0FERixDQUZGLENBREY7QUFpQ0Q7Ozs7RUFuRDBCeEIsNkM7O2dCQUF2QmtCLGMsaUJBQ2lCVix5RDs7QUFxRHZCLGlFQUFlVSxjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTs7SUFFTUQsVzs7Ozs7Ozs7Ozs7OztXQUVKLDZCQUFvQjtBQUFBOztBQUNoQlMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2YsYUFBSSxDQUFDdkIsS0FBTCxDQUFXd0IsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsTUFBeEI7QUFDRCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0g7OztXQUVELGtCQUFTO0FBQ1AsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsd0JBREY7QUFLRDs7OztFQWR1QjVCLDZDOztBQWlCMUIsaUVBQWVpQixXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRU8sSUFBTTVCLE1BQU0sR0FBRztBQUVwQndDLE1BQUksRUFBRTtBQUNKbEIsU0FBSyxFQUFFO0FBREgsR0FGYztBQUtwQm1CLE1BQUksRUFBRTtBQUNKeEIsUUFBSSxFQUFFLE1BREY7QUFFSkssU0FBSyxFQUFFLFNBRkg7QUFHSm9CLFNBQUssRUFBRSxpQkFISDtBQUlKbEIsT0FBRyxFQUFFO0FBSkQsR0FMYztBQVdwQm1CLE1BQUksRUFBRztBQUNMMUIsUUFBSSxFQUFFLE1BREQ7QUFFTEssU0FBSyxFQUFFLFNBRkY7QUFHTG9CLFNBQUssRUFBRSxlQUhGO0FBSUxsQixPQUFHLEVBQUU7QUFKQSxHQVhhO0FBaUJwQm9CLEtBQUcsRUFBRTtBQUNIM0IsUUFBSSxFQUFFLEtBREg7QUFFSEssU0FBSyxFQUFFLFNBRko7QUFHSG9CLFNBQUssRUFBRSxlQUhKO0FBSUhsQixPQUFHLEVBQUU7QUFKRixHQWpCZTtBQXVCcEJxQixRQUFNLEVBQUU7QUFDTjVCLFFBQUksRUFBRSxRQURBO0FBRU5LLFNBQUssRUFBRSxTQUZEO0FBR05vQixTQUFLLEVBQUUsZUFIRDtBQUlObEIsT0FBRyxFQUFFO0FBSkMsR0F2Qlk7QUE2QnBCc0IsT0FBSyxFQUFFO0FBQ0w3QixRQUFJLEVBQUUsT0FERDtBQUVMSyxTQUFLLEVBQUUsU0FGRjtBQUdMb0IsU0FBSyxFQUFFLGVBSEY7QUFJTGxCLE9BQUcsRUFBRTtBQUpBO0FBN0JhLENBQWY7QUFxQ0EsSUFBTUwsWUFBWSxnQkFBRzRCLGdEQUFBLENBQW9CO0FBQzlDekMsT0FBSyxFQUFFLEVBRHVDO0FBRTlDSCxhQUFXLEVBQUUsdUJBQU0sQ0FBRTtBQUZ5QixDQUFwQixDQUFyQixDOzs7Ozs7Ozs7Ozs7QUN2Q1AiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRoZW1lIGZyb20gJy4vY29tcG9uZW50cy9UaGVtZSc7XG5pbXBvcnQgeyBUaGVtZUNvbnRleHQsIHRoZW1lcyB9IGZyb20gJy4vdGhlbWUtY29udGV4dCc7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcblxuICBjb25zdCBbY3VycmVudFRoZW1lLCBzZXRDdXJyZW50VGhlbWVdID0gdXNlU3RhdGUodGhlbWVzWydibHVlJ10pXG5cbiAgY29uc3QgY2hhbmdlVGhlbWUgPSAoY29sb3JOYW1lKSA9PiB7XG4gICAgc2V0Q3VycmVudFRoZW1lKHRoZW1lc1tjb2xvck5hbWVdKVxuICB9XG4gIFxuICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XG4gICAgdGhlbWU6IGN1cnJlbnRUaGVtZSxcbiAgICBjaGFuZ2VUaGVtZVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxuICAgICAgPFRoZW1lIC8+XG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImltcG9ydCAnLi4vc3R5bGVzL2FwcC5zY3NzJztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanN4J1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi0xXCI+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tMiBib3JkZXJcIj5Mb2dvPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgYm9yZGVyXCI+LS0tPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtMlwiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbS1wYWdlIGJvcmRlciBjYXJkLWxpbmsgbGVmdFwiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj48L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgIDxoNT5MYTwvaDU+XG4gICAgICAgICAgICAgPGg1PnN0cidlYXQ8L2g1PlxuICAgICAgICAgICAgIDxoNT5mb29kPC9oNT5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW0tcGFnZSBib3JkZXIgY2FyZC1saW5rXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPjwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgPGg1PkxlPC9oNT5cbiAgICAgICAgICAgICA8aDU+Ymxpbmk8L2g1PlxuICAgICAgICAgICAgIDxoNT5nYW1lPC9oNT5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lLWNvbnRleHQnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJztcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBUaGVtZUNvbnRleHRcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvbnRleHQuY2hhbmdlVGhlbWUodGhpcy5wcm9wcy5sb2NhdGlvbi5zdGF0ZS50aGVtZS5uYW1lKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHMubG9jYXRpb24uc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlLXNjZW5lXCI+e3RoZW1lLm5hbWUucmVwbGFjZSgnICcsICc8L2JyPicpfTwvaDE+XG4gICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jbGFzcyBTY2VuZUJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dGhlbWUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPE5hdkxpbmtcbiAgICAgICAgY2xhc3NOYW1lPVwiaWxsdXMtbWFwXCJcbiAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yfX1cbiAgICAgICAgdG89e3tcbiAgICAgICAgICBwYXRobmFtZTogdGhlbWUudXJsLFxuICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICB0aGVtZTogdGhlbWVcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICA8L05hdkxpbms+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZUJ1dHRvbjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRpbmdQYWdlIGZyb20gJy4uL3JvdXRlcy9Mb2FkaW5nUGFnZSdcbmltcG9ydCBJbnRlcmFjdGl2ZU1hcCBmcm9tICcuLi9yb3V0ZXMvSW50ZXJhY3RpdmVNYXAnXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICcuLi90aGVtZS1jb250ZXh0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFNjZW5lIGZyb20gJy4vU2NlbmUnO1xuXG5cbmNsYXNzIFRoZW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gVGhlbWVDb250ZXh0XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYWluXCJcbiAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogdGhpcy5jb250ZXh0LnRoZW1lLmNvbG9yfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0xvYWRpbmdQYWdlfSAvPlxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbWFwXCIgY29tcG9uZW50PXtJbnRlcmFjdGl2ZU1hcH0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtbJy9mb29kJywgJy9nYW1lJywgJy9zY2VuZSddfSBjb21wb25lbnQ9e1NjZW5lfSAvPlxuICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNjZW5lQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvU2NlbmVCdXR0b24nO1xuaW1wb3J0IHsgVGhlbWVDb250ZXh0LCB0aGVtZXMgfSBmcm9tICcuLi90aGVtZS1jb250ZXh0JztcblxuY2xhc3MgSW50ZXJhY3RpdmVNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBUaGVtZUNvbnRleHRcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGl0ZW1zOiBbXVxuICAgIH1cbiAgXG4gIH1cbiAgXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jb250ZXh0LmNoYW5nZVRoZW1lKCdhcXVhJylcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPkhvbWU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWludGVyYWN0aXZlLW1hcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvYy1pbnRlcmFjdGl2ZS1tYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhlbWVzKS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDAgJiYgaW5kZXggPCA0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8U2NlbmVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPXtPYmplY3QudmFsdWVzKHRoZW1lcylbaW5kZXhdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhlbWVzKS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxTY2VuZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e09iamVjdC52YWx1ZXModGhlbWVzKVtpbmRleF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmFjdGl2ZU1hcDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkaW5nUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9tYXAnKVxuICAgICAgfSwgMzAwMClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cbiAgICAgICAgTG9hZGluZyBQYWdlXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IHRoZW1lcyA9IHtcblxuICBhcXVhOiB7XG4gICAgY29sb3I6IFwiIzk2RjJEQ1wiXG4gIH0sXG4gIHBpbms6IHtcbiAgICBuYW1lOiBcInBpbmtcIixcbiAgICBjb2xvcjogXCIjRkZCQ0Q3XCIsXG4gICAgdGl0bGU6IFwiTGEgc3RyJ2VhdCBmb29kXCIsXG4gICAgdXJsOiBcIi9mb29kXCJcbiAgfSxcbiAgYmx1ZSA6IHtcbiAgICBuYW1lOiBcImJsdWVcIixcbiAgICBjb2xvcjogXCIjQ0VGMkZGXCIsXG4gICAgdGl0bGU6IFwiTGUgYmxpbmkgZ2FtZVwiLFxuICAgIHVybDogXCIvZ2FtZVwiXG4gIH0sXG4gIHJlZDoge1xuICAgIG5hbWU6IFwicmVkXCIsXG4gICAgY29sb3I6IFwiI0ZGODA4MFwiLFxuICAgIHRpdGxlOiBcIkxhIHJlbWl4IHJvb21cIixcbiAgICB1cmw6IFwiL3NjZW5lLzFcIlxuICB9LFxuICB5ZWxsb3c6IHtcbiAgICBuYW1lOiBcInllbGxvd1wiLFxuICAgIGNvbG9yOiBcIiNGRkYzQjFcIixcbiAgICB0aXRsZTogXCJMYSB1cmJhbiByb29tXCIsXG4gICAgdXJsOiBcIi9zY2VuZS8yXCJcbiAgfSxcbiAgZ3JlZW46IHtcbiAgICBuYW1lOiBcImdyZWVuXCIsXG4gICAgY29sb3I6IFwiI0Q4RkFDQ1wiLFxuICAgIHRpdGxlOiBcIkxhIGNoaWxsIHJvb21cIixcbiAgICB1cmw6IFwiL3NjZW5lLzNcIlxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgdGhlbWU6IHt9LFxuICBjaGFuZ2VUaGVtZTogKCkgPT4ge31cbn0pIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> e9b7e2f (add navigation to scene)
