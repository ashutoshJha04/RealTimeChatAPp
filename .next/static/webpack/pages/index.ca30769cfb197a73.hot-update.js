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

/***/ "./src/components/Chatlist/ChatLIstItem.jsx":
/*!**************************************************!*\
  !*** ./src/components/Chatlist/ChatLIstItem.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _context_StateReducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/StateReducers */ \"./src/context/StateReducers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ChatLIstItem(param) {\n    let { data , isContactPage =false  } = param;\n    _s();\n    const [{ userInfo , currentChatUser  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const handleContactclick = ()=>{\n        if (isContactPage) {} else {}\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.CHANGE_CURRENT_USER,\n            user: {\n                data\n            }\n        });\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.SET_ALL_CONTACT_PAGE\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex cursor-pointer items-center hover:bg-background-default-hover\",\n        onClick: handleContactclick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" min-w-fit px-5 pt-3 pb-1 rounded-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"lg\",\n                    image: data === null || data === void 0 ? void 0 : data.profilePicture\n                }, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-full flex flex-col justify-center mt-3 pr-2 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white\",\n                                children: data === null || data === void 0 ? void 0 : data.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex border-b border-conversation-border pb-2 pt-1 pr-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-secondary line-clamp-1 text-sm\",\n                                children: (data === null || data === void 0 ? void 0 : data.about) || \"\\xa0\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, this);\n}\n_s(ChatLIstItem, \"m1Gnjqhyl4AjP9swSTYzY8YiZX8=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n_c = ChatLIstItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatLIstItem);\nvar _c;\n$RefreshReg$(_c, \"ChatLIstItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TElzdEl0ZW0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDa0I7QUFDTDtBQUNEO0FBQ2xELFNBQVNLLGFBQWEsS0FBNEIsRUFBRTtRQUE5QixFQUFDQyxLQUFJLEVBQUNDLGVBQWdCLEtBQUssR0FBQyxHQUE1Qjs7SUFDcEIsTUFBTSxDQUFDLEVBQUNDLFNBQVEsRUFBQ0MsZ0JBQWUsRUFBQyxFQUFDQyxTQUFTLEdBQUdSLHVFQUFnQkE7SUFFOUQsTUFBTVMscUJBQW9CLElBQUk7UUFDNUIsSUFBR0osZUFBYyxDQUdqQixPQUFLLENBQ0wsQ0FBQztRQUNERyxTQUFTO1lBQUNFLE1BQUtULGdGQUFnQztZQUFDVyxNQUFLO2dCQUFDUjtZQUFJO1FBQUM7UUFDM0RJLFNBQVM7WUFBQ0UsTUFBS1QsaUZBQWlDO1FBQUE7SUFJbEQ7SUFDQSxxQkFBTyw4REFBQ2E7UUFBSUMsV0FBWTtRQUFxRUMsU0FBU1A7OzBCQUNwRyw4REFBQ0s7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNoQixzREFBTUE7b0JBQUNXLE1BQUs7b0JBQUtPLE9BQU9iLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWMsY0FBYzs7Ozs7Ozs7Ozs7MEJBRS9DLDhEQUFDSjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDtzQ0FDQyw0RUFBQ0s7Z0NBQUtKLFdBQVU7MENBQWNYLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWdCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzVDLDhEQUFDTjt3QkFBSUMsV0FBVTtrQ0FDZiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNJO2dDQUFLSixXQUFVOzBDQUF1Q1gsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNaUIsS0FBSyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlFO0dBaENTbEI7O1FBQ3VDSCxtRUFBZ0JBOzs7S0FEdkRHO0FBa0NULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXRsaXN0L0NoYXRMSXN0SXRlbS5qc3g/Y2Y5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4uL2NvbW1vbi9BdmF0YXJcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZVByb3ZpZGVyfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xyXG5pbXBvcnQgeyByZWR1Y2VyY2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZVJlZHVjZXJzXCI7XHJcbmZ1bmN0aW9uIENoYXRMSXN0SXRlbSh7ZGF0YSxpc0NvbnRhY3RQYWdlID0gZmFsc2V9KSB7XHJcbiAgY29uc3QgW3t1c2VySW5mbyxjdXJyZW50Q2hhdFVzZXJ9LGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVDb250YWN0Y2xpY2sgPSgpPT57XHJcbiAgICBpZihpc0NvbnRhY3RQYWdlKXtcclxuICAgICAgXHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7dHlwZTpyZWR1Y2VyY2FzZXMuQ0hBTkdFX0NVUlJFTlRfVVNFUix1c2VyOntkYXRhfX0pO1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6cmVkdWNlcmNhc2VzLlNFVF9BTExfQ09OVEFDVF9QQUdFfSlcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgfTtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BmbGV4IGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBob3ZlcjpiZy1iYWNrZ3JvdW5kLWRlZmF1bHQtaG92ZXJgfSBvbkNsaWNrPXtoYW5kbGVDb250YWN0Y2xpY2t9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgbWluLXctZml0IHB4LTUgcHQtMyBwYi0xIHJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICA8QXZhdGFyIHR5cGU9XCJsZ1wiIGltYWdlPXtkYXRhPy5wcm9maWxlUGljdHVyZX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbXQtMyBwci0yIHctZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57ZGF0YT8ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLWIgYm9yZGVyLWNvbnZlcnNhdGlvbi1ib3JkZXIgcGItMiBwdC0xIHByLTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGxcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSBsaW5lLWNsYW1wLTEgdGV4dC1zbVwiPntkYXRhPy5hYm91dCB8fCBcIlxcdTAwQTBcIn08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdExJc3RJdGVtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBdmF0YXIiLCJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlcmNhc2VzIiwicmVkdWNlciIsIkNoYXRMSXN0SXRlbSIsImRhdGEiLCJpc0NvbnRhY3RQYWdlIiwidXNlckluZm8iLCJjdXJyZW50Q2hhdFVzZXIiLCJkaXNwYXRjaCIsImhhbmRsZUNvbnRhY3RjbGljayIsInR5cGUiLCJDSEFOR0VfQ1VSUkVOVF9VU0VSIiwidXNlciIsIlNFVF9BTExfQ09OVEFDVF9QQUdFIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImltYWdlIiwicHJvZmlsZVBpY3R1cmUiLCJzcGFuIiwibmFtZSIsImFib3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chatlist/ChatLIstItem.jsx\n"));

/***/ })

});