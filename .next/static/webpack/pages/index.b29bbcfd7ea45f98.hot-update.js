"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/ApiRoutes.js":
/*!********************************!*\
  !*** ./src/utils/ApiRoutes.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_IMAGE_MESSAGE\": function() { return /* binding */ ADD_IMAGE_MESSAGE; },\n/* harmony export */   \"ADD_MESSAGE_ROUTE\": function() { return /* binding */ ADD_MESSAGE_ROUTE; },\n/* harmony export */   \"CHECKUSER\": function() { return /* binding */ CHECKUSER; },\n/* harmony export */   \"GET_ALL_CONTACTS\": function() { return /* binding */ GET_ALL_CONTACTS; },\n/* harmony export */   \"GET_ALL_MESSAGES\": function() { return /* binding */ GET_ALL_MESSAGES; },\n/* harmony export */   \"GET_INITIAL_CONTACTS\": function() { return /* binding */ GET_INITIAL_CONTACTS; },\n/* harmony export */   \"HOST\": function() { return /* binding */ HOST; },\n/* harmony export */   \"ONBOARD_USER_ROUTE\": function() { return /* binding */ ONBOARD_USER_ROUTE; }\n/* harmony export */ });\nconst HOST = \"http://localhost:3005\";\n// export const HOST = 'https://realtimechatbackend-production-d850.up.railway.app';\nconst AUTHROUTE = \"\".concat(HOST, \"/api/auth\");\nconst MESSAGES_ROUTE = \"\".concat(HOST, \"/api/messages\");\nconst CHECKUSER = \"\".concat(AUTHROUTE, \"/check-user\");\nconst ONBOARD_USER_ROUTE = \"\".concat(AUTHROUTE, \"/onboard-user\");\nconst GET_ALL_CONTACTS = \"\".concat(AUTHROUTE, \"/get-contacts\");\nconst ADD_MESSAGE_ROUTE = \"\".concat(MESSAGES_ROUTE, \"/add-message\");\nconst GET_ALL_MESSAGES = \"\".concat(MESSAGES_ROUTE, \"/get-message\");\nconst ADD_IMAGE_MESSAGE = \"\".concat(MESSAGES_ROUTE, \"/add-image-message\");\nconst GET_INITIAL_CONTACTS = \"\".concat(MESSAGES_ROUTE, \"/get-initial-contacts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvQXBpUm91dGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsT0FBTyx3QkFBd0I7QUFDNUMsb0ZBQW9GO0FBQ3BGLE1BQU1DLFlBQVksR0FBUSxPQUFMRCxNQUFLO0FBQzFCLE1BQU1FLGlCQUFpQixHQUFRLE9BQUxGLE1BQUs7QUFHeEIsTUFBTUcsWUFBWSxHQUFhLE9BQVZGLFdBQVUsZUFBYTtBQUM1QyxNQUFNRyxxQkFBcUIsR0FBYSxPQUFWSCxXQUFVLGlCQUFlO0FBQ3ZELE1BQU1JLG1CQUFtQixHQUFhLE9BQVZKLFdBQVUsaUJBQWU7QUFHckQsTUFBTUssb0JBQW9CLEdBQWtCLE9BQWZKLGdCQUFlLGdCQUFjO0FBQzFELE1BQU1LLG1CQUFtQixHQUFrQixPQUFmTCxnQkFBZSxnQkFBYztBQUN6RCxNQUFNTSxvQkFBb0IsR0FBa0IsT0FBZk4sZ0JBQWUsc0JBQW9CO0FBQ2hFLE1BQU1PLHVCQUF1QixHQUFrQixPQUFmUCxnQkFBZSx5QkFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL0FwaVJvdXRlcy5qcz82ODk0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBIT1NUID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNSc7XHJcbi8vIGV4cG9ydCBjb25zdCBIT1NUID0gJ2h0dHBzOi8vcmVhbHRpbWVjaGF0YmFja2VuZC1wcm9kdWN0aW9uLWQ4NTAudXAucmFpbHdheS5hcHAnO1xyXG5jb25zdCBBVVRIUk9VVEUgPSBgJHtIT1NUfS9hcGkvYXV0aGA7XHJcbmNvbnN0IE1FU1NBR0VTX1JPVVRFID0gYCR7SE9TVH0vYXBpL21lc3NhZ2VzYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ0hFQ0tVU0VSID0gYCR7QVVUSFJPVVRFfS9jaGVjay11c2VyYDtcclxuZXhwb3J0IGNvbnN0IE9OQk9BUkRfVVNFUl9ST1VURSA9IGAke0FVVEhST1VURX0vb25ib2FyZC11c2VyYDtcclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfQ09OVEFDVFMgPSBgJHtBVVRIUk9VVEV9L2dldC1jb250YWN0c2A7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9NRVNTQUdFX1JPVVRFID0gYCR7TUVTU0FHRVNfUk9VVEV9L2FkZC1tZXNzYWdlYDtcclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfTUVTU0FHRVMgPSBgJHtNRVNTQUdFU19ST1VURX0vZ2V0LW1lc3NhZ2VgO1xyXG5leHBvcnQgY29uc3QgQUREX0lNQUdFX01FU1NBR0UgPSBgJHtNRVNTQUdFU19ST1VURX0vYWRkLWltYWdlLW1lc3NhZ2VgO1xyXG5leHBvcnQgY29uc3QgR0VUX0lOSVRJQUxfQ09OVEFDVFMgPSBgJHtNRVNTQUdFU19ST1VURX0vZ2V0LWluaXRpYWwtY29udGFjdHNgOyJdLCJuYW1lcyI6WyJIT1NUIiwiQVVUSFJPVVRFIiwiTUVTU0FHRVNfUk9VVEUiLCJDSEVDS1VTRVIiLCJPTkJPQVJEX1VTRVJfUk9VVEUiLCJHRVRfQUxMX0NPTlRBQ1RTIiwiQUREX01FU1NBR0VfUk9VVEUiLCJHRVRfQUxMX01FU1NBR0VTIiwiQUREX0lNQUdFX01FU1NBR0UiLCJHRVRfSU5JVElBTF9DT05UQUNUUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/ApiRoutes.js\n"));

/***/ })

});