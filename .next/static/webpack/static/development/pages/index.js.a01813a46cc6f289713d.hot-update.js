webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tabs.js":
/*!****************************!*\
  !*** ./components/Tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _contexts_webLists_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/webLists.context */ \"./contexts/webLists.context.js\");\n/* harmony import */ var _components_Texts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Texts */ \"./components/Texts.js\");\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  tab_root: {\n    padding: \"16px\",\n    display: \"flex\",\n    \"& div\": {\n      width: \"100%\",\n      height: \"2px\",\n      borderRadius: \"50%\",\n      background: \"black\"\n    },\n    // borderBottom: props => props.id === props.activeId && \"2px solid black\",\n    \"&:hover\": {\n      cursor: \"pointer\"\n    }\n  },\n  activeFont: {\n    fontWeight: function fontWeight(props) {\n      return props.id === props.activeId && 900;\n    }\n  }\n});\n\nvar Tab = function Tab(props) {\n  _s();\n\n  var classes = useStyles(props); //set ActiveId\n\n  var onClickHandler = function onClickHandler(currentId) {\n    props.onActiveId(currentId);\n  };\n\n  return __jsx(\"div\", {\n    className: classes.tab_root,\n    onClick: function onClick() {\n      return onClickHandler(props.id);\n    }\n  }, __jsx(_components_Texts__WEBPACK_IMPORTED_MODULE_3__[\"Body1\"], {\n    className: classes.activeFont\n  }, props.label, \" + \", props.id), __jsx(\"div\", null));\n};\n\n_s(Tab, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Tab;\n\nvar Tabs = function Tabs(props) {\n  _s2();\n\n  var tabs = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_webLists_context__WEBPACK_IMPORTED_MODULE_2__[\"WebListsContext\"]);\n  var webLists = tabs.webLists,\n      activeId = tabs.activeId,\n      findActiveId = tabs.findActiveId;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    style: {\n      display: \"flex\"\n    }\n  }, webLists.map(function (webList, index) {\n    return __jsx(Tab, {\n      key: index,\n      label: webList.listName,\n      id: webList.id,\n      onActiveId: findActiveId,\n      activeId: activeId\n    });\n  })), __jsx(\"p\", null, \"Active Id: \", activeId));\n};\n\n_s2(Tabs, \"09jrICI067Ik8iEn+jWc/Y0PUXQ=\");\n\n_c2 = Tabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tabs);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Tab\");\n$RefreshReg$(_c2, \"Tabs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYnMuanM/MTYzMCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGFiX3Jvb3QiLCJwYWRkaW5nIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsImN1cnNvciIsImFjdGl2ZUZvbnQiLCJmb250V2VpZ2h0IiwicHJvcHMiLCJpZCIsImFjdGl2ZUlkIiwiVGFiIiwiY2xhc3NlcyIsIm9uQ2xpY2tIYW5kbGVyIiwiY3VycmVudElkIiwib25BY3RpdmVJZCIsImxhYmVsIiwiVGFicyIsInRhYnMiLCJ1c2VDb250ZXh0IiwiV2ViTGlzdHNDb250ZXh0Iiwid2ViTGlzdHMiLCJmaW5kQWN0aXZlSWQiLCJtYXAiLCJ3ZWJMaXN0IiwiaW5kZXgiLCJsaXN0TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxVQUFRLEVBQUU7QUFDUkMsV0FBTyxFQUFFLE1BREQ7QUFFUkMsV0FBTyxFQUFFLE1BRkQ7QUFHUixhQUFTO0FBQ1BDLFdBQUssRUFBRSxNQURBO0FBRVBDLFlBQU0sRUFBQyxLQUZBO0FBR1BDLGtCQUFZLEVBQUMsS0FITjtBQUlQQyxnQkFBVSxFQUFDO0FBSkosS0FIRDtBQVNSO0FBQ0EsZUFBVztBQUNUQyxZQUFNLEVBQUU7QUFEQztBQVZILEdBRGlCO0FBZTNCQyxZQUFVLEVBQUU7QUFDVkMsY0FBVSxFQUFFLG9CQUFBQyxLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDQyxFQUFOLEtBQWFELEtBQUssQ0FBQ0UsUUFBbkIsSUFBK0IsR0FBbkM7QUFBQTtBQURQO0FBZmUsQ0FBRCxDQUE1Qjs7QUFvQkEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQUgsS0FBSyxFQUFJO0FBQUE7O0FBQ25CLE1BQU1JLE9BQU8sR0FBR2hCLFNBQVMsQ0FBQ1ksS0FBRCxDQUF6QixDQURtQixDQUduQjs7QUFDQSxNQUFNSyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFNBQUQsRUFBZTtBQUNwQ04sU0FBSyxDQUFDTyxVQUFOLENBQWlCRCxTQUFqQjtBQUNELEdBRkQ7O0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBRUYsT0FBTyxDQUFDZCxRQUF4QjtBQUFrQyxXQUFPLEVBQUU7QUFBQSxhQUFNZSxjQUFjLENBQUNMLEtBQUssQ0FBQ0MsRUFBUCxDQUFwQjtBQUFBO0FBQTNDLEtBQ0UsTUFBQyx1REFBRDtBQUFPLGFBQVMsRUFBRUcsT0FBTyxDQUFDTjtBQUExQixLQUF1Q0UsS0FBSyxDQUFDUSxLQUE3QyxTQUF1RFIsS0FBSyxDQUFDQyxFQUE3RCxDQURGLEVBRUUsa0JBRkYsQ0FERjtBQU1ELENBZEQ7O0dBQU1FLEc7VUFDWWYsUzs7O0tBRFplLEc7O0FBZ0JOLElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFULEtBQUssRUFBSTtBQUFBOztBQUVwQixNQUFNVSxJQUFJLEdBQUdDLHdEQUFVLENBQUNDLDBFQUFELENBQXZCO0FBRm9CLE1BR1pDLFFBSFksR0FHeUJILElBSHpCLENBR1pHLFFBSFk7QUFBQSxNQUdGWCxRQUhFLEdBR3lCUSxJQUh6QixDQUdGUixRQUhFO0FBQUEsTUFHUVksWUFIUixHQUd5QkosSUFIekIsQ0FHUUksWUFIUjtBQUtwQixTQUNFLG1FQUNFO0FBQUssU0FBSyxFQUFFO0FBQUV0QixhQUFPLEVBQUU7QUFBWDtBQUFaLEtBQ0dxQixRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSxXQUNaLE1BQUMsR0FBRDtBQUNFLFNBQUcsRUFBRUEsS0FEUDtBQUVFLFdBQUssRUFBRUQsT0FBTyxDQUFDRSxRQUZqQjtBQUdFLFFBQUUsRUFBRUYsT0FBTyxDQUFDZixFQUhkO0FBSUUsZ0JBQVUsRUFBRWEsWUFKZDtBQUtFLGNBQVEsRUFBRVo7QUFMWixNQURZO0FBQUEsR0FBYixDQURILENBREYsRUFZRSxnQ0FBZUEsUUFBZixDQVpGLENBREY7QUFnQkQsQ0FyQkQ7O0lBQU1PLEk7O01BQUFBLEk7QUF1QlNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UYWJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgV2ViTGlzdHNDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL3dlYkxpc3RzLmNvbnRleHRcIlxuaW1wb3J0IHsgQm9keTEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UZXh0c1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgdGFiX3Jvb3Q6IHtcbiAgICBwYWRkaW5nOiBcIjE2cHhcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBcIiYgZGl2XCI6IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDpcIjJweFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOlwiNTAlXCIsXG4gICAgICBiYWNrZ3JvdW5kOlwiYmxhY2tcIlxuICAgIH0sXG4gICAgLy8gYm9yZGVyQm90dG9tOiBwcm9wcyA9PiBwcm9wcy5pZCA9PT0gcHJvcHMuYWN0aXZlSWQgJiYgXCIycHggc29saWQgYmxhY2tcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICB9LFxuICB9LFxuICBhY3RpdmVGb250OiB7XG4gICAgZm9udFdlaWdodDogcHJvcHMgPT4gcHJvcHMuaWQgPT09IHByb3BzLmFjdGl2ZUlkICYmIDkwMCxcbiAgfVxufSk7XG5cbmNvbnN0IFRhYiA9IHByb3BzID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcyk7XG5cbiAgLy9zZXQgQWN0aXZlSWRcbiAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSAoY3VycmVudElkKSA9PiB7XG4gICAgcHJvcHMub25BY3RpdmVJZChjdXJyZW50SWQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJfcm9vdH0gb25DbGljaz17KCkgPT4gb25DbGlja0hhbmRsZXIocHJvcHMuaWQpfT5cbiAgICAgIDxCb2R5MSBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aXZlRm9udH0+e3Byb3BzLmxhYmVsfSArIHtwcm9wcy5pZH08L0JvZHkxPlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBUYWJzID0gcHJvcHMgPT4ge1xuXG4gIGNvbnN0IHRhYnMgPSB1c2VDb250ZXh0KFdlYkxpc3RzQ29udGV4dCk7XG4gIGNvbnN0IHsgd2ViTGlzdHMsIGFjdGl2ZUlkLCBmaW5kQWN0aXZlSWQgfSA9IHRhYnM7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAge3dlYkxpc3RzLm1hcCgod2ViTGlzdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8VGFiXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgbGFiZWw9e3dlYkxpc3QubGlzdE5hbWV9XG4gICAgICAgICAgICBpZD17d2ViTGlzdC5pZH1cbiAgICAgICAgICAgIG9uQWN0aXZlSWQ9e2ZpbmRBY3RpdmVJZH1cbiAgICAgICAgICAgIGFjdGl2ZUlkPXthY3RpdmVJZH1cbiAgICAgICAgICAvPikpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxwPkFjdGl2ZSBJZDoge2FjdGl2ZUlkfTwvcD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Tabs.js\n");

/***/ })

})