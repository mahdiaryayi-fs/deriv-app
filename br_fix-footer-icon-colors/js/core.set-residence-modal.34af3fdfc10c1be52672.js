(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["set-residence-modal"],{

/***/ "./App/Containers/SetResidenceModal/index.js":
/*!***************************************************!*\
  !*** ./App/Containers/SetResidenceModal/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _set_residence_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-residence-modal.jsx */ \"./App/Containers/SetResidenceModal/set-residence-modal.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _set_residence_modal_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9TZXRSZXNpZGVuY2VNb2RhbC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db250YWluZXJzL1NldFJlc2lkZW5jZU1vZGFsL2luZGV4LmpzPzlkN2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9zZXQtcmVzaWRlbmNlLW1vZGFsLmpzeCc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/SetResidenceModal/index.js\n");

/***/ }),

/***/ "./App/Containers/SetResidenceModal/set-residence-form.jsx":
/*!*****************************************************************!*\
  !*** ./App/Containers/SetResidenceModal/set-residence-form.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ \"../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/components */ \"../../components/src/index.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/translations */ \"../../translations/lib/translations.main.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nvar SetResidenceForm = function SetResidenceForm(_ref) {\n  var _ref$class_prefix = _ref.class_prefix,\n      class_prefix = _ref$class_prefix === void 0 ? 'set-residence' : _ref$class_prefix,\n      children = _ref.children,\n      header_text = _ref.header_text,\n      errors = _ref.errors,\n      touched = _ref.touched,\n      setFieldTouched = _ref.setFieldTouched,\n      setFieldValue = _ref.setFieldValue,\n      residence_list = _ref.residence_list;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"div\", {\n    className: \"\".concat(class_prefix, \"__residence-selection\")\n  }, !!header_text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"p\", {\n    className: \"\".concat(class_prefix, \"__heading\")\n  }, header_text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"p\", {\n    className: \"\".concat(class_prefix, \"__\").concat(header_text ? 'text' : 'heading')\n  }, Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__[\"localize\"])('Where do you live?')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](formik__WEBPACK_IMPORTED_MODULE_0__[\"Field\"], {\n    name: \"residence\"\n  }, function (_ref2) {\n    var field = _ref2.field;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_3__[\"DesktopWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_3__[\"Autocomplete\"], _extends({}, field, {\n      autoComplete: \"off\",\n      className: \"\".concat(class_prefix, \"__residence-field\"),\n      type: \"text\",\n      label: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__[\"localize\"])('Choose country'),\n      error: touched.residence && errors.residence,\n      required: true,\n      list_items: residence_list,\n      onItemSelection: function onItemSelection(_ref3) {\n        var value = _ref3.value,\n            text = _ref3.text;\n        return setFieldValue('residence', value ? text : '', true);\n      }\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_3__[\"MobileWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_3__[\"SelectNative\"], {\n      placeholder: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__[\"localize\"])('Please select'),\n      label: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__[\"localize\"])('Choose country'),\n      value: field.value,\n      list_items: residence_list,\n      error: touched.residence && errors.residence,\n      required: true,\n      use_text: true,\n      onChange: function onChange(e) {\n        setFieldTouched('residence', true);\n        setFieldValue('residence', e.target.value, true);\n      }\n    })));\n  }), children);\n};\n\nSetResidenceForm.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,\n  class_prefix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  header_text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  residence_list: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SetResidenceForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9TZXRSZXNpZGVuY2VNb2RhbC9zZXQtcmVzaWRlbmNlLWZvcm0uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXBwL0NvbnRhaW5lcnMvU2V0UmVzaWRlbmNlTW9kYWwvc2V0LXJlc2lkZW5jZS1mb3JtLmpzeD85NmFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlLCBEZXNrdG9wV3JhcHBlciwgTW9iaWxlV3JhcHBlciwgU2VsZWN0TmF0aXZlIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcblxuY29uc3QgU2V0UmVzaWRlbmNlRm9ybSA9ICh7XG4gICAgY2xhc3NfcHJlZml4ID0gJ3NldC1yZXNpZGVuY2UnLFxuICAgIGNoaWxkcmVuLFxuICAgIGhlYWRlcl90ZXh0LFxuICAgIGVycm9ycyxcbiAgICB0b3VjaGVkLFxuICAgIHNldEZpZWxkVG91Y2hlZCxcbiAgICBzZXRGaWVsZFZhbHVlLFxuICAgIHJlc2lkZW5jZV9saXN0LFxufSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc19wcmVmaXh9X19yZXNpZGVuY2Utc2VsZWN0aW9uYH0+XG4gICAgICAgIHshIWhlYWRlcl90ZXh0ICYmIDxwIGNsYXNzTmFtZT17YCR7Y2xhc3NfcHJlZml4fV9faGVhZGluZ2B9PntoZWFkZXJfdGV4dH08L3A+fVxuICAgICAgICA8cCBjbGFzc05hbWU9e2Ake2NsYXNzX3ByZWZpeH1fXyR7aGVhZGVyX3RleHQgPyAndGV4dCcgOiAnaGVhZGluZyd9YH0+e2xvY2FsaXplKCdXaGVyZSBkbyB5b3UgbGl2ZT8nKX08L3A+XG4gICAgICAgIDxGaWVsZCBuYW1lPSdyZXNpZGVuY2UnPlxuICAgICAgICAgICAgeyh7IGZpZWxkIH0pID0+IChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxEZXNrdG9wV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSdvZmYnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc19wcmVmaXh9X19yZXNpZGVuY2UtZmllbGRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xvY2FsaXplKCdDaG9vc2UgY291bnRyeScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0b3VjaGVkLnJlc2lkZW5jZSAmJiBlcnJvcnMucmVzaWRlbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdF9pdGVtcz17cmVzaWRlbmNlX2xpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0aW9uPXsoeyB2YWx1ZSwgdGV4dCB9KSA9PiBzZXRGaWVsZFZhbHVlKCdyZXNpZGVuY2UnLCB2YWx1ZSA/IHRleHQgOiAnJywgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Rlc2t0b3BXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8TW9iaWxlV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3ROYXRpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17bG9jYWxpemUoJ1BsZWFzZSBzZWxlY3QnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17bG9jYWxpemUoJ0Nob29zZSBjb3VudHJ5Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RfaXRlbXM9e3Jlc2lkZW5jZV9saXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0b3VjaGVkLnJlc2lkZW5jZSAmJiBlcnJvcnMucmVzaWRlbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlX3RleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVG91Y2hlZCgncmVzaWRlbmNlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUoJ3Jlc2lkZW5jZScsIGUudGFyZ2V0LnZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2JpbGVXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0ZpZWxkPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4pO1xuXG5TZXRSZXNpZGVuY2VGb3JtLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2xhc3NfcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhlYWRlcl90ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlc2lkZW5jZV9saXN0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNldFJlc2lkZW5jZUZvcm07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFoQkE7QUFkQTtBQUNBO0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/SetResidenceModal/set-residence-form.jsx\n");

/***/ }),

/***/ "./App/Containers/SetResidenceModal/set-residence-modal.jsx":
/*!******************************************************************!*\
  !*** ./App/Containers/SetResidenceModal/set-residence-modal.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/components */ \"../../components/src/index.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deriv/translations */ \"../../translations/lib/translations.main.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var App_Constants_app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! App/Constants/app-config */ \"./App/Constants/app-config.js\");\n/* harmony import */ var _set_residence_form_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./set-residence-form.jsx */ \"./App/Containers/SetResidenceModal/set-residence-form.jsx\");\n/* harmony import */ var Sass_app_modules_set_residence_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Sass/app/modules/set-residence.scss */ \"./sass/app/modules/set-residence.scss\");\n/* harmony import */ var Sass_app_modules_set_residence_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(Sass_app_modules_set_residence_scss__WEBPACK_IMPORTED_MODULE_9__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\n\n // TODO: Move some of these functions to helpers since some of them are shared with AccountSignUpModal\n\nvar isResidenceText = function isResidenceText(item, values) {\n  return item.text.toLowerCase() === values.residence.toLowerCase();\n};\n\nvar validateResidence = function validateResidence(values, residence_list) {\n  var errors = {};\n\n  if (!values.residence) {\n    errors.residence = true;\n  } else {\n    var index_of_selection = residence_list.findIndex(function (item) {\n      return isResidenceText(item, values);\n    });\n\n    if (index_of_selection === -1 || residence_list[index_of_selection].disabled === 'DISABLED') {\n      errors.residence = Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_5__[\"localize\"])('Unfortunately, {{website_name}} is not available in your country.', {\n        website_name: App_Constants_app_config__WEBPACK_IMPORTED_MODULE_7__[\"website_name\"]\n      });\n    }\n  }\n\n  return errors;\n};\n\nvar SetResidence = /*#__PURE__*/function (_React$Component) {\n  _inherits(SetResidence, _React$Component);\n\n  var _super = _createSuper(SetResidence);\n\n  function SetResidence() {\n    var _this;\n\n    _classCallCheck(this, SetResidence);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _this.onSetResidenceComplete = function (error) {\n      // TODO: Proper error handling (currently we have no place to put the message)\n      if (error) {\n        throw Error(error);\n      } // Handle lower level modal controls due to overriding modal rendering\n\n\n      _this.props.isModalVisible(false);\n\n      _this.props.enableApp();\n    };\n\n    return _this;\n  }\n\n  _createClass(SetResidence, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          onSetResidence = _this$props.onSetResidence,\n          residence_list = _this$props.residence_list;\n\n      var onSetResidencePassthrough = function onSetResidencePassthrough(values) {\n        var index_of_selection = residence_list.findIndex(function (item) {\n          return isResidenceText(item, values);\n        });\n\n        var modded_values = _objectSpread(_objectSpread({}, values), {}, {\n          residence: residence_list[index_of_selection].value\n        });\n\n        onSetResidence(modded_values, _this2.onSetResidenceComplete);\n      };\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](\"div\", {\n        className: \"set-residence\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](formik__WEBPACK_IMPORTED_MODULE_1__[\"Formik\"], {\n        initialValues: {\n          residence: ''\n        },\n        validate: function validate(values) {\n          return validateResidence(values, residence_list);\n        },\n        onSubmit: onSetResidencePassthrough\n      }, function (_ref) {\n        var isSubmitting = _ref.isSubmitting,\n            errors = _ref.errors,\n            values = _ref.values,\n            setFieldValue = _ref.setFieldValue,\n            touched = _ref.touched;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](formik__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](_set_residence_form_jsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          errors: errors,\n          touched: touched,\n          setFieldValue: setFieldValue,\n          residence_list: residence_list\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](\"p\", {\n          className: \"set-residence__subtext\"\n        }, Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_5__[\"localize\"])('We need this to make sure our service complies with laws and regulations in your country.')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('set-residence__btn', {\n            'set-residence__btn--disabled': !values.residence || errors.residence || isSubmitting\n          }),\n          type: \"submit\",\n          is_disabled: !values.residence || !!errors.residence || isSubmitting,\n          text: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_5__[\"localize\"])('Set residence'),\n          primary: true\n        }))));\n      }));\n    }\n  }]);\n\n  return SetResidence;\n}(react__WEBPACK_IMPORTED_MODULE_3__[\"Component\"]);\n\nSetResidence.propTypes = {\n  onSetResidence: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  residence_list: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array\n};\n\nvar SetResidenceModal = function SetResidenceModal(_ref2) {\n  var enableApp = _ref2.enableApp,\n      disableApp = _ref2.disableApp,\n      is_loading = _ref2.is_loading,\n      is_visible = _ref2.is_visible,\n      onSetResidence = _ref2.onSetResidence,\n      residence_list = _ref2.residence_list,\n      toggleSetResidenceModal = _ref2.toggleSetResidenceModal;\n  if (residence_list.length < 1) return null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"Dialog\"], {\n    is_visible: is_visible,\n    disableApp: disableApp,\n    enableApp: enableApp,\n    is_loading: is_loading || !residence_list.length,\n    is_content_centered: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](SetResidence, {\n    onSetResidence: onSetResidence,\n    residence_list: residence_list,\n    isModalVisible: toggleSetResidenceModal,\n    enableApp: enableApp\n  }));\n};\n\nSetResidenceModal.propTypes = {\n  disableApp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  enableApp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  is_loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  is_visible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  onSetResidence: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  residence_list: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(Stores_connect__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(function (_ref3) {\n  var ui = _ref3.ui,\n      client = _ref3.client;\n  return {\n    is_visible: ui.is_set_residence_modal_visible,\n    toggleSetResidenceModal: ui.toggleSetResidenceModal,\n    enableApp: ui.enableApp,\n    disableApp: ui.disableApp,\n    is_loading: ui.is_loading,\n    onSetResidence: client.onSetResidence,\n    residence_list: client.residence_list\n  };\n})(SetResidenceModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9TZXRSZXNpZGVuY2VNb2RhbC9zZXQtcmVzaWRlbmNlLW1vZGFsLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db250YWluZXJzL1NldFJlc2lkZW5jZU1vZGFsL3NldC1yZXNpZGVuY2UtbW9kYWwuanN4PzRiNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIERpYWxvZyB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnU3RvcmVzL2Nvbm5lY3QnO1xuaW1wb3J0IHsgd2Vic2l0ZV9uYW1lIH0gZnJvbSAnQXBwL0NvbnN0YW50cy9hcHAtY29uZmlnJztcbmltcG9ydCBSZXNpZGVuY2VGb3JtIGZyb20gJy4vc2V0LXJlc2lkZW5jZS1mb3JtLmpzeCc7XG5pbXBvcnQgJ1Nhc3MvYXBwL21vZHVsZXMvc2V0LXJlc2lkZW5jZS5zY3NzJztcblxuLy8gVE9ETzogTW92ZSBzb21lIG9mIHRoZXNlIGZ1bmN0aW9ucyB0byBoZWxwZXJzIHNpbmNlIHNvbWUgb2YgdGhlbSBhcmUgc2hhcmVkIHdpdGggQWNjb3VudFNpZ25VcE1vZGFsXG5jb25zdCBpc1Jlc2lkZW5jZVRleHQgPSAoaXRlbSwgdmFsdWVzKSA9PiBpdGVtLnRleHQudG9Mb3dlckNhc2UoKSA9PT0gdmFsdWVzLnJlc2lkZW5jZS50b0xvd2VyQ2FzZSgpO1xuXG5jb25zdCB2YWxpZGF0ZVJlc2lkZW5jZSA9ICh2YWx1ZXMsIHJlc2lkZW5jZV9saXN0KSA9PiB7XG4gICAgY29uc3QgZXJyb3JzID0ge307XG5cbiAgICBpZiAoIXZhbHVlcy5yZXNpZGVuY2UpIHtcbiAgICAgICAgZXJyb3JzLnJlc2lkZW5jZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW5kZXhfb2Zfc2VsZWN0aW9uID0gcmVzaWRlbmNlX2xpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXNSZXNpZGVuY2VUZXh0KGl0ZW0sIHZhbHVlcykpO1xuXG4gICAgICAgIGlmIChpbmRleF9vZl9zZWxlY3Rpb24gPT09IC0xIHx8IHJlc2lkZW5jZV9saXN0W2luZGV4X29mX3NlbGVjdGlvbl0uZGlzYWJsZWQgPT09ICdESVNBQkxFRCcpIHtcbiAgICAgICAgICAgIGVycm9ycy5yZXNpZGVuY2UgPSBsb2NhbGl6ZSgnVW5mb3J0dW5hdGVseSwge3t3ZWJzaXRlX25hbWV9fSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgY291bnRyeS4nLCB7XG4gICAgICAgICAgICAgICAgd2Vic2l0ZV9uYW1lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xufTtcblxuY2xhc3MgU2V0UmVzaWRlbmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBvblNldFJlc2lkZW5jZUNvbXBsZXRlID0gZXJyb3IgPT4ge1xuICAgICAgICAvLyBUT0RPOiBQcm9wZXIgZXJyb3IgaGFuZGxpbmcgKGN1cnJlbnRseSB3ZSBoYXZlIG5vIHBsYWNlIHRvIHB1dCB0aGUgbWVzc2FnZSlcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIGxvd2VyIGxldmVsIG1vZGFsIGNvbnRyb2xzIGR1ZSB0byBvdmVycmlkaW5nIG1vZGFsIHJlbmRlcmluZ1xuICAgICAgICB0aGlzLnByb3BzLmlzTW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVBcHAoKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IG9uU2V0UmVzaWRlbmNlLCByZXNpZGVuY2VfbGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgb25TZXRSZXNpZGVuY2VQYXNzdGhyb3VnaCA9IHZhbHVlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleF9vZl9zZWxlY3Rpb24gPSByZXNpZGVuY2VfbGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpc1Jlc2lkZW5jZVRleHQoaXRlbSwgdmFsdWVzKSk7XG4gICAgICAgICAgICBjb25zdCBtb2RkZWRfdmFsdWVzID0geyAuLi52YWx1ZXMsIHJlc2lkZW5jZTogcmVzaWRlbmNlX2xpc3RbaW5kZXhfb2Zfc2VsZWN0aW9uXS52YWx1ZSB9O1xuICAgICAgICAgICAgb25TZXRSZXNpZGVuY2UobW9kZGVkX3ZhbHVlcywgdGhpcy5vblNldFJlc2lkZW5jZUNvbXBsZXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXQtcmVzaWRlbmNlJz5cbiAgICAgICAgICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVzaWRlbmNlOiAnJyB9fVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17dmFsdWVzID0+IHZhbGlkYXRlUmVzaWRlbmNlKHZhbHVlcywgcmVzaWRlbmNlX2xpc3QpfVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17b25TZXRSZXNpZGVuY2VQYXNzdGhyb3VnaH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcsIGVycm9ycywgdmFsdWVzLCBzZXRGaWVsZFZhbHVlLCB0b3VjaGVkIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc2lkZW5jZUZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU9e3NldEZpZWxkVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpZGVuY2VfbGlzdD17cmVzaWRlbmNlX2xpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc2V0LXJlc2lkZW5jZV9fc3VidGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnV2UgbmVlZCB0aGlzIHRvIG1ha2Ugc3VyZSBvdXIgc2VydmljZSBjb21wbGllcyB3aXRoIGxhd3MgYW5kIHJlZ3VsYXRpb25zIGluIHlvdXIgY291bnRyeS4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NldC1yZXNpZGVuY2VfX2J0bicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NldC1yZXNpZGVuY2VfX2J0bi0tZGlzYWJsZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXZhbHVlcy5yZXNpZGVuY2UgfHwgZXJyb3JzLnJlc2lkZW5jZSB8fCBpc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2Rpc2FibGVkPXshdmFsdWVzLnJlc2lkZW5jZSB8fCAhIWVycm9ycy5yZXNpZGVuY2UgfHwgaXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2xvY2FsaXplKCdTZXQgcmVzaWRlbmNlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXNpZGVuY2VGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Gb3JtaWs+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNldFJlc2lkZW5jZS5wcm9wVHlwZXMgPSB7XG4gICAgb25TZXRSZXNpZGVuY2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlc2lkZW5jZV9saXN0OiBQcm9wVHlwZXMuYXJyYXksXG59O1xuXG5jb25zdCBTZXRSZXNpZGVuY2VNb2RhbCA9ICh7XG4gICAgZW5hYmxlQXBwLFxuICAgIGRpc2FibGVBcHAsXG4gICAgaXNfbG9hZGluZyxcbiAgICBpc192aXNpYmxlLFxuICAgIG9uU2V0UmVzaWRlbmNlLFxuICAgIHJlc2lkZW5jZV9saXN0LFxuICAgIHRvZ2dsZVNldFJlc2lkZW5jZU1vZGFsLFxufSkgPT4ge1xuICAgIGlmIChyZXNpZGVuY2VfbGlzdC5sZW5ndGggPCAxKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgICBpc192aXNpYmxlPXtpc192aXNpYmxlfVxuICAgICAgICAgICAgZGlzYWJsZUFwcD17ZGlzYWJsZUFwcH1cbiAgICAgICAgICAgIGVuYWJsZUFwcD17ZW5hYmxlQXBwfVxuICAgICAgICAgICAgaXNfbG9hZGluZz17aXNfbG9hZGluZyB8fCAhcmVzaWRlbmNlX2xpc3QubGVuZ3RofVxuICAgICAgICAgICAgaXNfY29udGVudF9jZW50ZXJlZFxuICAgICAgICA+XG4gICAgICAgICAgICA8U2V0UmVzaWRlbmNlXG4gICAgICAgICAgICAgICAgb25TZXRSZXNpZGVuY2U9e29uU2V0UmVzaWRlbmNlfVxuICAgICAgICAgICAgICAgIHJlc2lkZW5jZV9saXN0PXtyZXNpZGVuY2VfbGlzdH1cbiAgICAgICAgICAgICAgICBpc01vZGFsVmlzaWJsZT17dG9nZ2xlU2V0UmVzaWRlbmNlTW9kYWx9XG4gICAgICAgICAgICAgICAgZW5hYmxlQXBwPXtlbmFibGVBcHB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0RpYWxvZz5cbiAgICApO1xufTtcblxuU2V0UmVzaWRlbmNlTW9kYWwucHJvcFR5cGVzID0ge1xuICAgIGRpc2FibGVBcHA6IFByb3BUeXBlcy5mdW5jLFxuICAgIGVuYWJsZUFwcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXNfbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNfdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZXRSZXNpZGVuY2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlc2lkZW5jZV9saXN0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHsgdWksIGNsaWVudCB9KSA9PiAoe1xuICAgIGlzX3Zpc2libGU6IHVpLmlzX3NldF9yZXNpZGVuY2VfbW9kYWxfdmlzaWJsZSxcbiAgICB0b2dnbGVTZXRSZXNpZGVuY2VNb2RhbDogdWkudG9nZ2xlU2V0UmVzaWRlbmNlTW9kYWwsXG4gICAgZW5hYmxlQXBwOiB1aS5lbmFibGVBcHAsXG4gICAgZGlzYWJsZUFwcDogdWkuZGlzYWJsZUFwcCxcbiAgICBpc19sb2FkaW5nOiB1aS5pc19sb2FkaW5nLFxuICAgIG9uU2V0UmVzaWRlbmNlOiBjbGllbnQub25TZXRSZXNpZGVuY2UsXG4gICAgcmVzaWRlbmNlX2xpc3Q6IGNsaWVudC5yZXNpZGVuY2VfbGlzdCxcbn0pKShTZXRSZXNpZGVuY2VNb2RhbCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFkQTtBQStCQTs7OztBQXhEQTtBQUNBO0FBMERBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/SetResidenceModal/set-residence-modal.jsx\n");

/***/ }),

/***/ "./sass/app/modules/set-residence.scss":
/*!*********************************************!*\
  !*** ./sass/app/modules/set-residence.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYXNzL2FwcC9tb2R1bGVzL3NldC1yZXNpZGVuY2Uuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Nhc3MvYXBwL21vZHVsZXMvc2V0LXJlc2lkZW5jZS5zY3NzP2IwNjYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sass/app/modules/set-residence.scss\n");

/***/ })

}]);