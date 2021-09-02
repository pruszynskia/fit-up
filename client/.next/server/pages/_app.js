(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _src_styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/redux/store */ "./src/redux/store/index.ts");

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // store.subscribe(() => console.log(store.getState()));

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _src_redux_store__WEBPACK_IMPORTED_MODULE_3__.default,
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
  workoutDays: []
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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvcmVkdXgvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2ZpdC11cC1hcHAvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL2ZpdC11cC1hcHAvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJBRERfV09SS09VVCIsIkRFTEVURV9XT1JLT1VUIiwiRURJVF9XT1JLT1VUIiwiQUREX1dPUktPVVRfREFZIiwiRURJVF9XT1JLT1VUX0RBWSIsIkRFTEVURV9XT1JLT1VUX0RBWSIsImluaXRpYWxTdGF0ZSIsIndvcmtvdXQiLCJ3b3Jrb3V0RGF5cyIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaWQiLCJ2NCIsInBheWxvYWQiLCJmaWx0ZXIiLCJkYXRhIiwibWFwIiwiZWRpdCIsImNyZWF0ZVN0b3JlIiwiZGV2VG9vbHNFbmhhbmNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtDQUdBOztBQUNBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUFtRDtB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MUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5cclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc3JjL3JlZHV4L3N0b3JlXCI7XHJcblxyXG4vLyBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSkpO1xyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiZXhwb3J0IGNvbnN0IEFERF9XT1JLT1VUID0gJ0FERF9XT1JLT1VUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9XT1JLT1VUID0gJ0RFTEVURV9XT1JLT1VUJztcclxuZXhwb3J0IGNvbnN0IEVESVRfV09SS09VVD0gJ0VESVRfV09SS09VVCc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1dPUktPVVRfREFZID0gXCJBRERfV09SS09VVF9EQVlcIlxyXG5leHBvcnQgY29uc3QgRURJVF9XT1JLT1VUX0RBWSA9IFwiRURJVF9XT1JLT1VUX0RBWVwiXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfV09SS09VVF9EQVkgPSBcIkRFTEVURV9XT1JLT1VUX0RBWVwiIiwiaW1wb3J0IHtcclxuICAgIEFERF9XT1JLT1VULFxyXG4gICAgQUREX1dPUktPVVRfREFZLFxyXG4gICAgREVMRVRFX1dPUktPVVQsXHJcbiAgICBERUxFVEVfV09SS09VVF9EQVksXHJcbiAgICBFRElUX1dPUktPVVQsXHJcbiAgICBFRElUX1dPUktPVVRfREFZXHJcbn0gZnJvbSAnLi4vYWN0aW9uVHlwZXMnO1xyXG5cclxuaW1wb3J0IHt2NH0gZnJvbSAndXVpZCc7XHJcblxyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi8uLi9zcmMvdGVtcC93b3Jrb3V0TGlzdC5qc29uJ1xyXG5pbXBvcnQgV29ya291dERldGFpbHNTdHlsZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Xb3Jrb3V0RGV0YWlscy9Xb3Jrb3V0RGV0YWlscy5zdHlsZXMnO1xyXG5pbXBvcnQge1Jvb3RTdGF0ZSwgV29ya291dERheURldGFpbHN9IGZyb20gJy4uLy4uL2xpYi90eXBlcydcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUm9vdFN0YXRlID0ge1xyXG4gICAgd29ya291dDogW10sXHJcbiAgICB3b3Jrb3V0RGF5czogW10sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvb3RSZWR1Y2VyKHN0YXRlOiBSb290U3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9XT1JLT1VUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHdvcmtvdXQ6IFsuLi5zdGF0ZS53b3Jrb3V0LCB7aWQ6IHY0KCksIC4uLmFjdGlvbi5wYXlsb2FkfV1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBERUxFVEVfV09SS09VVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB3b3Jrb3V0OiBcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS53b3Jrb3V0LmZpbHRlcigoZGF0YTogYW55KSA9PiBkYXRhLmlkICE9PSBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBFRElUX1dPUktPVVQ6IHtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB3b3Jrb3V0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLndvcmtvdXQubWFwKChlZGl0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVkaXQuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX1dPUktPVVRfREFZOntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgd29ya291dERheXM6IFsuLi5zdGF0ZS53b3Jrb3V0RGF5cywge2lkOnY0KCksIC4uLmFjdGlvbi5wYXlsb2FkfV1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBERUxFVEVfV09SS09VVF9EQVk6e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB3b3Jrb3V0RGF5czogXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUud29ya291dERheXMuZmlsdGVyKChkYXRhOiBhbnkpID0+IGRhdGEuaWQgIT09IGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBFRElUX1dPUktPVVRfREFZOntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgd29ya291dERheXM6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUud29ya291dERheXMubWFwKCh3b3Jrb3V0OiBXb3Jrb3V0RGF5RGV0YWlscykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod29ya291dC5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3b3Jrb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCB7IGRldlRvb2xzRW5oYW5jZXIgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGRldlRvb2xzRW5oYW5jZXIoe30pKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9