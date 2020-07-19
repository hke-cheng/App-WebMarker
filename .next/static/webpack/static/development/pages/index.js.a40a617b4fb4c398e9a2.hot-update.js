webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tabs.js":
/*!****************************!*\
  !*** ./components/Tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _contexts_webLists_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/webLists.context */ \"./contexts/webLists.context.js\");\n/* harmony import */ var _components_Texts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Texts */ \"./components/Texts.js\");\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  tab_root: {\n    padding: \"16px\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    \"& div\": {\n      width: \"100%\",\n      height: \"2px\",\n      borderRadius: \"50%\",\n      marginTop: \"16px\",\n      background: function background(props) {\n        return props.id === props.activeId && \"black\";\n      }\n    },\n    \"&:hover\": {\n      cursor: \"pointer\"\n    }\n  },\n  activeFont: {\n    fontWeight: function fontWeight(props) {\n      return props.id === props.activeId && 900;\n    }\n  }\n});\n\nvar Tab = function Tab(props) {\n  _s();\n\n  var classes = useStyles(props); //set ActiveId\n\n  var onClickHandler = function onClickHandler(currentId) {\n    props.onActiveId(currentId);\n  };\n\n  return __jsx(\"div\", {\n    className: classes.tab_root,\n    onClick: function onClick() {\n      return onClickHandler(props.id);\n    }\n  }, __jsx(_components_Texts__WEBPACK_IMPORTED_MODULE_3__[\"Body1\"], {\n    className: classes.activeFont\n  }, props.label, \" + \", props.id), __jsx(\"div\", null));\n};\n\n_s(Tab, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Tab;\n\nvar Tabs = function Tabs(props) {\n  _s2();\n\n  var tabs = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_webLists_context__WEBPACK_IMPORTED_MODULE_2__[\"WebListsContext\"]);\n  var webLists = tabs.webLists,\n      activeId = tabs.activeId,\n      findActiveId = tabs.findActiveId;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    style: {\n      display: \"flex\"\n    }\n  }, webLists.map(function (webList, index) {\n    return __jsx(Tab, {\n      key: index,\n      label: webList.listName,\n      id: webList.id,\n      onActiveId: findActiveId,\n      activeId: activeId\n    });\n  })), __jsx(\"p\", null, \"Active Id: \", activeId));\n};\n\n_s2(Tabs, \"09jrICI067Ik8iEn+jWc/Y0PUXQ=\");\n\n_c2 = Tabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tabs);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Tab\");\n$RefreshReg$(_c2, \"Tabs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYnMuanM/MTYzMCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGFiX3Jvb3QiLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJwcm9wcyIsImlkIiwiYWN0aXZlSWQiLCJjdXJzb3IiLCJhY3RpdmVGb250IiwiZm9udFdlaWdodCIsIlRhYiIsImNsYXNzZXMiLCJvbkNsaWNrSGFuZGxlciIsImN1cnJlbnRJZCIsIm9uQWN0aXZlSWQiLCJsYWJlbCIsIlRhYnMiLCJ0YWJzIiwidXNlQ29udGV4dCIsIldlYkxpc3RzQ29udGV4dCIsIndlYkxpc3RzIiwiZmluZEFjdGl2ZUlkIiwibWFwIiwid2ViTGlzdCIsImluZGV4IiwibGlzdE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsVUFBUSxFQUFFO0FBQ1JDLFdBQU8sRUFBRSxNQUREO0FBRVJDLFdBQU8sRUFBRSxNQUZEO0FBR1JDLGlCQUFhLEVBQUMsUUFITjtBQUtSLGFBQVM7QUFDUEMsV0FBSyxFQUFFLE1BREE7QUFFUEMsWUFBTSxFQUFDLEtBRkE7QUFHUEMsa0JBQVksRUFBQyxLQUhOO0FBSVBDLGVBQVMsRUFBQyxNQUpIO0FBS1BDLGdCQUFVLEVBQUMsb0JBQUFDLEtBQUs7QUFBQSxlQUFJQSxLQUFLLENBQUNDLEVBQU4sS0FBYUQsS0FBSyxDQUFDRSxRQUFuQixJQUErQixPQUFuQztBQUFBO0FBTFQsS0FMRDtBQWFSLGVBQVc7QUFDVEMsWUFBTSxFQUFFO0FBREM7QUFiSCxHQURpQjtBQWtCM0JDLFlBQVUsRUFBRTtBQUNWQyxjQUFVLEVBQUUsb0JBQUFMLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNDLEVBQU4sS0FBYUQsS0FBSyxDQUFDRSxRQUFuQixJQUErQixHQUFuQztBQUFBO0FBRFA7QUFsQmUsQ0FBRCxDQUE1Qjs7QUF1QkEsSUFBTUksR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQU4sS0FBSyxFQUFJO0FBQUE7O0FBQ25CLE1BQU1PLE9BQU8sR0FBR2xCLFNBQVMsQ0FBQ1csS0FBRCxDQUF6QixDQURtQixDQUduQjs7QUFDQSxNQUFNUSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFNBQUQsRUFBZTtBQUNwQ1QsU0FBSyxDQUFDVSxVQUFOLENBQWlCRCxTQUFqQjtBQUNELEdBRkQ7O0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBRUYsT0FBTyxDQUFDaEIsUUFBeEI7QUFBa0MsV0FBTyxFQUFFO0FBQUEsYUFBTWlCLGNBQWMsQ0FBQ1IsS0FBSyxDQUFDQyxFQUFQLENBQXBCO0FBQUE7QUFBM0MsS0FDRSxNQUFDLHVEQUFEO0FBQU8sYUFBUyxFQUFFTSxPQUFPLENBQUNIO0FBQTFCLEtBQXVDSixLQUFLLENBQUNXLEtBQTdDLFNBQXVEWCxLQUFLLENBQUNDLEVBQTdELENBREYsRUFFRSxrQkFGRixDQURGO0FBTUQsQ0FkRDs7R0FBTUssRztVQUNZakIsUzs7O0tBRFppQixHOztBQWdCTixJQUFNTSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFBWixLQUFLLEVBQUk7QUFBQTs7QUFFcEIsTUFBTWEsSUFBSSxHQUFHQyx3REFBVSxDQUFDQywwRUFBRCxDQUF2QjtBQUZvQixNQUdaQyxRQUhZLEdBR3lCSCxJQUh6QixDQUdaRyxRQUhZO0FBQUEsTUFHRmQsUUFIRSxHQUd5QlcsSUFIekIsQ0FHRlgsUUFIRTtBQUFBLE1BR1FlLFlBSFIsR0FHeUJKLElBSHpCLENBR1FJLFlBSFI7QUFLcEIsU0FDRSxtRUFDRTtBQUFLLFNBQUssRUFBRTtBQUFFeEIsYUFBTyxFQUFFO0FBQVg7QUFBWixLQUNHdUIsUUFBUSxDQUFDRSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsV0FDWixNQUFDLEdBQUQ7QUFDRSxTQUFHLEVBQUVBLEtBRFA7QUFFRSxXQUFLLEVBQUVELE9BQU8sQ0FBQ0UsUUFGakI7QUFHRSxRQUFFLEVBQUVGLE9BQU8sQ0FBQ2xCLEVBSGQ7QUFJRSxnQkFBVSxFQUFFZ0IsWUFKZDtBQUtFLGNBQVEsRUFBRWY7QUFMWixNQURZO0FBQUEsR0FBYixDQURILENBREYsRUFZRSxnQ0FBZUEsUUFBZixDQVpGLENBREY7QUFnQkQsQ0FyQkQ7O0lBQU1VLEk7O01BQUFBLEk7QUF1QlNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UYWJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgV2ViTGlzdHNDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL3dlYkxpc3RzLmNvbnRleHRcIlxuaW1wb3J0IHsgQm9keTEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UZXh0c1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgdGFiX3Jvb3Q6IHtcbiAgICBwYWRkaW5nOiBcIjE2cHhcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXG4gICAgXG4gICAgXCImIGRpdlwiOiB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6XCIycHhcIixcbiAgICAgIGJvcmRlclJhZGl1czpcIjUwJVwiLFxuICAgICAgbWFyZ2luVG9wOlwiMTZweFwiLFxuICAgICAgYmFja2dyb3VuZDpwcm9wcyA9PiBwcm9wcy5pZCA9PT0gcHJvcHMuYWN0aXZlSWQgJiYgXCJibGFja1wiLFxuICAgIH0sXG5cbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICB9LFxuICB9LFxuICBhY3RpdmVGb250OiB7XG4gICAgZm9udFdlaWdodDogcHJvcHMgPT4gcHJvcHMuaWQgPT09IHByb3BzLmFjdGl2ZUlkICYmIDkwMCxcbiAgfVxufSk7XG5cbmNvbnN0IFRhYiA9IHByb3BzID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcyk7XG5cbiAgLy9zZXQgQWN0aXZlSWRcbiAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSAoY3VycmVudElkKSA9PiB7XG4gICAgcHJvcHMub25BY3RpdmVJZChjdXJyZW50SWQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJfcm9vdH0gb25DbGljaz17KCkgPT4gb25DbGlja0hhbmRsZXIocHJvcHMuaWQpfT5cbiAgICAgIDxCb2R5MSBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aXZlRm9udH0+e3Byb3BzLmxhYmVsfSArIHtwcm9wcy5pZH08L0JvZHkxPlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBUYWJzID0gcHJvcHMgPT4ge1xuXG4gIGNvbnN0IHRhYnMgPSB1c2VDb250ZXh0KFdlYkxpc3RzQ29udGV4dCk7XG4gIGNvbnN0IHsgd2ViTGlzdHMsIGFjdGl2ZUlkLCBmaW5kQWN0aXZlSWQgfSA9IHRhYnM7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAge3dlYkxpc3RzLm1hcCgod2ViTGlzdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8VGFiXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgbGFiZWw9e3dlYkxpc3QubGlzdE5hbWV9XG4gICAgICAgICAgICBpZD17d2ViTGlzdC5pZH1cbiAgICAgICAgICAgIG9uQWN0aXZlSWQ9e2ZpbmRBY3RpdmVJZH1cbiAgICAgICAgICAgIGFjdGl2ZUlkPXthY3RpdmVJZH1cbiAgICAgICAgICAvPikpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxwPkFjdGl2ZSBJZDoge2FjdGl2ZUlkfTwvcD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Tabs.js\n");

/***/ })

})