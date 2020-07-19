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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar */ \"./components/SearchBar.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  root: {\n    padding: \"16px 0px\",\n    height: \"90px\",\n    width: \"100%\",\n    background: \"grey\",\n    display: \"flex\",\n    alignItesm: \"center\",\n    justifyContent: \"center\"\n  }\n});\n\nconst NavBar = props => {\n  const classes = useStyles(props);\n  return __jsx(\"div\", {\n    className: classes.root\n  }, __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    placeholder: \"Search on Google\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci5qcz9lYjI0Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwicGFkZGluZyIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJhbGlnbkl0ZXNtIiwianVzdGlmeUNvbnRlbnQiLCJOYXZCYXIiLCJwcm9wcyIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBQ0MsMkVBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFDO0FBQ0hDLFdBQU8sRUFBQyxVQURMO0FBRUhDLFVBQU0sRUFBQyxNQUZKO0FBR0hDLFNBQUssRUFBQyxNQUhIO0FBSUhDLGNBQVUsRUFBQyxNQUpSO0FBS0hDLFdBQU8sRUFBQyxNQUxMO0FBTUhDLGNBQVUsRUFBQyxRQU5SO0FBT0hDLGtCQUFjLEVBQUM7QUFQWjtBQURvQixDQUFELENBQTFCOztBQVlBLE1BQU1DLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0FBRXhCLFFBQU1DLE9BQU8sR0FBR1osU0FBUyxDQUFDVyxLQUFELENBQXpCO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRUMsT0FBTyxDQUFDVjtBQUF4QixLQUNFLE1BQUMsa0RBQUQ7QUFBVyxlQUFXLEVBQUM7QUFBdkIsSUFERixDQURGO0FBS0QsQ0FSRDs7QUFVZVEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhclwiO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcz1tYWtlU3R5bGVzKHtcbiAgcm9vdDp7XG4gICAgcGFkZGluZzpcIjE2cHggMHB4XCIsXG4gICAgaGVpZ2h0OlwiOTBweFwiLFxuICAgIHdpZHRoOlwiMTAwJVwiLFxuICAgIGJhY2tncm91bmQ6XCJncmV5XCIsXG4gICAgZGlzcGxheTpcImZsZXhcIixcbiAgICBhbGlnbkl0ZXNtOlwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIlxuICB9XG59KTtcblxuY29uc3QgTmF2QmFyID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8U2VhcmNoQmFyIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9uIEdvb2dsZVwiLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ }),

/***/ "./components/SearchBar.js":
/*!*********************************!*\
  !*** ./components/SearchBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_searchBar_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/searchBar.styles */ \"./styles/searchBar.styles.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst SearchBar = props => {\n  const classes = Object(_styles_searchBar_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(props);\n  return __jsx(\"div\", {\n    className: classes.search\n  }, __jsx(\"input\", {\n    type: \"search\",\n    placeholder: props.placeholder\n  }), __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: \"fa fa-plus-circle\",\n    style: {\n      fontSize: 30,\n      color: \"black\"\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJhci5qcz8yMzYyIl0sIm5hbWVzIjpbIlNlYXJjaEJhciIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInNlYXJjaCIsInBsYWNlaG9sZGVyIiwiZm9udFNpemUiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLE1BQU1BLFNBQVMsR0FBR0MsS0FBSyxJQUFJO0FBRXpCLFFBQU1DLE9BQU8sR0FBR0Msd0VBQVMsQ0FBQ0YsS0FBRCxDQUF6QjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLE9BQU8sQ0FBQ0U7QUFBeEIsS0FDRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLGVBQVcsRUFBRUgsS0FBSyxDQUFDSTtBQUF4QyxJQURGLEVBRUUsTUFBQyw2REFBRDtBQUFNLGFBQVMsRUFBQyxtQkFBaEI7QUFBb0MsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxFQUFaO0FBQWdCQyxXQUFLLEVBQUM7QUFBdEI7QUFBM0MsSUFGRixDQURGO0FBTUQsQ0FWRDs7QUFZZVAsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaEJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NlYXJjaEJhci5zdHlsZXNcIjtcblxuXG5jb25zdCBTZWFyY2hCYXIgPSBwcm9wcyA9PiB7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxuICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9PjwvaW5wdXQ+XG4gICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYSBmYS1wbHVzLWNpcmNsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAzMCwgY29sb3I6XCJibGFja1wiIH19IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SearchBar.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // import theme from '../src/theme';\n\n\nfunction MyApp(props) {\n  const {\n    Component,\n    pageProps\n  } = props;\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    // Remove the server-side injected CSS.\n    const jssStyles = document.querySelector('#jss-server-side');\n\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx(\"title\", null, \"Clip\"), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"minimum-scale=1, initial-scale=1, width=device-width\"\n  })), __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default.a, null), __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), __jsx(Component, pageProps));\n}\nMyApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired,\n  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7Q0FHQTs7QUFFQTtBQUVlLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUVuQyxRQUFNO0FBQUVDLGFBQUY7QUFBYUM7QUFBYixNQUEyQkYsS0FBakM7QUFFQUcsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixNQUFNO0FBQ3BCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCOztBQUNBLFFBQUlGLFNBQUosRUFBZTtBQUNiQSxlQUFTLENBQUNHLGFBQVYsQ0FBd0JDLFdBQXhCLENBQW9DSixTQUFwQztBQUNEO0FBQ0YsR0FORCxFQU1HLEVBTkg7QUFTQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0UsTUFBQyxnREFBRCxRQUNFLDRCQURGLEVBRUU7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUM7QUFBOUIsSUFGRixDQURGLEVBV0ksTUFBQyxvRUFBRCxPQVhKLEVBY0ksTUFBQywwREFBRCxPQWRKLEVBZUksTUFBQyxTQUFELEVBQWVILFNBQWYsQ0FmSixDQURGO0FBd0JEO0FBRURILEtBQUssQ0FBQ1csU0FBTixHQUFrQjtBQUNoQlQsV0FBUyxFQUFFVSxpREFBUyxDQUFDQyxXQUFWLENBQXNCQyxVQURqQjtBQUVoQlgsV0FBUyxFQUFFUyxpREFBUyxDQUFDRyxNQUFWLENBQWlCRDtBQUZaLENBQWxCIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG4vLyBpbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3JjL3RoZW1lJztcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wcykge1xuXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xuICAgIGlmIChqc3NTdHlsZXMpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XG4gICAgfVxuICB9LCBbXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2xpcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuXG5cbiAgICAgIHsvKiA8VGhlbWVQcm92aWRlcj4gKi99XG5cbiAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cblxuICAgICAgICB7Lyog4pa8IGluc2VydCBOYXZiYXIgb3IgZm9vdGVyIOKWvCAqL31cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cbiAgICAgIHsvKiA8L1RoZW1lUHJvdmlkZXI+ICovfVxuXG5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG5cbn1cblxuTXlBcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/searchBar.styles.js":
/*!************************************!*\
  !*** ./styles/searchBar.styles.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"makeStyles\"])({\n  search: {\n    height: \"46px\",\n    \"& input\": {\n      padding: \"0px 24px\",\n      width: \"400px\",\n      height: \"100%\",\n      borderRadius: 8,\n      border: \"none\",\n      outline: \"none\",\n      \"&:focus\": {\n        border: \"#169EF8\"\n      }\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvc2VhcmNoQmFyLnN0eWxlcy5qcz84ODJhIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzZWFyY2giLCJoZWlnaHQiLCJwYWRkaW5nIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJvdXRsaW5lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsUUFBTSxFQUFFO0FBQ05DLFVBQU0sRUFBRSxNQURGO0FBRU4sZUFBVztBQUNUQyxhQUFPLEVBQUUsVUFEQTtBQUVUQyxXQUFLLEVBQUUsT0FGRTtBQUdURixZQUFNLEVBQUUsTUFIQztBQUlURyxrQkFBWSxFQUFFLENBSkw7QUFLVEMsWUFBTSxFQUFFLE1BTEM7QUFNVEMsYUFBTyxFQUFFLE1BTkE7QUFPVCxpQkFBVztBQUNURCxjQUFNLEVBQUU7QUFEQztBQVBGO0FBRkw7QUFEbUIsQ0FBRCxDQUE1QjtBQWtCZVAsd0VBQWYiLCJmaWxlIjoiLi9zdHlsZXMvc2VhcmNoQmFyLnN0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBzZWFyY2g6IHtcbiAgICBoZWlnaHQ6IFwiNDZweFwiLFxuICAgIFwiJiBpbnB1dFwiOiB7XG4gICAgICBwYWRkaW5nOiBcIjBweCAyNHB4XCIsXG4gICAgICB3aWR0aDogXCI0MDBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIFwiJjpmb2N1c1wiOiB7XG4gICAgICAgIGJvcmRlcjogXCIjMTY5RUY4XCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/searchBar.styles.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiP2U2N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CssBaseline\n");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Icon\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uXCI/MDE0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9JY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Icon\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

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