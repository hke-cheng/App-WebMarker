module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Avator.js":
/*!******************************!*\
  !*** ./components/Avator.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  root: {\n    borderRadius: \"20px\",\n    background: \"blue\",\n    overflow: \"hidden\",\n    width: \"60px\",\n    height: \"60px\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    \"& img\": {\n      maxWidth: \"60px\"\n    }\n  }\n});\n\nconst Avator = props => {\n  const classes = useStyles(props);\n  return __jsx(\"a\", {\n    href: \"https://www.google.com\",\n    target: \"_blank\"\n  }, __jsx(\"div\", {\n    className: classes.root\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avator);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F2YXRvci5qcz9iZWM5Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsIm92ZXJmbG93Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWF4V2lkdGgiLCJBdmF0b3IiLCJwcm9wcyIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLGdCQUFZLEVBQUUsTUFEVjtBQUVKQyxjQUFVLEVBQUMsTUFGUDtBQUdKQyxZQUFRLEVBQUUsUUFITjtBQUlKQyxTQUFLLEVBQUUsTUFKSDtBQUtKQyxVQUFNLEVBQUUsTUFMSjtBQU1KQyxXQUFPLEVBQUMsTUFOSjtBQU9KQyxjQUFVLEVBQUMsUUFQUDtBQVFKQyxrQkFBYyxFQUFDLFFBUlg7QUFTSixhQUFTO0FBQ1BDLGNBQVEsRUFBRTtBQURIO0FBVEw7QUFEcUIsQ0FBRCxDQUE1Qjs7QUFnQkEsTUFBTUMsTUFBTSxHQUFHQyxLQUFLLElBQUk7QUFFdEIsUUFBTUMsT0FBTyxHQUFHZCxTQUFTLENBQUNhLEtBQUQsQ0FBekI7QUFDQSxTQUNJO0FBQUcsUUFBSSxFQUFDLHdCQUFSO0FBQWlDLFVBQU0sRUFBQztBQUF4QyxLQUNFO0FBQUssYUFBUyxFQUFFQyxPQUFPLENBQUNaO0FBQXhCLElBREYsQ0FESjtBQVNELENBWkQ7O0FBY2VVLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BdmF0b3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgYmFja2dyb3VuZDpcImJsdWVcIixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICB3aWR0aDogXCI2MHB4XCIsXG4gICAgaGVpZ2h0OiBcIjYwcHhcIixcbiAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLFxuICAgIFwiJiBpbWdcIjoge1xuICAgICAgbWF4V2lkdGg6IFwiNjBweFwiXG4gICAgfSxcbiAgfVxufSk7XG5cbmNvbnN0IEF2YXRvciA9IHByb3BzID0+IHtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHByb3BzKTtcbiAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgIHsvKiA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2UvZTcvSW5zdGFncmFtX2xvZ29fMjAxNi5zdmcvMTIwMHB4LUluc3RhZ3JhbV9sb2dvXzIwMTYuc3ZnLnBuZ1wiXG4gICAgICAgICAgLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRvcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Avator.js\n");

/***/ }),

/***/ "./components/Divider.js":
/*!*******************************!*\
  !*** ./components/Divider.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  divider: {\n    width: props => props.vertical ? \"100%\" : props.space,\n    height: props => props.vertical ? props.space : \"100%\"\n  }\n});\n\nconst Divider = props => {\n  const classes = useStyles(props);\n  return __jsx(\"div\", {\n    className: classes.divider\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Divider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RpdmlkZXIuanM/MjA4MiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiZGl2aWRlciIsIndpZHRoIiwicHJvcHMiLCJ2ZXJ0aWNhbCIsInNwYWNlIiwiaGVpZ2h0IiwiRGl2aWRlciIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsU0FBTyxFQUFDO0FBQ05DLFNBQUssRUFBQ0MsS0FBSyxJQUFJQSxLQUFLLENBQUNDLFFBQU4sR0FBaUIsTUFBakIsR0FBMEJELEtBQUssQ0FBQ0UsS0FEekM7QUFFTkMsVUFBTSxFQUFDSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsUUFBTixHQUFpQkQsS0FBSyxDQUFDRSxLQUF2QixHQUErQjtBQUZ6QztBQURtQixDQUFELENBQTVCOztBQU9BLE1BQU1FLE9BQU8sR0FBR0osS0FBSyxJQUFJO0FBRXZCLFFBQU1LLE9BQU8sR0FBR1QsU0FBUyxDQUFDSSxLQUFELENBQXpCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRUssT0FBTyxDQUFDUDtBQUF4QixJQURGO0FBSUQsQ0FSRDs7QUFVZU0sc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0RpdmlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGRpdmlkZXI6e1xuICAgIHdpZHRoOnByb3BzID0+IHByb3BzLnZlcnRpY2FsID8gXCIxMDAlXCIgOiBwcm9wcy5zcGFjZSxcbiAgICBoZWlnaHQ6cHJvcHMgPT4gcHJvcHMudmVydGljYWwgPyBwcm9wcy5zcGFjZSA6IFwiMTAwJVwiLFxuICB9XG59KVxuXG5jb25zdCBEaXZpZGVyID0gcHJvcHMgPT4ge1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMocHJvcHMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0gLz5cbiAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpdmlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Divider.js\n");

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  root: {\n    padding: \"20px 40px\",\n    background: \"#EEEEEE\"\n  }\n});\n\nconst Page = props => {\n  const classes = useStyles(props);\n  return __jsx(\"div\", {\n    className: classes.root\n  }, props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2UuanM/MTc1YyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiUGFnZSIsInByb3BzIiwiY2xhc3NlcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBQztBQUNIQyxXQUFPLEVBQUMsV0FETDtBQUVIQyxjQUFVLEVBQUM7QUFGUjtBQURzQixDQUFELENBQTVCOztBQU9BLE1BQU1DLElBQUksR0FBR0MsS0FBSyxJQUFHO0FBRW5CLFFBQU1DLE9BQU8sR0FBR1AsU0FBUyxDQUFDTSxLQUFELENBQXpCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRUMsT0FBTyxDQUFDTDtBQUF4QixLQUNHSSxLQUFLLENBQUNFLFFBRFQsQ0FERjtBQUtELENBVEQ7O0FBV2VILG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6e1xuICAgIHBhZGRpbmc6XCIyMHB4IDQwcHhcIixcbiAgICBiYWNrZ3JvdW5kOlwiI0VFRUVFRVwiLFxuICB9XG59KTtcblxuY29uc3QgUGFnZSA9IHByb3BzID0+e1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMocHJvcHMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Page.js\n");

/***/ }),

/***/ "./components/Texts.js":
/*!*****************************!*\
  !*** ./components/Texts.js ***!
  \*****************************/
/*! exports provided: H1, H2, H3, H4, H5, Body1, Body2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H1\", function() { return H1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H2\", function() { return H2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H3\", function() { return H3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H4\", function() { return H4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H5\", function() { return H5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Body1\", function() { return Body1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Body2\", function() { return Body2; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  h1: {\n    fontFamily: \"Inter, sans-serif\",\n    fontSize: \"24px\",\n    fontWeight: 700,\n    margin: \"0px\"\n  },\n  h2: {\n    fontFamily: \"Inter, sans-serif\",\n    fontSize: \"20px\",\n    fontWeight: 700,\n    margin: \"0px\"\n  },\n  h3: {\n    fontFamily: \"Inter, sans-serif\",\n    fontSize: \"18px\",\n    fontWeight: 700,\n    margin: \"0px\"\n  },\n  h4: {\n    fontFamily: \"Inter, sans-serif\",\n    fontSize: \"16px\",\n    fontWeight: 700,\n    margin: \"0px\",\n    color: props => props.textColor\n  },\n  h5: {\n    fontFamily: \"Inter, sans-serif\",\n    fontSize: \"14px\",\n    fontWeight: 700,\n    margin: \"0px\"\n  },\n  body1: {\n    fontFamily: \"Inter, sans-serif\",\n    fontSize: \"16px\",\n    fontWeight: 400,\n    margin: \"0px\"\n  },\n  body2: {\n    fontFamily: \"Inter, sans-serif\",\n    fontSize: \"14px\",\n    fontWeight: 400,\n    margin: \"0px\"\n  }\n}); //H\n\nconst H1 = props => {\n  const classes = useStyles(props);\n  return __jsx(\"h1\", _extends({}, props, {\n    className: classes.h1\n  }), props.children);\n};\nconst H2 = props => {\n  const classes = useStyles(props);\n  return __jsx(\"h1\", _extends({}, props, {\n    className: classes.h2\n  }), props.children);\n};\nconst H3 = props => {\n  const classes = useStyles(props);\n  return __jsx(\"h1\", _extends({}, props, {\n    className: classes.h3\n  }), props.children);\n};\nconst H4 = props => {\n  const classes = useStyles(props);\n  return __jsx(\"h1\", _extends({}, props, {\n    className: classes.h4\n  }), props.children);\n};\nconst H5 = props => {\n  const classes = useStyles(props);\n  return __jsx(\"h1\", _extends({}, props, {\n    className: classes.h5\n  }), props.children);\n}; //P\n\nconst Body1 = props => {\n  const classes = useStyles(props);\n  return __jsx(\"p\", _extends({}, props, {\n    className: classes.body1\n  }), props.children);\n};\nconst Body2 = props => {\n  const classes = useStyles(props);\n  return __jsx(\"p\", _extends({}, props, {\n    className: classes.body2\n  }), props.children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RleHRzLmpzP2NjYmIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImgxIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbiIsImgyIiwiaDMiLCJoNCIsImNvbG9yIiwicHJvcHMiLCJ0ZXh0Q29sb3IiLCJoNSIsImJvZHkxIiwiYm9keTIiLCJIMSIsImNsYXNzZXMiLCJjaGlsZHJlbiIsIkgyIiwiSDMiLCJINCIsIkg1IiwiQm9keTEiLCJCb2R5MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUdBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsSUFBRSxFQUFFO0FBQ0ZDLGNBQVUsRUFBRSxtQkFEVjtBQUVGQyxZQUFRLEVBQUUsTUFGUjtBQUdGQyxjQUFVLEVBQUUsR0FIVjtBQUlGQyxVQUFNLEVBQUU7QUFKTixHQUR1QjtBQVEzQkMsSUFBRSxFQUFFO0FBQ0ZKLGNBQVUsRUFBRSxtQkFEVjtBQUVGQyxZQUFRLEVBQUUsTUFGUjtBQUdGQyxjQUFVLEVBQUUsR0FIVjtBQUlGQyxVQUFNLEVBQUU7QUFKTixHQVJ1QjtBQWUzQkUsSUFBRSxFQUFFO0FBQ0ZMLGNBQVUsRUFBRSxtQkFEVjtBQUVGQyxZQUFRLEVBQUUsTUFGUjtBQUdGQyxjQUFVLEVBQUUsR0FIVjtBQUlGQyxVQUFNLEVBQUU7QUFKTixHQWZ1QjtBQXNCM0JHLElBQUUsRUFBRTtBQUNGTixjQUFVLEVBQUUsbUJBRFY7QUFFRkMsWUFBUSxFQUFFLE1BRlI7QUFHRkMsY0FBVSxFQUFFLEdBSFY7QUFJRkMsVUFBTSxFQUFFLEtBSk47QUFLRkksU0FBSyxFQUFFQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0M7QUFMcEIsR0F0QnVCO0FBOEIzQkMsSUFBRSxFQUFFO0FBQ0ZWLGNBQVUsRUFBRSxtQkFEVjtBQUVGQyxZQUFRLEVBQUUsTUFGUjtBQUdGQyxjQUFVLEVBQUUsR0FIVjtBQUlGQyxVQUFNLEVBQUU7QUFKTixHQTlCdUI7QUFzQzNCUSxPQUFLLEVBQUU7QUFDTFgsY0FBVSxFQUFFLG1CQURQO0FBRUxDLFlBQVEsRUFBRSxNQUZMO0FBR0xDLGNBQVUsRUFBRSxHQUhQO0FBSUxDLFVBQU0sRUFBRTtBQUpILEdBdENvQjtBQTRDM0JTLE9BQUssRUFBRTtBQUNMWixjQUFVLEVBQUUsbUJBRFA7QUFFTEMsWUFBUSxFQUFFLE1BRkw7QUFHTEMsY0FBVSxFQUFFLEdBSFA7QUFJTEMsVUFBTSxFQUFFO0FBSkg7QUE1Q29CLENBQUQsQ0FBNUIsQyxDQXFEQTs7QUFDTyxNQUFNVSxFQUFFLEdBQUlMLEtBQUQsSUFBVztBQUMzQixRQUFNTSxPQUFPLEdBQUdqQixTQUFTLENBQUNXLEtBQUQsQ0FBekI7QUFDQSxTQUNFLHlCQUFRQSxLQUFSO0FBQWUsYUFBUyxFQUFFTSxPQUFPLENBQUNmO0FBQWxDLE1BQ0dTLEtBQUssQ0FBQ08sUUFEVCxDQURGO0FBS0QsQ0FQTTtBQVNBLE1BQU1DLEVBQUUsR0FBSVIsS0FBRCxJQUFXO0FBQzNCLFFBQU1NLE9BQU8sR0FBR2pCLFNBQVMsQ0FBQ1csS0FBRCxDQUF6QjtBQUNBLFNBQ0UseUJBQVFBLEtBQVI7QUFBZSxhQUFTLEVBQUVNLE9BQU8sQ0FBQ1Y7QUFBbEMsTUFDR0ksS0FBSyxDQUFDTyxRQURULENBREY7QUFLRCxDQVBNO0FBVUEsTUFBTUUsRUFBRSxHQUFJVCxLQUFELElBQVc7QUFDM0IsUUFBTU0sT0FBTyxHQUFHakIsU0FBUyxDQUFDVyxLQUFELENBQXpCO0FBQ0EsU0FDRSx5QkFBUUEsS0FBUjtBQUFlLGFBQVMsRUFBRU0sT0FBTyxDQUFDVDtBQUFsQyxNQUNHRyxLQUFLLENBQUNPLFFBRFQsQ0FERjtBQUtELENBUE07QUFTQSxNQUFNRyxFQUFFLEdBQUlWLEtBQUQsSUFBVztBQUMzQixRQUFNTSxPQUFPLEdBQUdqQixTQUFTLENBQUNXLEtBQUQsQ0FBekI7QUFDQSxTQUNFLHlCQUFRQSxLQUFSO0FBQWUsYUFBUyxFQUFFTSxPQUFPLENBQUNSO0FBQWxDLE1BQ0dFLEtBQUssQ0FBQ08sUUFEVCxDQURGO0FBS0QsQ0FQTTtBQVNBLE1BQU1JLEVBQUUsR0FBSVgsS0FBRCxJQUFXO0FBQzNCLFFBQU1NLE9BQU8sR0FBR2pCLFNBQVMsQ0FBQ1csS0FBRCxDQUF6QjtBQUNBLFNBQ0UseUJBQVFBLEtBQVI7QUFBZSxhQUFTLEVBQUVNLE9BQU8sQ0FBQ0o7QUFBbEMsTUFDR0YsS0FBSyxDQUFDTyxRQURULENBREY7QUFLRCxDQVBNLEMsQ0FVUDs7QUFDTyxNQUFNSyxLQUFLLEdBQUlaLEtBQUQsSUFBVztBQUM5QixRQUFNTSxPQUFPLEdBQUdqQixTQUFTLENBQUNXLEtBQUQsQ0FBekI7QUFDQSxTQUNFLHdCQUFPQSxLQUFQO0FBQWMsYUFBUyxFQUFFTSxPQUFPLENBQUNIO0FBQWpDLE1BQ0dILEtBQUssQ0FBQ08sUUFEVCxDQURGO0FBS0QsQ0FQTTtBQVVBLE1BQU1NLEtBQUssR0FBSWIsS0FBRCxJQUFXO0FBQzlCLFFBQU1NLE9BQU8sR0FBR2pCLFNBQVMsQ0FBQ1csS0FBRCxDQUF6QjtBQUNBLFNBQ0Usd0JBQU9BLEtBQVA7QUFBYyxhQUFTLEVBQUVNLE9BQU8sQ0FBQ0Y7QUFBakMsTUFDR0osS0FBSyxDQUFDTyxRQURULENBREY7QUFLRCxDQVBNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXh0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgaDE6IHtcbiAgICBmb250RmFtaWx5OiBcIkludGVyLCBzYW5zLXNlcmlmXCIsXG4gICAgZm9udFNpemU6IFwiMjRweFwiLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBtYXJnaW46IFwiMHB4XCJcbiAgfSxcblxuICBoMjoge1xuICAgIGZvbnRGYW1pbHk6IFwiSW50ZXIsIHNhbnMtc2VyaWZcIixcbiAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIG1hcmdpbjogXCIwcHhcIlxuICB9LFxuXG4gIGgzOiB7XG4gICAgZm9udEZhbWlseTogXCJJbnRlciwgc2Fucy1zZXJpZlwiLFxuICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgbWFyZ2luOiBcIjBweFwiXG4gIH0sXG5cbiAgaDQ6IHtcbiAgICBmb250RmFtaWx5OiBcIkludGVyLCBzYW5zLXNlcmlmXCIsXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBtYXJnaW46IFwiMHB4XCIsXG4gICAgY29sb3I6IHByb3BzID0+IHByb3BzLnRleHRDb2xvcixcbiAgfSxcblxuICBoNToge1xuICAgIGZvbnRGYW1pbHk6IFwiSW50ZXIsIHNhbnMtc2VyaWZcIixcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIG1hcmdpbjogXCIwcHhcIlxuICB9LFxuXG5cbiAgYm9keTE6IHtcbiAgICBmb250RmFtaWx5OiBcIkludGVyLCBzYW5zLXNlcmlmXCIsXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBtYXJnaW46IFwiMHB4XCJcbiAgfSxcbiAgYm9keTI6IHtcbiAgICBmb250RmFtaWx5OiBcIkludGVyLCBzYW5zLXNlcmlmXCIsXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBtYXJnaW46IFwiMHB4XCIsXG4gIH1cbn0pO1xuXG5cbi8vSFxuZXhwb3J0IGNvbnN0IEgxID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMocHJvcHMpO1xuICByZXR1cm4gKFxuICAgIDxoMSB7Li4ucHJvcHN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5oMX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9oMT5cbiAgKVxufTtcblxuZXhwb3J0IGNvbnN0IEgyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMocHJvcHMpO1xuICByZXR1cm4gKFxuICAgIDxoMSB7Li4ucHJvcHN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5oMn0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9oMT5cbiAgKVxufTtcblxuXG5leHBvcnQgY29uc3QgSDMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPGgxIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc2VzLmgzfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2gxPlxuICApXG59O1xuXG5leHBvcnQgY29uc3QgSDQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPGgxIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc2VzLmg0fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2gxPlxuICApXG59O1xuXG5leHBvcnQgY29uc3QgSDUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPGgxIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc2VzLmg1fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2gxPlxuICApXG59O1xuXG5cbi8vUFxuZXhwb3J0IGNvbnN0IEJvZHkxID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMocHJvcHMpO1xuICByZXR1cm4gKFxuICAgIDxwIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHkxfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L3A+XG4gIClcbn07XG5cblxuZXhwb3J0IGNvbnN0IEJvZHkyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMocHJvcHMpO1xuICByZXR1cm4gKFxuICAgIDxwIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHkyfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L3A+XG4gIClcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Texts.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Avator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Avator */ \"./components/Avator.js\");\n/* harmony import */ var _components_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Divider */ \"./components/Divider.js\");\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Page */ \"./components/Page.js\");\n/* harmony import */ var _components_Texts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Texts */ \"./components/Texts.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"makeStyles\"])({\n  appContainer: {\n    background: \"white\",\n    display: \"flex\",\n    padding: \"0px\",\n    borderRadius: \"20px\"\n  }\n});\n\nconst Index = props => {\n  const classes = useStyles(props);\n  return __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJhcHBDb250YWluZXIiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJJbmRleCIsInByb3BzIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxjQUFZLEVBQUU7QUFDWkMsY0FBVSxFQUFFLE9BREE7QUFFWkMsV0FBTyxFQUFFLE1BRkc7QUFHWkMsV0FBTyxFQUFFLEtBSEc7QUFJWkMsZ0JBQVksRUFBRTtBQUpGO0FBRGEsQ0FBRCxDQUE1Qjs7QUFVQSxNQUFNQyxLQUFLLEdBQUdDLEtBQUssSUFBSTtBQUVyQixRQUFNQyxPQUFPLEdBQUdULFNBQVMsQ0FBQ1EsS0FBRCxDQUF6QjtBQUNBLFNBQ0UsTUFBQyx3REFBRCxPQURGO0FBVUQsQ0FiRDs7QUFlZUQsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdmF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXZhdG9yXCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9EaXZpZGVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgeyBCb2R5MSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RleHRzXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgYXBwQ29udGFpbmVyOiB7XG4gICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIHBhZGRpbmc6IFwiMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIlxuICB9LFxuXG59KTtcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiB7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG5cbiAgICAgIHsvKiB3ZWJMaXN0LVRhYiAqL31cblxuICAgICAgey8qIDxQb3B1bGFyVGFicyAvPiAqL31cblxuXG4gICAgPC9QYWdlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chenghanke/Desktop/编程学习/App-markWebsite/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });