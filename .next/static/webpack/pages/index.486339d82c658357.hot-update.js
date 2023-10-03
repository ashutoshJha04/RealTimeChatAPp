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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _context_StateReducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/StateReducers */ \"./src/context/StateReducers.js\");\n/* harmony import */ var _utils_CalculateTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/CalculateTime */ \"./src/utils/CalculateTime.js\");\n/* harmony import */ var _common_MessageStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/MessageStatus */ \"./src/components/common/MessageStatus.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ChatLIstItem(param) {\n    let { data , isContactPage =false  } = param;\n    _s();\n    const [{ userInfo , currentChatUser  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const handleContactclick = ()=>{\n        if (!isContactPage) {\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.CHANGE_CURRENT_USER,\n                user: {\n                    name: data.name,\n                    about: data.about,\n                    profilePicture: data.profilePicture,\n                    email: data.email,\n                    id: userInfo.id === data.senderId ? data.recieverId : data.senderId\n                }\n            });\n        } else {\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.CHANGE_CURRENT_USER,\n                user: {\n                    ...data\n                }\n            });\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.SET_ALL_CONTACT_PAGE\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex cursor-pointer items-center hover:bg-background-default-hover\",\n        onClick: handleContactclick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" min-w-fit px-5 pt-3 pb-1 rounded-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"lg\",\n                    image: data === null || data === void 0 ? void 0 : data.profilePicture\n                }, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-full flex flex-col justify-center mt-3 pr-2 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white\",\n                                    children: data === null || data === void 0 ? void 0 : data.name\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 9\n                            }, this),\n                            !isContactPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(!(data === null || data === void 0 ? void 0 : data.totalunreadmessages) > 0 ? \"text-secondary\" : \"text-icon-green\", \" text-sm\"),\n                                children: (0,_utils_CalculateTime__WEBPACK_IMPORTED_MODULE_6__.calculateTime)(data.createdAt)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex border-b border-conversation-border pb-2 pt-1 pr-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-secondary line-clamp-1 text-sm\",\n                                children: isContactPage ? (data === null || data === void 0 ? void 0 : data.about) || \"\\xa0\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center gap-1 max-w-[200px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[200px] xl:max-w-[300px]\",\n                                    children: [\n                                        (data === null || data === void 0 ? void 0 : data.senderId) === (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_MessageStatus__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            messageStatus: data === null || data === void 0 ? void 0 : data.messageStatus\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 48\n                                        }, this),\n                                        (data === null || data === void 0 ? void 0 : data.type) === \"text\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"truncated\",\n                                            children: data === null || data === void 0 ? void 0 : data.message\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 38\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 107\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n        lineNumber: 35,\n        columnNumber: 10\n    }, this);\n}\n_s(ChatLIstItem, \"m1Gnjqhyl4AjP9swSTYzY8YiZX8=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n_c = ChatLIstItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatLIstItem);\nvar _c;\n$RefreshReg$(_c, \"ChatLIstItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TElzdEl0ZW0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDWTtBQUNrQjtBQUNMO0FBQ0Q7QUFDSTtBQUNGO0FBQ3BELFNBQVNPLGFBQWEsS0FBNEIsRUFBRTtRQUE5QixFQUFDQyxLQUFJLEVBQUNDLGVBQWdCLEtBQUssR0FBQyxHQUE1Qjs7SUFDcEIsTUFBTSxDQUFDLEVBQUNDLFNBQVEsRUFBQ0MsZ0JBQWUsRUFBQyxFQUFDQyxTQUFTLEdBQUdWLHVFQUFnQkE7SUFFOUQsTUFBTVcscUJBQW9CLElBQUk7UUFDNUIsSUFBRyxDQUFDSixlQUFjO1lBQ2hCRyxTQUFTO2dCQUNQRSxNQUFLWCxnRkFBZ0M7Z0JBQ3JDYSxNQUFLO29CQUNIQyxNQUFLVCxLQUFLUyxJQUFJO29CQUNkQyxPQUFNVixLQUFLVSxLQUFLO29CQUNoQkMsZ0JBQWVYLEtBQUtXLGNBQWM7b0JBQ2xDQyxPQUFNWixLQUFLWSxLQUFLO29CQUNoQkMsSUFBR1gsU0FBU1csRUFBRSxLQUFLYixLQUFLYyxRQUFRLEdBQUdkLEtBQUtlLFVBQVUsR0FBR2YsS0FBS2MsUUFBUTtnQkFDcEU7WUFDRjtRQUVGLE9BQUs7WUFFSFYsU0FBUztnQkFBQ0UsTUFBS1gsZ0ZBQWdDO2dCQUFDYSxNQUFLO29CQUFDLEdBQUdSLElBQUk7Z0JBQUE7WUFBQztZQUM5REksU0FBUztnQkFBQ0UsTUFBS1gsaUZBQWlDO1lBQUE7UUFDbEQsQ0FBQztJQU1IO0lBQ0EscUJBQU8sOERBQUNzQjtRQUFJQyxXQUFZO1FBQXFFQyxTQUFTZDs7MEJBQ3BHLDhEQUFDWTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3pCLHNEQUFNQTtvQkFBQ2EsTUFBSztvQkFBS2MsT0FBT3BCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVcsY0FBYzs7Ozs7Ozs7Ozs7MEJBRS9DLDhEQUFDTTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7MENBQ0MsNEVBQUNJO29DQUFLSCxXQUFVOzhDQUFjbEIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNUyxJQUFJOzs7Ozs7Ozs7Ozs0QkFHeEMsQ0FBQ1IsK0JBQ0MsOERBQUNnQjtnQ0FBSUMsV0FBVyxHQUF5RSxPQUF0RSxDQUFDbEIsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNc0IsbUJBQW1CLElBQUcsSUFBSSxtQkFBbUIsaUJBQWlCLEVBQUM7MENBQ3RGekIsbUVBQWFBLENBQUNHLEtBQUt1QixTQUFTOzs7Ozs7Ozs7Ozs7a0NBS3JDLDhEQUFDTjt3QkFBSUMsV0FBVTtrQ0FDZiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBRWIsNEVBQUNHO2dDQUFLSCxXQUFVOzBDQUF1Q2pCLGdCQUFnQkQsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVSxLQUFLLEtBQUksdUJBQVksOERBQUNPO29DQUFJQyxXQUFVOzt3Q0FFN0dsQixDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1jLFFBQVEsTUFBS1osQ0FBQUEscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVVyxFQUFFLG1CQUFJLDhEQUFDZiw2REFBYUE7NENBQUMwQixlQUFleEIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNd0IsYUFBYTs7Ozs7O3dDQUdwRnhCLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTU0sSUFBSSxNQUFLLHdCQUFVLDhEQUFDZTs0Q0FBS0gsV0FBVTtzREFBYWxCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTXlCLE9BQU87Ozs7Ozs7Ozs7O3dDQUU5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQjtHQTNEUzFCOztRQUN1Q0wsbUVBQWdCQTs7O0tBRHZESztBQTZEVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TElzdEl0ZW0uanN4P2NmOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9jb21tb24vQXZhdGFyXCI7XHJcbmltcG9ydCB7dXNlU3RhdGVQcm92aWRlcn0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcclxuaW1wb3J0IHsgcmVkdWNlcmNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVSZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVUaW1lIH0gZnJvbSBcIkAvdXRpbHMvQ2FsY3VsYXRlVGltZVwiO1xyXG5pbXBvcnQgTWVzc2FnZVN0YXR1cyBmcm9tIFwiLi4vY29tbW9uL01lc3NhZ2VTdGF0dXNcIjtcclxuZnVuY3Rpb24gQ2hhdExJc3RJdGVtKHtkYXRhLGlzQ29udGFjdFBhZ2UgPSBmYWxzZX0pIHtcclxuICBjb25zdCBbe3VzZXJJbmZvLGN1cnJlbnRDaGF0VXNlcn0sZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUNvbnRhY3RjbGljayA9KCk9PntcclxuICAgIGlmKCFpc0NvbnRhY3RQYWdlKXtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6cmVkdWNlcmNhc2VzLkNIQU5HRV9DVVJSRU5UX1VTRVIsXHJcbiAgICAgICAgdXNlcjp7XHJcbiAgICAgICAgICBuYW1lOmRhdGEubmFtZSxcclxuICAgICAgICAgIGFib3V0OmRhdGEuYWJvdXQsXHJcbiAgICAgICAgICBwcm9maWxlUGljdHVyZTpkYXRhLnByb2ZpbGVQaWN0dXJlLFxyXG4gICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcclxuICAgICAgICAgIGlkOnVzZXJJbmZvLmlkID09PSBkYXRhLnNlbmRlcklkID8gZGF0YS5yZWNpZXZlcklkIDogZGF0YS5zZW5kZXJJZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgXHJcbiAgICAgIGRpc3BhdGNoKHt0eXBlOnJlZHVjZXJjYXNlcy5DSEFOR0VfQ1VSUkVOVF9VU0VSLHVzZXI6ey4uLmRhdGF9fSk7XHJcbiAgICAgIGRpc3BhdGNoKHt0eXBlOnJlZHVjZXJjYXNlcy5TRVRfQUxMX0NPTlRBQ1RfUEFHRX0pXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIFxyXG4gIH07XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgaG92ZXI6YmctYmFja2dyb3VuZC1kZWZhdWx0LWhvdmVyYH0gb25DbGljaz17aGFuZGxlQ29udGFjdGNsaWNrfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1pbi13LWZpdCBweC01IHB0LTMgcGItMSByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgPEF2YXRhciB0eXBlPVwibGdcIiBpbWFnZT17ZGF0YT8ucHJvZmlsZVBpY3R1cmV9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG10LTMgcHItMiB3LWZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e2RhdGE/Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICFpc0NvbnRhY3RQYWdlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AkeyFkYXRhPy50b3RhbHVucmVhZG1lc3NhZ2VzID4gMCA/IFwidGV4dC1zZWNvbmRhcnlcIiA6IFwidGV4dC1pY29uLWdyZWVuXCJ9IHRleHQtc21gfT5cclxuICAgICAgICAgICAgICB7Y2FsY3VsYXRlVGltZShkYXRhLmNyZWF0ZWRBdCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItYiBib3JkZXItY29udmVyc2F0aW9uLWJvcmRlciBwYi0yIHB0LTEgcHItMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IGxpbmUtY2xhbXAtMSB0ZXh0LXNtXCI+e2lzQ29udGFjdFBhZ2UgPyBkYXRhPy5hYm91dCB8fCBcIlxcdTAwQTBcIiA6ICg8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIG1heC13LVsyMDBweF0gc206bWF4LXctWzIwMHB4XSBtZDptYXgtdy1bMzAwcHhdIGxnOm1heC13LVsyMDBweF0geGw6bWF4LXctWzMwMHB4XVwiPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhPy5zZW5kZXJJZCA9PT0gdXNlckluZm8/LmlkICYmIDxNZXNzYWdlU3RhdHVzIG1lc3NhZ2VTdGF0dXM9e2RhdGE/Lm1lc3NhZ2VTdGF0dXN9Lz5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YT8udHlwZSA9PT0gXCJ0ZXh0XCIgJiYgPHNwYW4gY2xhc3NOYW1lPVwidHJ1bmNhdGVkXCI+e2RhdGE/Lm1lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+KX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdExJc3RJdGVtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBdmF0YXIiLCJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlcmNhc2VzIiwicmVkdWNlciIsImNhbGN1bGF0ZVRpbWUiLCJNZXNzYWdlU3RhdHVzIiwiQ2hhdExJc3RJdGVtIiwiZGF0YSIsImlzQ29udGFjdFBhZ2UiLCJ1c2VySW5mbyIsImN1cnJlbnRDaGF0VXNlciIsImRpc3BhdGNoIiwiaGFuZGxlQ29udGFjdGNsaWNrIiwidHlwZSIsIkNIQU5HRV9DVVJSRU5UX1VTRVIiLCJ1c2VyIiwibmFtZSIsImFib3V0IiwicHJvZmlsZVBpY3R1cmUiLCJlbWFpbCIsImlkIiwic2VuZGVySWQiLCJyZWNpZXZlcklkIiwiU0VUX0FMTF9DT05UQUNUX1BBR0UiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaW1hZ2UiLCJzcGFuIiwidG90YWx1bnJlYWRtZXNzYWdlcyIsImNyZWF0ZWRBdCIsIm1lc3NhZ2VTdGF0dXMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chatlist/ChatLIstItem.jsx\n"));

/***/ })

});