(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store/index.ts");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // store.subscribe(() => console.log(store.getState()));

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_2__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/redux/actionTypes/index.ts":
/*!****************************************!*\
  !*** ./src/redux/actionTypes/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_WORKOUT": function() { return /* binding */ ADD_WORKOUT; },
/* harmony export */   "DELETE_WORKOUT": function() { return /* binding */ DELETE_WORKOUT; },
/* harmony export */   "EDIT_WORKOUT": function() { return /* binding */ EDIT_WORKOUT; },
/* harmony export */   "ADD_WORKOUT_DAY": function() { return /* binding */ ADD_WORKOUT_DAY; },
/* harmony export */   "EDIT_WORKOUT_DAY": function() { return /* binding */ EDIT_WORKOUT_DAY; },
/* harmony export */   "DELETE_WORKOUT_DAY": function() { return /* binding */ DELETE_WORKOUT_DAY; }
/* harmony export */ });
const ADD_WORKOUT = 'ADD_WORKOUT';
const DELETE_WORKOUT = 'DELETE_WORKOUT';
const EDIT_WORKOUT = 'EDIT_WORKOUT';
const ADD_WORKOUT_DAY = "ADD_WORKOUT_DAY";
const EDIT_WORKOUT_DAY = "EDIT_WORKOUT_DAY";
const DELETE_WORKOUT_DAY = "DELETE_WORKOUT_DAY";

/***/ }),

/***/ "./src/redux/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootReducer; }
/* harmony export */ });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes/index.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  workout: [],
  workoutDays: [],
  test: []
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.ADD_WORKOUT:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          workout: [...state.workout, _objectSpread({
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)()
          }, action.payload)]
        });
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.DELETE_WORKOUT:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          workout: state.workout.filter(data => data.id !== action.payload)
        });
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.EDIT_WORKOUT:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          workout: state.workout.map(edit => {
            if (edit.id === action.payload.id) {
              return action.payload;
            } else {
              return edit;
            }
          })
        });
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.ADD_WORKOUT_DAY:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          workoutDays: [...state.workoutDays, _objectSpread({
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)()
          }, action.payload)]
        });
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.DELETE_WORKOUT_DAY:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          workoutDays: state.workoutDays.filter(data => data.id !== action.payload)
        });
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.EDIT_WORKOUT_DAY:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          workoutDays: state.workoutDays.map(workout => {
            if (workout.id === action.payload.id) {
              return action.payload;
            } else {
              return workout;
            }
          })
        });
      }

    case "TEST_ACTION_GET_DATA":
      return _objectSpread(_objectSpread({}, state), {}, {
        test: action.payload
      });

    case "TEST_ACTION_ADD_DATA":
      return _objectSpread(_objectSpread({}, state), {}, {
        test: [...state.test, action.payload]
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/store/index.ts":
/*!**********************************!*\
  !*** ./src/redux/store/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./src/redux/reducers/index.ts");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__.default, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.devToolsEnhancer)({})));

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL3JlZHV4L3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovL2ZpdC11cC1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2ZpdC11cC1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiQUREX1dPUktPVVQiLCJERUxFVEVfV09SS09VVCIsIkVESVRfV09SS09VVCIsIkFERF9XT1JLT1VUX0RBWSIsIkVESVRfV09SS09VVF9EQVkiLCJERUxFVEVfV09SS09VVF9EQVkiLCJpbml0aWFsU3RhdGUiLCJ3b3Jrb3V0Iiwid29ya291dERheXMiLCJ0ZXN0Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpZCIsInY0IiwicGF5bG9hZCIsImZpbHRlciIsImRhdGEiLCJtYXAiLCJlZGl0IiwiY3JlYXRlU3RvcmUiLCJkZXZUb29sc0VuaGFuY2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0NBR0E7O0FBQ0EsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixD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LEtBRFA7QUFFSUYsWUFBSSxFQUFFLENBQUMsR0FBR0UsS0FBSyxDQUFDRixJQUFWLEVBQWdCRyxNQUFNLENBQUNJLE9BQXZCO0FBRlY7O0FBS0o7QUFDSSxhQUFPTCxLQUFQO0FBcEVSO0FBc0VILEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZEO0FBQ0E7QUFDQTtBQUVBLCtEQUFlVSxrREFBVyxDQUFDWCw4Q0FBRCxFQUFjWSwwRUFBZ0IsQ0FBQyxFQUFELENBQTlCLENBQTFCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcblxyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuXHJcbi8vIHN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKSk7XHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iLCJleHBvcnQgY29uc3QgQUREX1dPUktPVVQgPSAnQUREX1dPUktPVVQnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1dPUktPVVQgPSAnREVMRVRFX1dPUktPVVQnO1xyXG5leHBvcnQgY29uc3QgRURJVF9XT1JLT1VUPSAnRURJVF9XT1JLT1VUJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfV09SS09VVF9EQVkgPSBcIkFERF9XT1JLT1VUX0RBWVwiXHJcbmV4cG9ydCBjb25zdCBFRElUX1dPUktPVVRfREFZID0gXCJFRElUX1dPUktPVVRfREFZXCJcclxuZXhwb3J0IGNvbnN0IERFTEVURV9XT1JLT1VUX0RBWSA9IFwiREVMRVRFX1dPUktPVVRfREFZXCIiLCJpbXBvcnQge1xyXG4gICAgQUREX1dPUktPVVQsXHJcbiAgICBBRERfV09SS09VVF9EQVksXHJcbiAgICBERUxFVEVfV09SS09VVCxcclxuICAgIERFTEVURV9XT1JLT1VUX0RBWSxcclxuICAgIEVESVRfV09SS09VVCxcclxuICAgIEVESVRfV09SS09VVF9EQVlcclxufSBmcm9tICcuLi9hY3Rpb25UeXBlcyc7XHJcblxyXG5pbXBvcnQge3Y0fSBmcm9tICd1dWlkJztcclxuXHJcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uLy4uL3NyYy90ZW1wL3dvcmtvdXRMaXN0Lmpzb24nXHJcbmltcG9ydCBXb3Jrb3V0RGV0YWlsc1N0eWxlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dvcmtvdXREZXRhaWxzL1dvcmtvdXREZXRhaWxzLnN0eWxlcyc7XHJcbmltcG9ydCB7Um9vdFN0YXRlLCBXb3Jrb3V0RGF5RGV0YWlsc30gZnJvbSAnLi4vLi4vbGliL3R5cGVzJ1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBSb290U3RhdGUgPSB7XHJcbiAgICB3b3Jrb3V0OiBbXSxcclxuICAgIHdvcmtvdXREYXlzOiBbXSxcclxuICAgIHRlc3Q6IFtdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvb3RSZWR1Y2VyKHN0YXRlOiBSb290U3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9XT1JLT1VUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHdvcmtvdXQ6IFsuLi5zdGF0ZS53b3Jrb3V0LCB7aWQ6IHY0KCksIC4uLmFjdGlvbi5wYXlsb2FkfV1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBERUxFVEVfV09SS09VVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB3b3Jrb3V0OiBcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS53b3Jrb3V0LmZpbHRlcigoZGF0YTogYW55KSA9PiBkYXRhLmlkICE9PSBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBFRElUX1dPUktPVVQ6IHtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB3b3Jrb3V0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLndvcmtvdXQubWFwKChlZGl0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVkaXQuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX1dPUktPVVRfREFZOntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgd29ya291dERheXM6IFsuLi5zdGF0ZS53b3Jrb3V0RGF5cywge2lkOnY0KCksIC4uLmFjdGlvbi5wYXlsb2FkfV1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBERUxFVEVfV09SS09VVF9EQVk6e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB3b3Jrb3V0RGF5czogXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUud29ya291dERheXMuZmlsdGVyKChkYXRhOiBhbnkpID0+IGRhdGEuaWQgIT09IGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBFRElUX1dPUktPVVRfREFZOntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgd29ya291dERheXM6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUud29ya291dERheXMubWFwKCh3b3Jrb3V0OiBXb3Jrb3V0RGF5RGV0YWlscykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod29ya291dC5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3b3Jrb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgXCJURVNUX0FDVElPTl9HRVRfREFUQVwiOiBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdGVzdDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIFwiVEVTVF9BQ1RJT05fQUREX0RBVEFcIjogXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRlc3Q6IFsuLi5zdGF0ZS50ZXN0LCBhY3Rpb24ucGF5bG9hZF1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHsgZGV2VG9vbHNFbmhhbmNlciB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgZGV2VG9vbHNFbmhhbmNlcih7fSkpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=