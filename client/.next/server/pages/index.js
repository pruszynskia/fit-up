(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_styles_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/styles/common */ "./src/styles/common.ts");
/* harmony import */ var _src_components_common_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/common/Footer */ "./src/components/common/Footer/index.tsx");
/* harmony import */ var _src_components_common_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/common/Navbar/Navbar */ "./src/components/common/Navbar/Navbar.tsx");

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\pages\\index.tsx";




function Home() {
  const classes = (0,_src_styles_common__WEBPACK_IMPORTED_MODULE_2__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_common_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_common_Footer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Calendar/Calendar.styles.ts":
/*!****************************************************!*\
  !*** ./src/components/Calendar/Calendar.styles.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  container: {
    display: "flex",
    padding: "20px"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  offset: {
    marginLeft: "20px"
  },
  //DatePicker
  rootDatePicker: {
    display: "flex",
    flexDirection: "column",
    "& > nav": {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      color: "#fff",
      fontWeight: "bold",
      maxWidth: "100%",
      backgroundColor: theme.palette.primary.main,
      // margin: "0 10px"
      "& > div": {
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
        "&:hover": {
          cursor: "pointer"
        }
      }
    }
  },
  cRoot: {
    display: "grid",
    height: "auto",
    gridTemplateColumns: "repeat(7, 1fr)",
    gridTemplateRows: "0.5fr repeat(6, 2.5em)",
    gap: "5px",
    // margin: "0 10px 10px 10px"
    marginBottom: "5px",
    "& > nav": {
      display: "flex",
      color: "#424242",
      gridArea: "1 / 1 / 2 / 8",
      "& > div": {
        display: "flex",
        justifyContent: "center",
        padding: "10px 0",
        width: "100%",
        "&>span": {
          display: "flex",
          justifyContent: "center"
        }
      }
    },
    "& > div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "auto" // height: "2em",
      // width: "2em",

    }
  },
  selected: {
    borderRadius: "50%",
    background: theme.palette.secondary.main,
    color: "#fff"
  },
  today: {
    borderRadius: "50%",
    background: theme.palette.primary.main,
    color: "#fff",
    fontWeight: "bold"
  },
  day: {
    // height: "100%",
    width: "2.5em",
    height: "2.5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      cursor: "pointer",
      color: "#fff"
    }
  },
  expand__months: {
    position: "relative",
    // marginTop: "5em",
    "& > div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "absolute",
      background: "#fff",
      top: "0",
      left: "0",
      height: "calc(100vh - 5em - 45px)",
      width: "100%",
      transformOrigin: "0 0",
      overflow: "auto",
      // @include boxShadow(3),
      "& > span": {
        display: "flex",
        justifyContent: "center",
        padding: "5px 0",
        marginTop: "2px",
        width: "100%",
        "&:hover": {
          background: theme.palette.primary.main,
          color: "#fff",
          cursor: "pointer"
        }
      }
    }
  },
  expanded__months: {
    transform: "scaleY(1)",
    transition: "transform 0.2s ease-in-out, color 0.3s ease-in 0.3s"
  },
  collapsed__months: {
    transform: "scaleY(0)",
    color: "transparent",
    transition: "transform 0.2s ease-in-out 0.3s, color 0.3s ease-out"
  },
  expand__years: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
    position: "absolute",
    top: "2.6em",
    left: "0",
    height: "calc(100vh - 5em - 45px)",
    width: "100%",
    transformOrigin: "0 0",
    overflow: "auto",
    // @include boxShadow(3),
    "& > span": {
      display: "flex",
      justifyContent: "center",
      padding: "5px 0",
      marginTop: "2px",
      width: "100%",
      "&:hover": {
        background: theme.palette.primary.main,
        cursor: "pointer",
        color: "#fff"
      }
    }
  },
  expanded__years: {
    transform: "scaleY(1)",
    transition: "transform 0.2s ease-in-out, color 0.3s ease-in 0.3s"
  },
  collapsed__years: {
    transform: "scaleY(0)",
    color: "transparent",
    transition: "transform 0.2s ease-in-out 0.3s, color 0.3s ease-out"
  },
  rotate180cw: {
    transform: "rotate(-180deg)",
    transition: "transform 0.4s ease-in-out"
  },
  rotate0ccw: {
    transform: "rotate(0deg)",
    transition: "transform 0.4s ease-in-out"
  },
  rotate180ccw: {
    transform: "rotate(180deg)",
    transition: "transform 0.4s ease-in-out"
  },
  rotate0cw: {
    transform: "rotate(-0deg)",
    transition: "transform 0.4s ease-in-out"
  },
  selected__date: {
    fontWeight: "bold",
    fontSize: "1.4em",
    background: theme.palette.primary.main,
    color: "#fff"
  }
})));

/***/ }),

/***/ "./src/components/Calendar/Calendar.tsx":
/*!**********************************************!*\
  !*** ./src/components/Calendar/Calendar.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-range */ "moment-range");
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_range__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Calendar_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Calendar.styles */ "./src/components/Calendar/Calendar.styles.ts");
/* harmony import */ var _CalendarCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CalendarCell */ "./src/components/Calendar/CalendarCell/index.ts");

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\Calendar\\Calendar.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const moment = (0,moment_range__WEBPACK_IMPORTED_MODULE_3__.extendMoment)(moment__WEBPACK_IMPORTED_MODULE_2__);




const Calendar = props => {
  const classes = (0,_Calendar_styles__WEBPACK_IMPORTED_MODULE_5__.default)();
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Form

  const handleClickOpen = () => {
    setOpen(true);
  }; // DatePicker


  const {
    className
  } = props,
        other = _objectWithoutProperties(props, ["className"]);

  const {
    0: expandedMonths,
    1: setExpandedMonths
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: expandedYears,
    1: setExpandedYears
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: selectedDay,
    1: setSelectedDay
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(moment());
  const yearRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const today = moment().startOf("day");
  const startOfMonth = selectedDay.clone().startOf("month");
  const endOfMonth = selectedDay.clone().endOf("month");
  const dateRange = Array.from(moment.range(startOfMonth, endOfMonth).by("day"));
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let empty = [];
  let days = [];
  let years = [];
  if (!empty.length) for (let i = 1; i <= selectedDay.clone().startOf("month").day(); i++) empty.push(i);
  if (!days.length) for (let i = 1; i <= startOfMonth.daysInMonth(); i++) days.push(i);
  if (!years.length) for (let i = 1900; i <= 2100; i++) years.push(i);

  const handleDayClick = d => {
    setSelectedDay(moment(d, "DD"));
    handleClickOpen && handleClickOpen();
  };

  const handleMonthClick = m => {
    setSelectedDay(moment(m + "/" + selectedDay.year(), "MMMM/YYYY"));
    setExpandedMonths(false);
  };

  const handleYearClick = y => {
    setSelectedDay(moment(selectedDay.month() + 1 + "/" + y, "MM/YYYY"));
    setExpandedYears(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.container, classes.column),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.rootDatePicker, className),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            onClick: () => {
              if (expandedYears) setExpandedYears(!expandedYears);
              setExpandedMonths(!expandedMonths);
            },
            children: [selectedDay.format("MMM"), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("material-icons", {
                [classes.rotate180cw]: expandedMonths,
                [classes.rotate0ccw]: !expandedMonths
              }),
              children: "arrow_drop_down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            onClick: () => {
              if (expandedMonths) setExpandedMonths(!expandedMonths);
              setExpandedYears(!expandedYears); // yearRef.current.scrollIntoView();
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("material-icons", {
                [classes.rotate180ccw]: expandedYears,
                [classes.rotate0cw]: !expandedYears
              }),
              children: "arrow_drop_down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, undefined), selectedDay.format("YYYY")]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.expand__months, {
            [classes.expanded__months]: expandedMonths,
            [classes.collapsed__months]: !expandedMonths
          }),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: months.map(m => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
                [classes.selected__date]: m === selectedDay.format("MMMM")
              }),
              onClick: () => handleMonthClick(m),
              children: m
            }, "month-" + m, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 25
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.expand__years, {
            [classes.expanded__years]: expandedYears,
            [classes.collapsed__years]: !expandedYears
          }),
          children: years.map(y => {
            if (y.toString() === selectedDay.format("YYYY")) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                ref: yearRef,
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
                  [classes.selected__date]: y.toString() === selectedDay.format("YYYY")
                }),
                onClick: () => handleYearClick(y),
                children: y
              }, "year-" + y, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 25
              }, undefined);
            } else {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
                  [classes.selected__date]: y.toString() === selectedDay.format("YYYY")
                }),
                onClick: () => handleYearClick(y),
                children: y
              }, "year-" + y, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 25
              }, undefined);
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.cRoot,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
            children: weekDays.map(d => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: d.substring(0, 1)
            }, "day-" + d, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 25
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 21
          }, undefined), empty.map(el => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, "empty-" + el, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 21
          }, undefined)), dateRange.map(date => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CalendarCell__WEBPACK_IMPORTED_MODULE_6__.default, {
              date: date,
              selectedDay: selectedDay,
              handleDayClick: handleDayClick
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 25
            }, undefined)
          }, "day-" + date.date(), false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 21
          }, undefined))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./src/components/Calendar/CalendarCell/CalendarCell.styles.ts":
/*!*********************************************************************!*\
  !*** ./src/components/Calendar/CalendarCell/CalendarCell.styles.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  container: {
    display: "flex"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  offset: {
    marginLeft: "20px"
  },
  hasData: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: theme.palette.secondary.main,
    color: "#fff"
  },
  selected: {
    borderRadius: "50%",
    background: theme.palette.secondary.main,
    color: "#fff"
  },
  today: {
    borderRadius: "50%",
    background: theme.palette.primary.main,
    color: "#fff",
    fontWeight: "bold"
  },
  day: {
    // height: "100%",
    width: "2.5em",
    height: "2.5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      cursor: "pointer",
      color: "#fff"
    }
  }
})));

/***/ }),

/***/ "./src/components/Calendar/CalendarCell/CalendarCell.tsx":
/*!***************************************************************!*\
  !*** ./src/components/Calendar/CalendarCell/CalendarCell.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CalendarCell; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CalendarCell_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CalendarCell.styles */ "./src/components/Calendar/CalendarCell/CalendarCell.styles.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ListOfWorkoutDayForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ListOfWorkoutDayForm */ "./src/components/ListOfWorkoutDayForm/index.tsx");

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\Calendar\\CalendarCell\\CalendarCell.tsx";







function CalendarCell({
  date,
  selectedDay,
  handleDayClick
}) {
  const classes = (0,_CalendarCell_styles__WEBPACK_IMPORTED_MODULE_4__.default)();
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.workoutDays).filter(ex => ex.date === date.format("DDMMYYYY"));
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      onClick: () => handleDayClick(date),
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.day, {
        [classes.selected]: date.format("DDMMYYYY") === selectedDay.format("DDMMYYYY"),
        [classes.today]: date.format("DDMMYYYY") === moment__WEBPACK_IMPORTED_MODULE_3___default()().format("DDMMYYYY")
      }),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
          [classes.hasData]: Boolean(data.length)
        }),
        onClick: handleOpen,
        children: date.format("DD")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.container, classes.column),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Dialog, {
          open: open,
          onClose: handleClose,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.DialogContent, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListOfWorkoutDayForm__WEBPACK_IMPORTED_MODULE_7__.default, {
              date: date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "./src/components/Calendar/CalendarCell/index.ts":
/*!*******************************************************!*\
  !*** ./src/components/Calendar/CalendarCell/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _CalendarCell__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _CalendarCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarCell */ "./src/components/Calendar/CalendarCell/CalendarCell.tsx");


/***/ }),

/***/ "./src/components/Calendar/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Calendar/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Calendar__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar */ "./src/components/Calendar/Calendar.tsx");


/***/ }),

/***/ "./src/components/CurrentWorkout/CurrentWorkouts.styles.ts":
/*!*****************************************************************!*\
  !*** ./src/components/CurrentWorkout/CurrentWorkouts.styles.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  offset: {
    marginLeft: "20px"
  }
})));

/***/ }),

/***/ "./src/components/CurrentWorkout/CurrentWorkouts.tsx":
/*!***********************************************************!*\
  !*** ./src/components/CurrentWorkout/CurrentWorkouts.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CurrentWorkouts_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CurrentWorkouts.styles */ "./src/components/CurrentWorkout/CurrentWorkouts.styles.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_DialogButton_DialogButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/DialogButton/DialogButton */ "./src/components/common/DialogButton/DialogButton.tsx");
/* harmony import */ var _WorkoutDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../WorkoutDetails */ "./src/components/WorkoutDetails/index.tsx");

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\CurrentWorkout\\CurrentWorkouts.tsx";








const CurrentWorkout = () => {
  const classes = (0,_CurrentWorkouts_styles__WEBPACK_IMPORTED_MODULE_3__.default)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.workout);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, classes.column),
    children: data.map((w, id) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_DialogButton_DialogButton__WEBPACK_IMPORTED_MODULE_6__.default, {
      label: w.name,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkoutDetails__WEBPACK_IMPORTED_MODULE_7__.default, {
        workout: w
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, undefined)
    }, id, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CurrentWorkout);

/***/ }),

/***/ "./src/components/ExerciseList/ExerciseList.tsx":
/*!******************************************************!*\
  !*** ./src/components/ExerciseList/ExerciseList.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WorkoutForm_WorkoutForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WorkoutForm/WorkoutForm */ "./src/components/WorkoutForm/WorkoutForm.tsx");
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/common */ "./src/styles/common.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\ExerciseList\\ExerciseList.tsx";






const ExerciseList = () => {
  const classes = (0,_styles_common__WEBPACK_IMPORTED_MODULE_4__.default)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(); //Dialog

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
        variant: "outlined",
        color: "primary",
        onClick: handleOpen,
        children: "New Workout Template"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
        open: open,
        onClose: handleClose,
        "aria-labelledby": "form-dialog-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.DialogTitle, {
          id: "form-dialog-title",
          children: "Exercise List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.DialogContent, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.DialogContentText, {
            children: "Choose exercise from the list:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkoutForm_WorkoutForm__WEBPACK_IMPORTED_MODULE_3__.default, {
            handleClose: handleClose
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.DialogActions, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ExerciseList);

/***/ }),

/***/ "./src/components/ListOfWorkoutDayForm/ListOfWorkoutDayForm.styles.ts":
/*!****************************************************************************!*\
  !*** ./src/components/ListOfWorkoutDayForm/ListOfWorkoutDayForm.styles.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    padding: "20px"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  offset: {
    marginLeft: "20px"
  },
  title: {
    textTransform: "uppercase"
  },
  bold: {
    fontWeight: "bold"
  }
})));

/***/ }),

/***/ "./src/components/ListOfWorkoutDayForm/ListOfWorkoutDayForm.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/ListOfWorkoutDayForm/ListOfWorkoutDayForm.tsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ListOfWorkoutDayForm_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListOfWorkoutDayForm.styles */ "./src/components/ListOfWorkoutDayForm/ListOfWorkoutDayForm.styles.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment-range */ "moment-range");
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_range__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _WorkoutDayForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../WorkoutDayForm */ "./src/components/WorkoutDayForm/index.tsx");

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\ListOfWorkoutDayForm\\ListOfWorkoutDayForm.tsx";






const moment = (0,moment_range__WEBPACK_IMPORTED_MODULE_6__.extendMoment)(moment__WEBPACK_IMPORTED_MODULE_5__);



const ListOfWorkoutDayForm = ({
  data,
  date
}) => {
  const classes = (0,_ListOfWorkoutDayForm_styles__WEBPACK_IMPORTED_MODULE_3__.default)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const workouts = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.workoutDays);
  const {
    0: openF,
    1: setOpenF
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: openEdit,
    1: setEditOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    1: updateState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const forceUpdate = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(() => updateState({}), []);

  const handleOpenF = () => setOpenF(true);

  const handleCloseF = () => setOpenF(false);

  const handleEditOpen = data => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
    forceUpdate();
  }; // Remove workout button    


  const handleDelete = id => {
    dispatch({
      type: 'DELETE_WORKOUT_DAY',
      payload: id
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.container, classes.row, classes.title, classes.bold),
      children: "Workouts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, undefined), Boolean(workouts === null || workouts === void 0 ? void 0 : workouts.length) && workouts.filter(w => w.date === date.format("DDMMYYYY")).map((w, id) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button // className={}
      , {
        color: "primary",
        variant: "contained",
        onClick: handleEditOpen,
        children: w.workoutName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
        open: openEdit,
        onClose: handleEditClose,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.DialogContent, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkoutDayForm__WEBPACK_IMPORTED_MODULE_8__.default, {
            data: w,
            date: date,
            handleCloseF: handleEditClose
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("material-icons"),
        onClick: () => handleDelete(w.id),
        children: "delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }, undefined)]
    }, id, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
      open: openF,
      onClose: handleCloseF,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.DialogContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkoutDayForm__WEBPACK_IMPORTED_MODULE_8__.default, {
          date: date,
          handleCloseF: handleCloseF
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 25
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {
      variant: "contained",
      onClick: handleOpenF,
      children: "Add Workout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ListOfWorkoutDayForm);

/***/ }),

/***/ "./src/components/ListOfWorkoutDayForm/index.tsx":
/*!*******************************************************!*\
  !*** ./src/components/ListOfWorkoutDayForm/index.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _ListOfWorkoutDayForm__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _ListOfWorkoutDayForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListOfWorkoutDayForm */ "./src/components/ListOfWorkoutDayForm/ListOfWorkoutDayForm.tsx");


/***/ }),

/***/ "./src/components/Login/Login.styles.ts":
/*!**********************************************!*\
  !*** ./src/components/Login/Login.styles.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    padding: "20px"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  offset: {
    marginLeft: "20px"
  },
  offsetTop: {
    marginTop: "10px"
  }
})));

/***/ }),

/***/ "./src/components/Login/Login.tsx":
/*!****************************************!*\
  !*** ./src/components/Login/Login.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.styles */ "./src/components/Login/Login.styles.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\Login\\Login.tsx";




;
function Login({
  handleCloseL
}) {
  const classes = (0,_Login_styles__WEBPACK_IMPORTED_MODULE_2__.default)();
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const handleSubmit = e => {
    e.preventDefault();
    handleCloseL();
  }; // Email
  // Password


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.container, classes.column),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, {
          className: classes.offsetTop,
          label: "email",
          type: "email",
          variant: "outlined",
          required: true,
          value: email,
          onChange: e => setEmail(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, {
          className: classes.offsetTop,
          label: "password",
          type: "password",
          variant: "outlined",
          required: true,
          value: password,
          onChange: e => setPassword(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
          type: "submit",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Login/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Login/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Login__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login */ "./src/components/Login/Login.tsx");


/***/ }),

/***/ "./src/components/Register/Register.styles.ts":
/*!****************************************************!*\
  !*** ./src/components/Register/Register.styles.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    padding: "20px"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  offset: {
    marginLeft: "20px"
  },
  offsetTop: {
    marginTop: "10px"
  }
})));

/***/ }),

/***/ "./src/components/Register/Register.tsx":
/*!**********************************************!*\
  !*** ./src/components/Register/Register.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Register; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Register_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.styles */ "./src/components/Register/Register.styles.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\Register\\Register.tsx";




;
function Register({
  handleCloseR
}) {
  const classes = (0,_Register_styles__WEBPACK_IMPORTED_MODULE_2__.default)();
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const handleSubmit = e => {
    e.preventDefault();
    handleCloseR();
  }; // Email
  // Password


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.container, classes.column),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Sign up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, {
          className: classes.offsetTop,
          label: "email",
          type: "email",
          variant: "outlined",
          required: true,
          value: email,
          onChange: e => setEmail(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, {
          className: classes.offsetTop,
          label: "password",
          type: "password",
          variant: "outlined",
          required: true,
          value: password,
          onChange: e => setPassword(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
          type: "submit",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Register/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Register/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Register__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register */ "./src/components/Register/Register.tsx");


/***/ }),

/***/ "./src/components/WorkoutDayForm/WorkoutDayForm.styles.ts":
/*!****************************************************************!*\
  !*** ./src/components/WorkoutDayForm/WorkoutDayForm.styles.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    padding: "20px"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  offset: {
    marginLeft: "20px"
  }
})));

/***/ }),

/***/ "./src/components/WorkoutDayForm/WorkoutDayForm.tsx":
/*!**********************************************************!*\
  !*** ./src/components/WorkoutDayForm/WorkoutDayForm.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WorkoutDayForm; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WorkoutDayForm_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkoutDayForm.styles */ "./src/components/WorkoutDayForm/WorkoutDayForm.styles.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\WorkoutDayForm\\WorkoutDayForm.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function WorkoutDayForm({
  data,
  date,
  handleCloseF
}) {
  var _workouts$, _workouts$2, _workouts$3, _workouts$4, _workoutDayFormData$e;

  const classes = (0,_WorkoutDayForm_styles__WEBPACK_IMPORTED_MODULE_3__.default)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const edit = Boolean(data);
  const workouts = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.workout);
  const initialState = {
    id: (data === null || data === void 0 ? void 0 : data.id) || (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
    workoutID: (data === null || data === void 0 ? void 0 : data.workoutID) || ((_workouts$ = workouts[0]) === null || _workouts$ === void 0 ? void 0 : _workouts$.id),
    workoutName: (data === null || data === void 0 ? void 0 : data.workoutName) || ((_workouts$2 = workouts[0]) === null || _workouts$2 === void 0 ? void 0 : _workouts$2.name),
    date: (data === null || data === void 0 ? void 0 : data.date) || date.format("DDMMYYYY"),
    exercises: (_workouts$3 = workouts[0]) === null || _workouts$3 === void 0 ? void 0 : _workouts$3.exercises.map(ex => ({
      name: ex.name,
      bodyPart: ex.bodyPart,
      sets: 0,
      reps: 0,
      weight: 0,
      note: ""
    }))
  };
  let {
    0: selectedName,
    1: setSelectedName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState.workoutName);
  let {
    0: workoutDayFormData,
    1: setWorkoutDayFormData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data ? data : initialState); // Select

  const handleChange = event => {
    setSelectedName(event.target.value);
    setWorkoutDayFormData({
      id: workouts.filter(w => w.name === event.target.value)[0].id,
      workoutID: workouts.filter(w => w.name === event.target.value)[0].id,
      workoutName: workouts.filter(w => w.name === event.target.value)[0].name,
      date: date.format("DDMMYYYY"),
      exercises: workouts.filter(w => w.name === event.target.value)[0].exercises.map(ex => ({
        name: ex.name,
        bodyPart: ex.bodyPart,
        sets: 0,
        reps: 0,
        weight: 0,
        note: ""
      }))
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (edit) {
      dispatch({
        type: "EDIT_WORKOUT_DAY",
        payload: workoutDayFormData
      });
    } else {
      dispatch({
        type: "ADD_WORKOUT_DAY",
        payload: workoutDayFormData
      });
    }

    ;
    handleCloseF();
  };

  console.log("workouts", (_workouts$4 = workouts[0]) === null || _workouts$4 === void 0 ? void 0 : _workouts$4.id);
  console.log("workoutDayFormData", workoutDayFormData);
  console.log("data", data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: edit ? "EDIT WORKOUT" : "ADD WORKOUT"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: e => handleSubmit(e),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.container, classes.column),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: date.format("DD.MM.YYYY")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.InputLabel, {
            children: "Workout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Select, {
            defaultValue: "",
            onChange: handleChange,
            value: selectedName,
            children: workouts.map((pos, id) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
              value: pos.name,
              children: pos.name
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 33
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.container, classes.column),
          children: Boolean(workoutDayFormData === null || workoutDayFormData === void 0 ? void 0 : (_workoutDayFormData$e = workoutDayFormData.exercises) === null || _workoutDayFormData$e === void 0 ? void 0 : _workoutDayFormData$e.length) && workoutDayFormData.exercises.map(ex => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.container, classes.row),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: ex.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, {
              className: classes.offset,
              label: "Weight",
              type: "number",
              variant: "outlined",
              value: ex.weight,
              onChange: e => setWorkoutDayFormData(_objectSpread(_objectSpread({}, workoutDayFormData), {}, {
                exercises: workoutDayFormData.exercises.map(el => {
                  if (el.name === ex.name) {
                    return _objectSpread(_objectSpread({}, el), {}, {
                      weight: e.target.value
                    });
                  } else {
                    return _objectSpread({}, el);
                  }
                })
              }))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, {
              className: classes.offset,
              label: "Reps",
              type: "number",
              variant: "outlined",
              value: ex.reps,
              onChange: e => setWorkoutDayFormData(_objectSpread(_objectSpread({}, workoutDayFormData), {}, {
                exercises: workoutDayFormData.exercises.map(el => {
                  if (el.name === ex.name) {
                    return _objectSpread(_objectSpread({}, el), {}, {
                      reps: e.target.value
                    });
                  } else {
                    return _objectSpread({}, el);
                  }
                })
              }))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, {
              className: classes.offset,
              label: "Sets",
              type: "number",
              variant: "outlined",
              value: ex.sets,
              onChange: e => setWorkoutDayFormData(_objectSpread(_objectSpread({}, workoutDayFormData), {}, {
                exercises: workoutDayFormData.exercises.map(el => {
                  if (el.name === ex.name) {
                    return _objectSpread(_objectSpread({}, el), {}, {
                      sets: e.target.value
                    });
                  } else {
                    return _objectSpread({}, el);
                  }
                })
              }))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 37
            }, this)]
          }, ex.name, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 29
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
          type: "submit",
          children: edit ? "EDIT" : "ADD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/WorkoutDayForm/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/WorkoutDayForm/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _WorkoutDayForm__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _WorkoutDayForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkoutDayForm */ "./src/components/WorkoutDayForm/WorkoutDayForm.tsx");


/***/ }),

/***/ "./src/components/WorkoutDetails/WorkoutDetails.styles.ts":
/*!****************************************************************!*\
  !*** ./src/components/WorkoutDetails/WorkoutDetails.styles.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "10px"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px"
  },
  column: {
    display: "flex",
    flexDirection: "column"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  offset: {
    marginLeft: "20px"
  },
  title: {
    textTransform: "uppercase"
  },
  bold: {
    fontWeight: "bold"
  }
})));

/***/ }),

/***/ "./src/components/WorkoutDetails/WorkoutDetails.tsx":
/*!**********************************************************!*\
  !*** ./src/components/WorkoutDetails/WorkoutDetails.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WorkoutDetails_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkoutDetails.styles */ "./src/components/WorkoutDetails/WorkoutDetails.styles.ts");
/* harmony import */ var _common_OptionsMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/OptionsMenu */ "./src/components/common/OptionsMenu/index.tsx");

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\WorkoutDetails\\WorkoutDetails.tsx";




;
;

const WorkoutDetails = ({
  workout
}) => {
  const classes = (0,_WorkoutDetails_styles__WEBPACK_IMPORTED_MODULE_3__.default)();
  const bodyParts = ["chest", "back", "arm", "triceps", "biceps", "legs", "calfes", "abs"];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.container, classes.row, classes.title, classes.bold),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: workout === null || workout === void 0 ? void 0 : workout.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_OptionsMenu__WEBPACK_IMPORTED_MODULE_4__.default, {
          workout: workout
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 23
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined), bodyParts.map((b, id) => {
      var _workout$exercises;

      return Boolean((_workout$exercises = workout.exercises) === null || _workout$exercises === void 0 ? void 0 : _workout$exercises.length) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.container, classes.column, classes.offset),
        children: [!!workout.exercises.filter(w => w.bodyPart === b).length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.bold),
          children: b
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 98
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: workout.exercises.filter(ex => ex.bodyPart === b).map((c, id) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.column, classes.offset),
            children: c.name
          }, id, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 33
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }, undefined)]
      }, id, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (WorkoutDetails);

/***/ }),

/***/ "./src/components/WorkoutDetails/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/WorkoutDetails/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _WorkoutDetails__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _WorkoutDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkoutDetails */ "./src/components/WorkoutDetails/WorkoutDetails.tsx");


/***/ }),

/***/ "./src/components/WorkoutForm/WorkoutForm.styles.ts":
/*!**********************************************************!*\
  !*** ./src/components/WorkoutForm/WorkoutForm.styles.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    display: "flex"
  },
  container: {
    flexWrap: "wrap",
    marginTop: "30px"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  offset: {
    marginLeft: "20px"
  },
  title: {
    textTransform: "uppercase"
  },
  bold: {
    fontWeight: "bold"
  }
})));

/***/ }),

/***/ "./src/components/WorkoutForm/WorkoutForm.tsx":
/*!****************************************************!*\
  !*** ./src/components/WorkoutForm/WorkoutForm.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WorkoutForm_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkoutForm.styles */ "./src/components/WorkoutForm/WorkoutForm.styles.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _temp_workoutList_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../temp/workoutList.json */ "./src/temp/workoutList.json");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\WorkoutForm\\WorkoutForm.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import initialState from '../../temp/initialState.json'




const WorkoutForm = ({
  handleClose,
  data
}) => {
  const classes = (0,_WorkoutForm_styles__WEBPACK_IMPORTED_MODULE_3__.default)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const edit = Boolean(data);
  const bodyParts = ["chest", "back", "arms", "triceps", "biceps", "legs", "calfes", "abs"];
  const exercises = _temp_workoutList_json__WEBPACK_IMPORTED_MODULE_5__;
  const initialState = {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),
    name: "",
    exercises: []
  }; // const data

  let {
    0: formData,
    1: setFormData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data ? data : initialState);

  const handleChange = event => {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (edit) {
      dispatch({
        type: 'EDIT_WORKOUT',
        payload: formData
      });
    } else {
      dispatch({
        type: 'ADD_WORKOUT',
        payload: formData
      });
    }

    ;
    handleClose();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: edit ? "EDIT WORKOUT" : "ADD WORKOUT"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: e => handleSubmit(e),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, {
        label: "Title",
        name: "name",
        value: formData.name,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, undefined), bodyParts.map((b, id) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.container, classes.column),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.title, classes.bold),
            children: b
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, undefined), exercises.filter(ex => ex.bodyPart === b).map((ex, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
              checked: formData.exercises.map(el => el.name).includes(ex.name),
              name: ex.name,
              onChange: e => {
                if (e.target.checked) {
                  setFormData(_objectSpread(_objectSpread({}, formData), {}, {
                    exercises: [...formData.exercises, {
                      name: ex.name,
                      bodyPart: b
                    }]
                  }));
                } else {
                  setFormData(_objectSpread(_objectSpread({}, formData), {}, {
                    exercises: formData.exercises.filter(ex_ => ex_.name !== ex.name)
                  }));
                }
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: ex.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 33
            }, undefined)]
          }, idx, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 29
          }, undefined))]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, undefined);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
        type: "submit",
        color: "primary",
        children: edit ? "EDIT" : "ADD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (WorkoutForm);

/***/ }),

/***/ "./src/components/common/DialogButton/DialogButton.styles.ts":
/*!*******************************************************************!*\
  !*** ./src/components/common/DialogButton/DialogButton.styles.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  offset: {
    marginLeft: "20px"
  }
})));

/***/ }),

/***/ "./src/components/common/DialogButton/DialogButton.tsx":
/*!*************************************************************!*\
  !*** ./src/components/common/DialogButton/DialogButton.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DialogButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogButton.styles */ "./src/components/common/DialogButton/DialogButton.styles.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\common\\DialogButton\\DialogButton.tsx";







const DialogButton = ({
  label,
  children
}) => {
  const classes = (0,_DialogButton_styles__WEBPACK_IMPORTED_MODULE_3__.default)(); //Dialog

  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; //Router


  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); //Data

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, classes.column),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
        onClick: handleClickOpen,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__.default, {
        open: open,
        onClose: handleClose,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }, undefined)]
    }, label, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DialogButton);

/***/ }),

/***/ "./src/components/common/Footer/Footer.styles.ts":
/*!*******************************************************!*\
  !*** ./src/components/common/Footer/Footer.styles.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  footer: {
    display: "flex",
    position: "fixed",
    left: "0",
    bottom: "0",
    backgroundColor: "black",
    color: "white",
    padding: "20px",
    width: "100%",
    justifyContent: "start"
  },
  offset: {
    marginLeft: "20px"
  }
})));

/***/ }),

/***/ "./src/components/common/Footer/Footer.tsx":
/*!*************************************************!*\
  !*** ./src/components/common/Footer/Footer.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.styles */ "./src/components/common/Footer/Footer.styles.ts");

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\common\\Footer\\Footer.tsx";




function Footer() {
  const classes = (0,_Footer_styles__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.container, classes.row, classes.footer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "FitUp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Contact us:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "(+66) 666 666 666"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "mailto:andrzej.pruszynski90@gmail.com",
          children: "andrzej.pruszynski90@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/common/Footer/index.tsx":
/*!************************************************!*\
  !*** ./src/components/common/Footer/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./src/components/common/Footer/Footer.tsx");


/***/ }),

/***/ "./src/components/common/Navbar/Navbar.styles.ts":
/*!*******************************************************!*\
  !*** ./src/components/common/Navbar/Navbar.styles.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "10%"
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  offset: {
    marginLeft: "20px"
  }
})));

/***/ }),

/***/ "./src/components/common/Navbar/Navbar.tsx":
/*!*************************************************!*\
  !*** ./src/components/common/Navbar/Navbar.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.styles */ "./src/components/common/Navbar/Navbar.styles.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CurrentWorkout_CurrentWorkouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../CurrentWorkout/CurrentWorkouts */ "./src/components/CurrentWorkout/CurrentWorkouts.tsx");
/* harmony import */ var _ExerciseList_ExerciseList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ExerciseList/ExerciseList */ "./src/components/ExerciseList/ExerciseList.tsx");
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Calendar */ "./src/components/Calendar/index.tsx");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Login */ "./src/components/Login/index.tsx");
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Register */ "./src/components/Register/index.tsx");

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\common\\Navbar\\Navbar.tsx";










function Navbar() {
  const classes = (0,_Navbar_styles__WEBPACK_IMPORTED_MODULE_2__.default)(); // Tabs

  const {
    0: openL,
    1: setOpenL
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: openR,
    1: setOpenR
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: selectedTab,
    1: setSelectedTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);

  const handleChange = (event, newTab) => {
    setSelectedTab(newTab);
  };

  const handleOpenL = () => setOpenL(true);

  const handleCloseL = () => setOpenL(false);

  const handleOpenR = () => setOpenR(true);

  const handleCloseR = () => setOpenR(false);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.AppBar, {
      position: "static",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "FitUp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tabs, {
          value: selectedTab,
          onChange: handleChange,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tab, {
            label: "Current Workout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tab, {
            label: "Exercise List"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tab, {
            label: "Calendar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
            open: openL,
            onClose: handleCloseL,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.DialogContent, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Login__WEBPACK_IMPORTED_MODULE_8__.default, {
                handleCloseL: handleCloseL
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: classes.offset,
            variant: "contained",
            color: "secondary",
            size: "small",
            onClick: handleOpenL,
            children: "Logg In"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
            open: openR,
            onClose: handleCloseR,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.DialogContent, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Register__WEBPACK_IMPORTED_MODULE_9__.default, {
                handleCloseR: handleCloseR
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: classes.offset,
            variant: "contained",
            color: "secondary",
            size: "small",
            onClick: handleOpenR,
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, this), selectedTab === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CurrentWorkout_CurrentWorkouts__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 32
    }, this), selectedTab === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ExerciseList_ExerciseList__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 32
    }, this), selectedTab === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Calendar__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 32
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/common/OptionsMenu/OptionsMenu.styles.ts":
/*!*****************************************************************!*\
  !*** ./src/components/common/OptionsMenu/OptionsMenu.styles.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  offset: {
    marginLeft: "20px"
  }
})));

/***/ }),

/***/ "./src/components/common/OptionsMenu/OptionsMenu.tsx":
/*!***********************************************************!*\
  !*** ./src/components/common/OptionsMenu/OptionsMenu.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OptionsMenu; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _OptionsMenu_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OptionsMenu.styles */ "./src/components/common/OptionsMenu/OptionsMenu.styles.ts");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _WorkoutForm_WorkoutForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../WorkoutForm/WorkoutForm */ "./src/components/WorkoutForm/WorkoutForm.tsx");

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\common\\OptionsMenu\\OptionsMenu.tsx";









function OptionsMenu({
  workout
}) {
  const classes = (0,_OptionsMenu_styles__WEBPACK_IMPORTED_MODULE_3__.default)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    1: updateState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const forceUpdate = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(() => updateState({}), []); // Menu

  const {
    0: anchorEl,
    1: setAnchorEl
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }; // Remove workout button    


  const handleDelete = id => {
    dispatch({
      type: 'DELETE_WORKOUT',
      payload: id
    });
  }; // Edit workout button


  const {
    0: openEditWorkout,
    1: setOpenEditWorkout
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handleEditOpen = data => {
    setOpenEditWorkout(true);
  };

  const handleEditClose = () => {
    setOpenEditWorkout(false);
    forceUpdate();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__.default, {
      "aria-controls": "simple-menu",
      "aria-haspopup": "true",
      onClick: handleClick,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "material-icons",
        children: "more_vert"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_6__.default, {
      id: "simple-menu",
      anchorEl: anchorEl,
      keepMounted: true,
      open: Boolean(anchorEl),
      onClose: handleClose,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__.default, {
        onClick: () => handleDelete(workout.id),
        children: "Remove"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__.default, {
        onClick: () => handleEditOpen(workout.id),
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__.default, {
        "aria-labelledby": "transition-dialog-title" + workout.id,
        open: openEditWorkout,
        onClose: handleEditClose,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkoutForm_WorkoutForm__WEBPACK_IMPORTED_MODULE_4__.default, {
              handleClose: setOpenEditWorkout,
              data: workout
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/common/OptionsMenu/index.tsx":
/*!*****************************************************!*\
  !*** ./src/components/common/OptionsMenu/index.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _OptionsMenu__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _OptionsMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionsMenu */ "./src/components/common/OptionsMenu/OptionsMenu.tsx");


/***/ }),

/***/ "./src/styles/common.ts":
/*!******************************!*\
  !*** ./src/styles/common.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  footer: {
    display: "flex",
    position: "fixed",
    left: "0",
    bottom: "0",
    backgroundColor: "black",
    color: "white",
    padding: "20px",
    width: "100%",
    justifyContent: "start"
  },
  offset: {
    marginLeft: "20px"
  },
  glassMorphism: {
    background: "rgba( 255, 255, 255, 0.4 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    webkitBackdropFilter: "blur( 4px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )"
  }
})));

/***/ }),

/***/ "./src/temp/workoutList.json":
/*!***********************************!*\
  !*** ./src/temp/workoutList.json ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"name":"barbell bench press","bodyPart":"chest"},{"name":"cable crossover","bodyPart":"chest"},{"name":"chest press","bodyPart":"chest"},{"name":"dips","bodyPart":"chest"},{"name":"incline dumbbell flies","bodyPart":"chest"},{"name":"pushups","bodyPart":"chest"},{"name":"barbell row","bodyPart":"back"},{"name":"barbell deadlift","bodyPart":"back"},{"name":"lat pulldown","bodyPart":"back"},{"name":"quadruped dumbbell row","bodyPart":"back"},{"name":"resistance band pull apart","bodyPart":"back"},{"name":"single-arm dumbbell row","bodyPart":"back"},{"name":"wide dumbbell row","bodyPart":"back"},{"name":"overhead press","bodyPart":"arm"},{"name":"chin-up","bodyPart":"arm"},{"name":"EZ-bar upright row","bodyPart":"arm"},{"name":"incline dumbbell biceps curl","bodyPart":"arm"},{"name":"dumbbell laterall raise","bodyPart":"arm"},{"name":"cable triceps press-down","bodyPart":"arm"},{"name":"close-grip bench press","bodyPart":"triceps"},{"name":"cable rope triceps pushdown","bodyPart":"triceps"},{"name":"lying triceps extensions","bodyPart":"triceps"},{"name":"tricep dips","bodyPart":"triceps"},{"name":"diamond push-ups","bodyPart":"triceps"},{"name":"bench dip","bodyPart":"triceps"},{"name":"one-arm overhead extension","bodyPart":"triceps"},{"name":"standard push-up","bodyPart":"triceps"},{"name":"barbell curl","bodyPart":"biceps"},{"name":"chin-up","bodyPart":"biceps"},{"name":"EZ-bar preacher curl","bodyPart":"biceps"},{"name":"hammer Curl","bodyPart":"biceps"},{"name":"incline dumbbell curl","bodyPart":"biceps"},{"name":"reverse-grip eent-over row","bodyPart":"biceps"},{"name":"cable curl","bodyPart":"biceps"},{"name":"concentration curl","bodyPart":"biceps"},{"name":"back squats","bodyPart":"legs"},{"name":"front squats","bodyPart":"legs"},{"name":"hack squats","bodyPart":"legs"},{"name":"leg press","bodyPart":"legs"},{"name":"stiff leg deadlifts","bodyPart":"legs"},{"name":"goodmornings","bodyPart":"legs"},{"name":"machine hamstring curls","bodyPart":"legs"},{"name":"machine leg extensions","bodyPart":"legs"},{"name":"sited calfes extensions","bodyPart":"calfes"},{"name":"standing calfes extensions","bodyPart":"calfes"},{"name":"bicycle crunches","bodyPart":"abs"},{"name":"crunches","bodyPart":"abs"},{"name":"hanging leg raises","bodyPart":"abs"},{"name":"plank","bodyPart":"abs"}]');

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "moment-range":
/*!*******************************!*\
  !*** external "moment-range" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment-range");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_material-ui_core_esm_styles_index_js","vendors-node_modules_material-ui_core_esm_Button_index_js-node_modules_material-ui_core_esm_D-e0d7d0"], function() { return __webpack_exec__("./pages/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhci5zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnRzeCIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJDZWxsL0NhbGVuZGFyQ2VsbC5zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyQ2VsbC9DYWxlbmRhckNlbGwudHN4Iiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvY29tcG9uZW50cy9DdXJyZW50V29ya291dC9DdXJyZW50V29ya291dHMuc3R5bGVzLnRzIiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvY29tcG9uZW50cy9DdXJyZW50V29ya291dC9DdXJyZW50V29ya291dHMudHN4Iiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvY29tcG9uZW50cy9FeGVyY2lzZUxpc3QvRXhlcmNpc2VMaXN0LnRzeCIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL2NvbXBvbmVudHMvTGlzdE9mV29ya291dERheUZvcm0vTGlzdE9mV29ya291dERheUZvcm0uc3R5bGVzLnRzIiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvY29tcG9uZW50cy9MaXN0T2ZXb3Jrb3V0RGF5Rm9ybS9MaXN0T2ZXb3Jrb3V0RGF5Rm9ybS50c3giLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC8uL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLnN0eWxlcy50cyIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4udHN4Iiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvY29tcG9uZW50cy9SZWdpc3Rlci9SZWdpc3Rlci5zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC8uL3NyYy9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyLnRzeCIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL2NvbXBvbmVudHMvV29ya291dERheUZvcm0vV29ya291dERheUZvcm0uc3R5bGVzLnRzIiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvY29tcG9uZW50cy9Xb3Jrb3V0RGF5Rm9ybS9Xb3Jrb3V0RGF5Rm9ybS50c3giLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC8uL3NyYy9jb21wb25lbnRzL1dvcmtvdXREZXRhaWxzL1dvcmtvdXREZXRhaWxzLnN0eWxlcy50cyIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL2NvbXBvbmVudHMvV29ya291dERldGFpbHMvV29ya291dERldGFpbHMudHN4Iiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvY29tcG9uZW50cy9Xb3Jrb3V0Rm9ybS9Xb3Jrb3V0Rm9ybS5zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC8uL3NyYy9jb21wb25lbnRzL1dvcmtvdXRGb3JtL1dvcmtvdXRGb3JtLnRzeCIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0RpYWxvZ0J1dHRvbi9EaWFsb2dCdXR0b24uc3R5bGVzLnRzIiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vRGlhbG9nQnV0dG9uL0RpYWxvZ0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Gb290ZXIvRm9vdGVyLnN0eWxlcy50cyIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0Zvb3Rlci9Gb290ZXIudHN4Iiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vTmF2YmFyL05hdmJhci5zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9OYXZiYXIvTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL09wdGlvbnNNZW51L09wdGlvbnNNZW51LnN0eWxlcy50cyIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL09wdGlvbnNNZW51L09wdGlvbnNNZW51LnRzeCIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL3N0eWxlcy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiIiwid2VicGFjazovL2ZpdC11cC1hcHAvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovL2ZpdC11cC1hcHAvZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL2ZpdC11cC1hcHAvZXh0ZXJuYWwgXCJtb21lbnQtcmFuZ2VcIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL2ZpdC11cC1hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2ZpdC11cC1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiIiwid2VicGFjazovL2ZpdC11cC1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIkhvbWUiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwicm9vdCIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY29udGFpbmVyIiwicGFkZGluZyIsImNvbHVtbiIsImp1c3RpZnlDb250ZW50Iiwicm93Iiwib2Zmc2V0IiwibWFyZ2luTGVmdCIsInJvb3REYXRlUGlja2VyIiwiY29sb3IiLCJmb250V2VpZ2h0IiwibWF4V2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJhbGlnbkl0ZW1zIiwiY3Vyc29yIiwiY1Jvb3QiLCJoZWlnaHQiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZFRlbXBsYXRlUm93cyIsImdhcCIsIm1hcmdpbkJvdHRvbSIsImdyaWRBcmVhIiwid2lkdGgiLCJzZWxlY3RlZCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJzZWNvbmRhcnkiLCJ0b2RheSIsImRheSIsInRyYW5zaXRpb24iLCJleHBhbmRfX21vbnRocyIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybU9yaWdpbiIsIm92ZXJmbG93IiwibWFyZ2luVG9wIiwiZXhwYW5kZWRfX21vbnRocyIsInRyYW5zZm9ybSIsImNvbGxhcHNlZF9fbW9udGhzIiwiZXhwYW5kX195ZWFycyIsImV4cGFuZGVkX195ZWFycyIsImNvbGxhcHNlZF9feWVhcnMiLCJyb3RhdGUxODBjdyIsInJvdGF0ZTBjY3ciLCJyb3RhdGUxODBjY3ciLCJyb3RhdGUwY3ciLCJzZWxlY3RlZF9fZGF0ZSIsImZvbnRTaXplIiwibW9tZW50IiwiZXh0ZW5kTW9tZW50IiwiTW9tZW50IiwiQ2FsZW5kYXIiLCJwcm9wcyIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJoYW5kbGVDbGlja09wZW4iLCJjbGFzc05hbWUiLCJvdGhlciIsImV4cGFuZGVkTW9udGhzIiwic2V0RXhwYW5kZWRNb250aHMiLCJleHBhbmRlZFllYXJzIiwic2V0RXhwYW5kZWRZZWFycyIsInNlbGVjdGVkRGF5Iiwic2V0U2VsZWN0ZWREYXkiLCJ5ZWFyUmVmIiwidXNlUmVmIiwic3RhcnRPZiIsInN0YXJ0T2ZNb250aCIsImNsb25lIiwiZW5kT2ZNb250aCIsImVuZE9mIiwiZGF0ZVJhbmdlIiwiQXJyYXkiLCJmcm9tIiwicmFuZ2UiLCJieSIsIndlZWtEYXlzIiwibW9udGhzIiwiZW1wdHkiLCJkYXlzIiwieWVhcnMiLCJsZW5ndGgiLCJpIiwicHVzaCIsImRheXNJbk1vbnRoIiwiaGFuZGxlRGF5Q2xpY2siLCJkIiwiaGFuZGxlTW9udGhDbGljayIsIm0iLCJ5ZWFyIiwiaGFuZGxlWWVhckNsaWNrIiwieSIsIm1vbnRoIiwiY2xhc3NuYW1lcyIsImZvcm1hdCIsIm1hcCIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiZWwiLCJkYXRlIiwiaGFzRGF0YSIsIkNhbGVuZGFyQ2VsbCIsImRhdGEiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwid29ya291dERheXMiLCJmaWx0ZXIiLCJleCIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbG9zZSIsIkJvb2xlYW4iLCJmbGV4V3JhcCIsIkN1cnJlbnRXb3Jrb3V0Iiwicm91dGVyIiwidXNlUm91dGVyIiwid29ya291dCIsInciLCJpZCIsIm5hbWUiLCJFeGVyY2lzZUxpc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiUmVhY3QiLCJ0aXRsZSIsInRleHRUcmFuc2Zvcm0iLCJib2xkIiwiTGlzdE9mV29ya291dERheUZvcm0iLCJ3b3Jrb3V0cyIsIm9wZW5GIiwic2V0T3BlbkYiLCJvcGVuRWRpdCIsInNldEVkaXRPcGVuIiwidXBkYXRlU3RhdGUiLCJmb3JjZVVwZGF0ZSIsImhhbmRsZU9wZW5GIiwiaGFuZGxlQ2xvc2VGIiwiaGFuZGxlRWRpdE9wZW4iLCJoYW5kbGVFZGl0Q2xvc2UiLCJoYW5kbGVEZWxldGUiLCJ0eXBlIiwicGF5bG9hZCIsIndvcmtvdXROYW1lIiwib2Zmc2V0VG9wIiwiTG9naW4iLCJoYW5kbGVDbG9zZUwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZW1haWwiLCJzZXRFbWFpbCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiUmVnaXN0ZXIiLCJoYW5kbGVDbG9zZVIiLCJXb3Jrb3V0RGF5Rm9ybSIsImVkaXQiLCJpbml0aWFsU3RhdGUiLCJ2NCIsIndvcmtvdXRJRCIsImV4ZXJjaXNlcyIsImJvZHlQYXJ0Iiwic2V0cyIsInJlcHMiLCJ3ZWlnaHQiLCJub3RlIiwic2VsZWN0ZWROYW1lIiwic2V0U2VsZWN0ZWROYW1lIiwid29ya291dERheUZvcm1EYXRhIiwic2V0V29ya291dERheUZvcm1EYXRhIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicG9zIiwiV29ya291dERldGFpbHMiLCJib2R5UGFydHMiLCJiIiwiYyIsIldvcmtvdXRGb3JtIiwid29ya291dExpc3QiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaWR4IiwiaW5jbHVkZXMiLCJjaGVja2VkIiwiZXhfIiwiRGlhbG9nQnV0dG9uIiwibGFiZWwiLCJjaGlsZHJlbiIsImZvb3RlciIsImJvdHRvbSIsIkZvb3RlciIsIk5hdmJhciIsIm9wZW5MIiwic2V0T3BlbkwiLCJvcGVuUiIsInNldE9wZW5SIiwic2VsZWN0ZWRUYWIiLCJzZXRTZWxlY3RlZFRhYiIsIm5ld1RhYiIsImhhbmRsZU9wZW5MIiwiaGFuZGxlT3BlblIiLCJjbGFzc05hbWVzIiwiT3B0aW9uc01lbnUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiaGFuZGxlQ2xpY2siLCJjdXJyZW50VGFyZ2V0Iiwib3BlbkVkaXRXb3Jrb3V0Iiwic2V0T3BlbkVkaXRXb3Jrb3V0IiwiZ2xhc3NNb3JwaGlzbSIsImJveFNoYWRvdyIsImJhY2tkcm9wRmlsdGVyIiwid2Via2l0QmFja2Ryb3BGaWx0ZXIiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLFFBQU1DLE9BQU8sR0FBR0MsMkRBQVMsRUFBekI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUQsT0FBTyxDQUFDRSxJQUF4QjtBQUFBLDRCQUNFLDhEQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1ELEM7Ozs7Ozs7Ozs7Ozs7QUNmRDtBQUVBLCtEQUFlQyxvRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDaENGLE1BQUksRUFBRTtBQUNGRyxXQUFPLEVBQUUsTUFEUDtBQUVGQyxpQkFBYSxFQUFFO0FBRmIsR0FEMEI7QUFNaENDLFdBQVMsRUFBRTtBQUNQRixXQUFPLEVBQUUsTUFERjtBQUVQRyxXQUFPLEVBQUU7QUFGRixHQU5xQjtBQVVoQ0MsUUFBTSxFQUFFO0FBQ0pILGlCQUFhLEVBQUUsUUFEWDtBQUVKSSxrQkFBYyxFQUFFO0FBRlosR0FWd0I7QUFjaENDLEtBQUcsRUFBRTtBQUNETCxpQkFBYSxFQUFFLEtBRGQ7QUFFREksa0JBQWMsRUFBRTtBQUZmLEdBZDJCO0FBa0JoQ0UsUUFBTSxFQUFFO0FBQ0pDLGNBQVUsRUFBRTtBQURSLEdBbEJ3QjtBQXNCaEM7QUFDQUMsZ0JBQWMsRUFBRTtBQUNaVCxXQUFPLEVBQUUsTUFERztBQUVaQyxpQkFBYSxFQUFF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Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuLi9zcmMvc3R5bGVzL2NvbW1vbic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0Zvb3Rlcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvY29tbW9uL05hdmJhci9OYXZiYXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIyMHB4XCJcclxuICAgIH0sXHJcbiAgICBjb2x1bW46IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIHJvdzoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCIyMHB4XCJcclxuICAgIH0sIFxyXG5cclxuICAgIC8vRGF0ZVBpY2tlclxyXG4gICAgcm9vdERhdGVQaWNrZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG5cclxuICAgICAgICBcIiYgPiBuYXZcIjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICAgICAgICAvLyBtYXJnaW46IFwiMCAxMHB4XCJcclxuXHJcbiAgICAgICAgICAgIFwiJiA+IGRpdlwiOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG5cclxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjUm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgIGhlaWdodDogXCJhdXRvXCIsXHJcblxyXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwicmVwZWF0KDcsIDFmcilcIixcclxuICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiBcIjAuNWZyIHJlcGVhdCg2LCAyLjVlbSlcIixcclxuICAgICAgICBnYXA6IFwiNXB4XCIsXHJcbiAgICAgICAgLy8gbWFyZ2luOiBcIjAgMTBweCAxMHB4IDEwcHhcIlxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICBcclxuICAgICAgICBcIiYgPiBuYXZcIjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiIzQyNDI0MlwiLFxyXG4gICAgICAgICAgICBncmlkQXJlYTogXCIxIC8gMSAvIDIgLyA4XCIsXHJcblxyXG4gICAgICAgICAgICBcIiYgPiBkaXZcIjoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG5cclxuICAgICAgICAgICAgICAgIFwiJj5zcGFuXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwiJiA+IGRpdlwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiBcIjJlbVwiLFxyXG4gICAgICAgICAgICAvLyB3aWR0aDogXCIyZW1cIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzZWxlY3RlZDoge1xyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICAgIGNvbG9yOiBcIiNmZmZcIlxyXG4gICAgfSxcclxuXHJcbiAgICB0b2RheToge1xyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBkYXk6IHtcclxuICAgICAgICAvLyBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjIuNWVtXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjIuNWVtXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICBcclxuICAgICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dFwiLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGV4cGFuZF9fbW9udGhzOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAvLyBtYXJnaW5Ub3A6IFwiNWVtXCIsXHJcbiAgICBcclxuICAgICAgICBcIiYgPiBkaXZcIjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxyXG4gICAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgICAgbGVmdDogXCIwXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSA1ZW0gLSA0NXB4KVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMCAwXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgXHJcbiAgICAgICAgLy8gQGluY2x1ZGUgYm94U2hhZG93KDMpLFxyXG4gICAgXHJcbiAgICAgICAgXCImID4gc3BhblwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCI1cHggMFwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMnB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIFxyXG4gICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBleHBhbmRlZF9fbW9udGhzOiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlWSgxKVwiLFxyXG4gICAgXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dCwgY29sb3IgMC4zcyBlYXNlLWluIDAuM3NcIixcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNvbGxhcHNlZF9fbW9udGhzOiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlWSgwKVwiLFxyXG4gICAgICAgIGNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dCAwLjNzLCBjb2xvciAwLjNzIGVhc2Utb3V0XCIsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBleHBhbmRfX3llYXJzOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgdG9wOiBcIjIuNmVtXCIsXHJcbiAgICAgICAgbGVmdDogXCIwXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSA1ZW0gLSA0NXB4KVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMCAwXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgXHJcbiAgICAgICAgLy8gQGluY2x1ZGUgYm94U2hhZG93KDMpLFxyXG4gICAgICAgIFwiJiA+IHNwYW5cIjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiNXB4IDBcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMnB4XCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgXHJcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZXhwYW5kZWRfX3llYXJzOiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlWSgxKVwiLFxyXG4gICAgXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dCwgY29sb3IgMC4zcyBlYXNlLWluIDAuM3NcIixcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNvbGxhcHNlZF9feWVhcnM6IHtcclxuICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGVZKDApXCIsXHJcbiAgICAgICAgY29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0IDAuM3MsIGNvbG9yIDAuM3MgZWFzZS1vdXRcIixcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHJvdGF0ZTE4MGN3OiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgtMTgwZGVnKVwiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuNHMgZWFzZS1pbi1vdXRcIixcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHJvdGF0ZTBjY3c6IHtcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDBkZWcpXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dFwiLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcm90YXRlMTgwY2N3OiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgxODBkZWcpXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dFwiLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcm90YXRlMGN3OiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgtMGRlZylcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0XCIsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzZWxlY3RlZF9fZGF0ZToge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjEuNGVtXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgICAgY29sb3I6IFwiI2ZmZlwiXHJcbiAgICB9XHJcbn0pKVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHsgZXh0ZW5kTW9tZW50IH0gZnJvbSBcIm1vbWVudC1yYW5nZVwiO1xyXG5jb25zdCBtb21lbnQgPSBleHRlbmRNb21lbnQoTW9tZW50KTtcclxuXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9DYWxlbmRhci5zdHlsZXMnO1xyXG5cclxuaW1wb3J0IENhbGVuZGFyQ2VsbCBmcm9tICcuL0NhbGVuZGFyQ2VsbCc7XHJcblxyXG5jb25zdCBDYWxlbmRhciA9IChwcm9wczoge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgaGFuZGxlQ2xpY2tPcGVuPzogRnVuY3Rpb247XHJcbiAgfSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyBGb3JtXHJcbiAgICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgLy8gRGF0ZVBpY2tlclxyXG5cclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbZXhwYW5kZWRNb250aHMsIHNldEV4cGFuZGVkTW9udGhzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtleHBhbmRlZFllYXJzLCBzZXRFeHBhbmRlZFllYXJzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZERheSwgc2V0U2VsZWN0ZWREYXldID0gdXNlU3RhdGUobW9tZW50KCkpXHJcblxyXG4gICAgY29uc3QgeWVhclJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCB0b2RheSA9IG1vbWVudCgpLnN0YXJ0T2YoXCJkYXlcIik7XHJcbiAgICBjb25zdCBzdGFydE9mTW9udGggPSBzZWxlY3RlZERheS5jbG9uZSgpLnN0YXJ0T2YoXCJtb250aFwiKTtcclxuICAgIGNvbnN0IGVuZE9mTW9udGggPSBzZWxlY3RlZERheS5jbG9uZSgpLmVuZE9mKFwibW9udGhcIik7XHJcblxyXG4gICAgY29uc3QgZGF0ZVJhbmdlID0gQXJyYXkuZnJvbShcclxuICAgICAgICBtb21lbnQucmFuZ2Uoc3RhcnRPZk1vbnRoLCBlbmRPZk1vbnRoKS5ieShcImRheVwiKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB3ZWVrRGF5cyA9IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXTtcclxuICAgIGNvbnN0IG1vbnRocyA9IFtcclxuICAgICAgICBcIkphbnVhcnlcIixcclxuICAgICAgICBcIkZlYnJ1YXJ5XCIsXHJcbiAgICAgICAgXCJNYXJjaFwiLFxyXG4gICAgICAgIFwiQXByaWxcIixcclxuICAgICAgICBcIk1heVwiLFxyXG4gICAgICAgIFwiSnVuZVwiLFxyXG4gICAgICAgIFwiSnVseVwiLFxyXG4gICAgICAgIFwiQXVndXN0XCIsXHJcbiAgICAgICAgXCJTZXB0ZW1iZXJcIixcclxuICAgICAgICBcIk9jdG9iZXJcIixcclxuICAgICAgICBcIk5vdmVtYmVyXCIsXHJcbiAgICAgICAgXCJEZWNlbWJlclwiLFxyXG4gICAgXTtcclxuICAgIGxldCBlbXB0eSA9IFtdO1xyXG4gICAgbGV0IGRheXMgPSBbXTtcclxuICAgIGxldCB5ZWFycyA9IFtdO1xyXG5cclxuICAgIGlmICghZW1wdHkubGVuZ3RoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNlbGVjdGVkRGF5LmNsb25lKCkuc3RhcnRPZihcIm1vbnRoXCIpLmRheSgpOyBpKyspXHJcbiAgICAgICAgZW1wdHkucHVzaChpKTtcclxuXHJcbiAgICBpZiAoIWRheXMubGVuZ3RoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0YXJ0T2ZNb250aC5kYXlzSW5Nb250aCgpOyBpKyspIGRheXMucHVzaChpKTtcclxuICAgIGlmICgheWVhcnMubGVuZ3RoKSBmb3IgKGxldCBpID0gMTkwMDsgaSA8PSAyMTAwOyBpKyspIHllYXJzLnB1c2goaSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGF5Q2xpY2sgPSAoZCkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkRGF5KG1vbWVudChkLCBcIkREXCIpKTtcclxuICAgICAgICBoYW5kbGVDbGlja09wZW4gJiYgaGFuZGxlQ2xpY2tPcGVuKCk7XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vbnRoQ2xpY2sgPSAobSkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkRGF5KG1vbWVudChtICsgXCIvXCIgKyBzZWxlY3RlZERheS55ZWFyKCksIFwiTU1NTS9ZWVlZXCIpKTtcclxuICAgICAgICBzZXRFeHBhbmRlZE1vbnRocyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlWWVhckNsaWNrID0gKHkpID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZERheShtb21lbnQoc2VsZWN0ZWREYXkubW9udGgoKSArIDEgKyBcIi9cIiArIHksIFwiTU0vWVlZWVwiKSk7XHJcbiAgICAgICAgc2V0RXhwYW5kZWRZZWFycyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5jb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLmNvbHVtbixcclxuICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLnJvb3REYXRlUGlja2VyLCBjbGFzc05hbWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBhbmRlZFllYXJzKSBzZXRFeHBhbmRlZFllYXJzKCFleHBhbmRlZFllYXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4cGFuZGVkTW9udGhzKCFleHBhbmRlZE1vbnRocyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZERheS5mb3JtYXQoXCJNTU1cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcIm1hdGVyaWFsLWljb25zXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5yb3RhdGUxODBjd106IGV4cGFuZGVkTW9udGhzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLnJvdGF0ZTBjY3ddOiAhZXhwYW5kZWRNb250aHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dfZHJvcF9kb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBhbmRlZE1vbnRocykgc2V0RXhwYW5kZWRNb250aHMoIWV4cGFuZGVkTW9udGhzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4cGFuZGVkWWVhcnMoIWV4cGFuZGVkWWVhcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8geWVhclJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwibWF0ZXJpYWwtaWNvbnNcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLnJvdGF0ZTE4MGNjd106IGV4cGFuZGVkWWVhcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMucm90YXRlMGN3XTogIWV4cGFuZGVkWWVhcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dfZHJvcF9kb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWREYXkuZm9ybWF0KFwiWVlZWVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMuZXhwYW5kX19tb250aHMsIHtcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5leHBhbmRlZF9fbW9udGhzXTogZXhwYW5kZWRNb250aHMsXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuY29sbGFwc2VkX19tb250aHNdOiAhZXhwYW5kZWRNb250aHMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vbnRocy5tYXAoKG0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLnNlbGVjdGVkX19kYXRlXTogbSA9PT0gc2VsZWN0ZWREYXkuZm9ybWF0KFwiTU1NTVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJtb250aC1cIiArIG19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1vbnRoQ2xpY2sobSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcy5leHBhbmRfX3llYXJzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuZXhwYW5kZWRfX3llYXJzXTogZXhwYW5kZWRZZWFycyxcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5jb2xsYXBzZWRfX3llYXJzXTogIWV4cGFuZGVkWWVhcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3llYXJzLm1hcCgoeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh5LnRvU3RyaW5nKCkgPT09IHNlbGVjdGVkRGF5LmZvcm1hdChcIllZWVlcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17eWVhclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5zZWxlY3RlZF9fZGF0ZV06XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeS50b1N0cmluZygpID09PSBzZWxlY3RlZERheS5mb3JtYXQoXCJZWVlZXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wieWVhci1cIiArIHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVZZWFyQ2xpY2soeSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5zZWxlY3RlZF9fZGF0ZV06XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeS50b1N0cmluZygpID09PSBzZWxlY3RlZERheS5mb3JtYXQoXCJZWVlZXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wieWVhci1cIiArIHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVZZWFyQ2xpY2soeSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY1Jvb3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3dlZWtEYXlzLm1hcCgoZDogc3RyaW5nKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcImRheS1cIiArIGR9PntkLnN1YnN0cmluZygwLCAxKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZW1wdHkubWFwKChlbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcImVtcHR5LVwiICsgZWx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGVSYW5nZS5tYXAoKGRhdGU6IG1vbWVudC5Nb21lbnQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17XCJkYXktXCIgKyBkYXRlLmRhdGUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhckNlbGwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF5PXtzZWxlY3RlZERheX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEYXlDbGljaz17aGFuZGxlRGF5Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjsiLCJpbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgfSxcclxuICAgIGNvbHVtbjoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBvZmZzZXQ6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjIwcHhcIlxyXG4gICAgfSxcclxuICAgIGhhc0RhdGE6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc2VsZWN0ZWQ6IHtcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgICAgICBjb2xvcjogXCIjZmZmXCJcclxuICAgIH0sXHJcbiAgICB0b2RheToge1xyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICB9LFxyXG4gICAgZGF5OiB7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICB3aWR0aDogXCIyLjVlbVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIyLjVlbVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXRcIixcclxuICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KSkiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9DYWxlbmRhckNlbGwuc3R5bGVzJ1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBEaWFsb2csXHJcbiAgICBEaWFsb2dDb250ZW50LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCBMaXN0T2ZXb3Jrb3V0RGF5Rm9ybSBmcm9tICcuLi8uLi9MaXN0T2ZXb3Jrb3V0RGF5Rm9ybSc7XHJcbmltcG9ydCB7Um9vdFN0YXRlLCBXb3Jrb3V0RGF5RGV0YWlsc30gZnJvbSAnLi4vLi4vLi4vbGliL3R5cGVzJ1xyXG5cclxuXHJcbmludGVyZmFjZSBDYWxlbmRhckNlbGxQcm9wcyB7XHJcbiAgICBkYXRlOiBtb21lbnQuTW9tZW50O1xyXG4gICAgc2VsZWN0ZWREYXk6IGFueTtcclxuICAgIGhhbmRsZURheUNsaWNrOiBGdW5jdGlvblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxlbmRhckNlbGwoe2RhdGUsIHNlbGVjdGVkRGF5LCBoYW5kbGVEYXlDbGlja306IENhbGVuZGFyQ2VsbFByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLndvcmtvdXREYXlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChleDogV29ya291dERheURldGFpbHMpID0+IGV4LmRhdGUgPT09IGRhdGUuZm9ybWF0KFwiRERNTVlZWVlcIikpXHJcblxyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4gc2V0T3Blbih0cnVlKVxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRPcGVuKGZhbHNlKVxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURheUNsaWNrKGRhdGUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcy5kYXksIHtcclxuICAgICAgICAgICAgICAgIFtjbGFzc2VzLnNlbGVjdGVkXTpcclxuICAgICAgICAgICAgICAgIGRhdGUuZm9ybWF0KFwiRERNTVlZWVlcIikgPT09IHNlbGVjdGVkRGF5LmZvcm1hdChcIkRETU1ZWVlZXCIpLFxyXG4gICAgICAgICAgICAgICAgW2NsYXNzZXMudG9kYXldOlxyXG4gICAgICAgICAgICAgICAgZGF0ZS5mb3JtYXQoXCJERE1NWVlZWVwiKSA9PT0gbW9tZW50KCkuZm9ybWF0KFwiRERNTVlZWVlcIiksXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLmhhc0RhdGFdOiBCb29sZWFuKGRhdGEubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgICB9KX0gXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPcGVufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGF0ZS5mb3JtYXQoXCJERFwiKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmNvbHVtbiwgXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9IFxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdE9mV29ya291dERheUZvcm0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbn0iLCJpbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgIH0sXHJcbiAgICBjb2x1bW46IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIHJvdzoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCIyMHB4XCJcclxuICAgIH1cclxufSkpIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vQ3VycmVudFdvcmtvdXRzLnN0eWxlcyc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQgRGlhbG9nQnV0dG9uIGZyb20gXCIuLi9jb21tb24vRGlhbG9nQnV0dG9uL0RpYWxvZ0J1dHRvblwiO1xyXG5pbXBvcnQgV29ya291dERldGFpbHMgZnJvbSAnLi4vV29ya291dERldGFpbHMnXHJcblxyXG5jb25zdCBDdXJyZW50V29ya291dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUud29ya291dClcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLnJvb3QsIGNsYXNzZXMuY29sdW1uKX0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhLm1hcCgodzogYW55LCBpZDogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQnV0dG9uIGtleT17aWR9IGxhYmVsPXt3Lm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0RGV0YWlscyB3b3Jrb3V0PXt3fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dCdXR0b24+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEN1cnJlbnRXb3Jrb3V0IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCBXb3Jrb3V0Rm9ybSBmcm9tICcuLi9Xb3Jrb3V0Rm9ybS9Xb3Jrb3V0Rm9ybSc7XHJcblxyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jb21tb24nO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgQnV0dG9uLFxyXG4gICAgRGlhbG9nLFxyXG4gICAgRGlhbG9nQWN0aW9ucyxcclxuICAgIERpYWxvZ0NvbnRlbnQsXHJcbiAgICBEaWFsb2dDb250ZW50VGV4dCxcclxuICAgIERpYWxvZ1RpdGxlLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IEV4ZXJjaXNlTGlzdCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBcclxuICAgIC8vRGlhbG9nXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVPcGVufT5cclxuICAgICAgICAgICAgICAgICAgICBOZXcgV29ya291dCBUZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImZvcm0tZGlhbG9nLXRpdGxlXCI+RXhlcmNpc2UgTGlzdDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaG9vc2UgZXhlcmNpc2UgZnJvbSB0aGUgbGlzdDpcclxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEZvcm0gaGFuZGxlQ2xvc2U9e2hhbmRsZUNsb3NlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhlcmNpc2VMaXN0OyIsImltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgfSxcclxuICAgIGNvbHVtbjoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBvZmZzZXQ6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjIwcHhcIlxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIlxyXG4gICAgfSwgXHJcbiAgICBib2xkOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCJcclxuICAgIH1cclxufSkpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9MaXN0T2ZXb3Jrb3V0RGF5Rm9ybS5zdHlsZXMnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCAqIGFzIE1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCB7ZXh0ZW5kTW9tZW50fSBmcm9tICdtb21lbnQtcmFuZ2UnXHJcbmNvbnN0IG1vbWVudCA9IGV4dGVuZE1vbWVudChNb21lbnQpXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgSWNvbkJ1dHRvbixcclxuICAgIERpYWxvZyxcclxuICAgIERpYWxvZ0NvbnRlbnRcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBSb290U3RhdGUsIFdvcmtvdXQsIFdvcmtvdXREYXlEZXRhaWxzIH0gZnJvbSAnLi4vLi4vbGliL3R5cGVzJ1xyXG5cclxuaW1wb3J0IFdvcmtvdXREYXlGb3JtIGZyb20gJy4uL1dvcmtvdXREYXlGb3JtJztcclxuXHJcbmludGVyZmFjZSBXb3Jrb3V0Rm9ybVByb3BzIHtcclxuICAgIGRhdGE/OiBhbnk7XHJcbiAgICBkYXRlOiBtb21lbnQuTW9tZW50XHJcblxyXG59XHJcblxyXG5jb25zdCBMaXN0T2ZXb3Jrb3V0RGF5Rm9ybSA9ICh7IGRhdGEsIGRhdGUgfTogV29ya291dEZvcm1Qcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHdvcmtvdXRzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLndvcmtvdXREYXlzKTtcclxuIFxyXG4gICAgY29uc3QgW29wZW5GLCBzZXRPcGVuRl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BlbkVkaXQsIHNldEVkaXRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFssIHVwZGF0ZVN0YXRlXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICBjb25zdCBmb3JjZVVwZGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHVwZGF0ZVN0YXRlKHt9KSwgW10pO1xyXG4gICBcclxuICAgIGNvbnN0IGhhbmRsZU9wZW5GID0gKCkgPT4gc2V0T3BlbkYodHJ1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZUYgPSAoKSA9PiBzZXRPcGVuRihmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVFZGl0T3BlbiA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0RWRpdE9wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlRWRpdENsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEVkaXRPcGVuKGZhbHNlKTtcclxuICAgICAgICBmb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSB3b3Jrb3V0IGJ1dHRvbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZDogYW55KSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnREVMRVRFX1dPUktPVVRfREFZJyxcclxuICAgICAgICAgICAgcGF5bG9hZDogaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLmNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMucm93LFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy50aXRsZSwgXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLmJvbGRcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFdvcmtvdXRzXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsgQm9vbGVhbih3b3Jrb3V0cz8ubGVuZ3RoKSAmJiB3b3Jrb3V0cy5maWx0ZXIoKHc6IFdvcmtvdXREYXlEZXRhaWxzKSA9PiB3LmRhdGUgPT09IGRhdGUuZm9ybWF0KFwiRERNTVlZWVlcIikpLm1hcCgodzogV29ya291dERheURldGFpbHMsIGlkOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUVkaXRPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3cud29ya291dE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3BlbkVkaXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVFZGl0Q2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0RGF5Rm9ybSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VGPXtoYW5kbGVFZGl0Q2xvc2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRlcmlhbC1pY29uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZSh3LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVuRn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0RGF5Rm9ybSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlRj17aGFuZGxlQ2xvc2VGfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT3BlbkZ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEFkZCBXb3Jrb3V0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0T2ZXb3Jrb3V0RGF5Rm9ybTsiLCJpbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiYmFzZWxpbmVcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgIH0sXHJcbiAgICBjb2x1bW46IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIHJvdzoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCIyMHB4XCJcclxuICAgIH0sXHJcbiAgICBvZmZzZXRUb3A6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiXHJcbiAgICB9LFxyXG59KSkiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9Mb2dpbi5zdHlsZXMnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBCdXR0b24sIFxyXG4gICAgVGV4dEZpZWxkXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuaW50ZXJmYWNlIExvZ2luIHtcclxuICAgIGhhbmRsZUNsb3NlTCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oe2hhbmRsZUNsb3NlTH06IExvZ2luKSB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBoYW5kbGVDbG9zZUwoKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gRW1haWxcclxuXHJcblxyXG4gICAgLy8gUGFzc3dvcmRcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmNvbHVtblxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2lnbiBpbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vZmZzZXRUb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub2Zmc2V0VG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIH0sXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImJhc2VsaW5lXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgY29sdW1uOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICByb3c6IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIG9mZnNldDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiXHJcbiAgICB9LFxyXG4gICAgb2Zmc2V0VG9wOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIlxyXG4gICAgfSxcclxufSkpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vUmVnaXN0ZXIuc3R5bGVzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQnV0dG9uLCBcclxuICAgIFRleHRGaWVsZFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmludGVyZmFjZSBSZWdpc3RlciB7XHJcbiAgICBoYW5kbGVDbG9zZVIoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyKHtoYW5kbGVDbG9zZVJ9OiBSZWdpc3Rlcikge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaGFuZGxlQ2xvc2VSKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEVtYWlsXHJcblxyXG5cclxuICAgIC8vIFBhc3N3b3JkXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5jb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5jb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlNpZ24gdXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub2Zmc2V0VG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZnNldFRvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgfSxcclxuICAgIGNvbHVtbjoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBvZmZzZXQ6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjIwcHhcIlxyXG4gICAgfVxyXG59KSkiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vV29ya291dERheUZvcm0uc3R5bGVzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQge3Y0fSBmcm9tICd1dWlkJ1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEJ1dHRvbixcclxuICAgIEZvcm1Db250cm9sLFxyXG4gICAgSW5wdXRMYWJlbCxcclxuICAgIE1lbnVJdGVtLFxyXG4gICAgU2VsZWN0LFxyXG4gICAgVGV4dEZpZWxkXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBSb290U3RhdGUsIFdvcmtvdXQsIFdvcmtvdXREYXlEZXRhaWxzLCBXb3Jrb3V0RGF5RXhlcmNpc2VEZXRhaWxzIH0gZnJvbSBcIi4uLy4uL2xpYi90eXBlc1wiO1xyXG5cclxuaW50ZXJmYWNlIFdvcmtvdXREYXlGb3JtIHtcclxuICAgIGRhdGE/OiBXb3Jrb3V0RGF5RGV0YWlscztcclxuICAgIGRhdGU6IG1vbWVudC5Nb21lbnQ7XHJcbiAgICBoYW5kbGVDbG9zZUY6IEZ1bmN0aW9uXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtvdXREYXlGb3JtKHsgZGF0YSwgZGF0ZSwgaGFuZGxlQ2xvc2VGIH06IFdvcmtvdXREYXlGb3JtKSB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgZWRpdCA9IEJvb2xlYW4oZGF0YSk7XHJcbiAgICBjb25zdCB3b3Jrb3V0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS53b3Jrb3V0KVxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZTogV29ya291dERheURldGFpbHMgPSB7XHJcbiAgICAgICAgaWQ6IGRhdGE/LmlkIHx8IHY0KCksXHJcbiAgICAgICAgd29ya291dElEOmRhdGE/LndvcmtvdXRJRCB8fCB3b3Jrb3V0c1swXT8uaWQsXHJcbiAgICAgICAgd29ya291dE5hbWU6IGRhdGE/LndvcmtvdXROYW1lIHx8IHdvcmtvdXRzWzBdPy5uYW1lLFxyXG4gICAgICAgIGRhdGU6IGRhdGE/LmRhdGUgfHwgZGF0ZS5mb3JtYXQoXCJERE1NWVlZWVwiKSxcclxuICAgICAgICBleGVyY2lzZXM6IHdvcmtvdXRzWzBdPy5leGVyY2lzZXMubWFwKChleDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICBuYW1lOiBleC5uYW1lLFxyXG4gICAgICAgICAgICBib2R5UGFydDogZXguYm9keVBhcnQsXHJcbiAgICAgICAgICAgIHNldHM6IDAsXHJcbiAgICAgICAgICAgIHJlcHM6IDAsXHJcbiAgICAgICAgICAgIHdlaWdodDogMCxcclxuICAgICAgICAgICAgbm90ZTogXCJcIlxyXG4gICAgICAgIH0pKSBcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGV0IFtzZWxlY3RlZE5hbWUsIHNldFNlbGVjdGVkTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KGluaXRpYWxTdGF0ZS53b3Jrb3V0TmFtZSlcclxuICAgIGxldCBbd29ya291dERheUZvcm1EYXRhLCBzZXRXb3Jrb3V0RGF5Rm9ybURhdGFdID0gdXNlU3RhdGU8V29ya291dERheURldGFpbHM+KGRhdGEgPyBkYXRhIDogaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICAvLyBTZWxlY3RcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8eyB2YWx1ZTogdW5rbm93biB9PikgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkTmFtZShldmVudC50YXJnZXQudmFsdWUgYXMgc3RyaW5nKTtcclxuICAgICAgICBzZXRXb3Jrb3V0RGF5Rm9ybURhdGEoe1xyXG4gICAgICAgICAgICBpZDogd29ya291dHMuZmlsdGVyKCh3OiBXb3Jrb3V0KSA9PiB3Lm5hbWUgPT09IGV2ZW50LnRhcmdldC52YWx1ZSBhcyBzdHJpbmcpWzBdLmlkLFxyXG4gICAgICAgICAgICB3b3Jrb3V0SUQ6IHdvcmtvdXRzLmZpbHRlcigodzogV29ya291dCkgPT4gdy5uYW1lID09PSBldmVudC50YXJnZXQudmFsdWUgYXMgc3RyaW5nKVswXS5pZCxcclxuICAgICAgICAgICAgd29ya291dE5hbWU6IHdvcmtvdXRzLmZpbHRlcigodzogV29ya291dCkgPT4gdy5uYW1lID09PSBldmVudC50YXJnZXQudmFsdWUgYXMgc3RyaW5nKVswXS5uYW1lLFxyXG4gICAgICAgICAgICBkYXRlOiBkYXRlLmZvcm1hdChcIkRETU1ZWVlZXCIpLFxyXG4gICAgICAgICAgICBleGVyY2lzZXM6IHdvcmtvdXRzLmZpbHRlcigodzogV29ya291dCkgPT4gdy5uYW1lID09PSBldmVudC50YXJnZXQudmFsdWUgYXMgc3RyaW5nKVswXS5leGVyY2lzZXMubWFwKChleDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZXgubmFtZSxcclxuICAgICAgICAgICAgICAgIGJvZHlQYXJ0OiBleC5ib2R5UGFydCxcclxuICAgICAgICAgICAgICAgIHNldHM6IDAsXHJcbiAgICAgICAgICAgICAgICByZXBzOiAwLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgbm90ZTogXCJcIlxyXG4gICAgICAgICAgICB9KSkgXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYoZWRpdCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkVESVRfV09SS09VVF9EQVlcIixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHdvcmtvdXREYXlGb3JtRGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQUREX1dPUktPVVRfREFZXCIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB3b3Jrb3V0RGF5Rm9ybURhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBoYW5kbGVDbG9zZUYoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIndvcmtvdXRzXCIsIHdvcmtvdXRzWzBdPy5pZClcclxuICAgIGNvbnNvbGUubG9nKFwid29ya291dERheUZvcm1EYXRhXCIsIHdvcmtvdXREYXlGb3JtRGF0YSlcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxzcGFuPntlZGl0ID8gXCJFRElUIFdPUktPVVRcIiA6IFwiQUREIFdPUktPVVRcIn08L3NwYW4+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZTogYW55KSA9PiBoYW5kbGVTdWJtaXQoZSl9PiAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmNvbHVtblxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGUuZm9ybWF0KFwiREQuTU0uWVlZWVwiKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbD5Xb3Jrb3V0PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya291dHMubWFwKChwb3M6IFdvcmtvdXQsIGlkOiBhbnkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cG9zLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuY29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmNvbHVtbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Qm9vbGVhbih3b3Jrb3V0RGF5Rm9ybURhdGE/LmV4ZXJjaXNlcz8ubGVuZ3RoKSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXREYXlGb3JtRGF0YS5leGVyY2lzZXMubWFwKChleDogV29ya291dERheUV4ZXJjaXNlRGV0YWlscykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtleC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuY29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMucm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntleC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9e2NsYXNzZXMub2Zmc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2V4LndlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmtvdXREYXlGb3JtRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLndvcmtvdXREYXlGb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VzOiB3b3Jrb3V0RGF5Rm9ybURhdGEuZXhlcmNpc2VzLm1hcCgoZWw6V29ya291dERheUV4ZXJjaXNlRGV0YWlscykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWwubmFtZSA9PT0gZXgubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5lbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9e2NsYXNzZXMub2Zmc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXBzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtleC5yZXBzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29ya291dERheUZvcm1EYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ud29ya291dERheUZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZXM6IHdvcmtvdXREYXlGb3JtRGF0YS5leGVyY2lzZXMubWFwKChlbDpXb3Jrb3V0RGF5RXhlcmNpc2VEZXRhaWxzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbC5uYW1lID09PSBleC5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcHM6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5lbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9e2NsYXNzZXMub2Zmc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZXRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtleC5zZXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29ya291dERheUZvcm1EYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ud29ya291dERheUZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZXM6IHdvcmtvdXREYXlGb3JtRGF0YS5leGVyY2lzZXMubWFwKChlbDpXb3Jrb3V0RGF5RXhlcmNpc2VEZXRhaWxzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbC5uYW1lID09PSBleC5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHM6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5lbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWRpdCA/IFwiRURJVFwiIDogXCJBRERcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0gIiwiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIlxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIlxyXG4gICAgfSxcclxuICAgIGNvbHVtbjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICB9LFxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxyXG4gICAgfSxcclxuICAgIG9mZnNldDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiXHJcbiAgICB9LCBcclxuICAgIGJvbGQ6IHtcclxuICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIlxyXG4gICAgfVxyXG59KSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL1dvcmtvdXREZXRhaWxzLnN0eWxlcyc7XHJcblxyXG5pbXBvcnQgd29ya291dExpc3QgZnJvbSAnLi4vLi4vdGVtcC93b3Jrb3V0TGlzdC5qc29uJztcclxuXHJcbmltcG9ydCBPcHRpb25zTWVudSBmcm9tICcuLi9jb21tb24vT3B0aW9uc01lbnUnO1xyXG5pbXBvcnQgeyBXb3Jrb3V0IH0gZnJvbSAnLi4vLi4vbGliL3R5cGVzJztcclxuaW1wb3J0IHsgRXhlcmNpc2UgfSBmcm9tICcuLi8uLi90ZW1wL2ludGVyZmFjZSc7XHJcblxyXG5pbnRlcmZhY2UgUm9vdFN0YXRlIHtcclxuICAgIHdvcmtvdXQ6IGFueVxyXG59O1xyXG5cclxuaW50ZXJmYWNlIFdvcmtvdXREZXRhaWxzUHJvcHMge1xyXG4gICAgd29ya291dD86IGFueVxyXG59O1xyXG5cclxuY29uc3QgV29ya291dERldGFpbHMgPSAoe3dvcmtvdXR9OiBXb3Jrb3V0RGV0YWlsc1Byb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgYm9keVBhcnRzID0gW1wiY2hlc3RcIiwgXCJiYWNrXCIsIFwiYXJtXCIsIFwidHJpY2Vwc1wiLCBcImJpY2Vwc1wiLCBcImxlZ3NcIiwgXCJjYWxmZXNcIiwgXCJhYnNcIl07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLnJvb3QpfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5jb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLnJvdyxcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMudGl0bGUsIFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5ib2xkXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57d29ya291dD8ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj48T3B0aW9uc01lbnUgd29ya291dD17d29ya291dH0vPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIEJvZHlwYXJ0IGl0ZXJhdGlvbiAqL31cclxuICAgICAgICAgICAge2JvZHlQYXJ0cy5tYXAoKGI6IGFueSwgaWQ6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgQm9vbGVhbih3b3Jrb3V0LmV4ZXJjaXNlcz8ubGVuZ3RoKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmNvbnRhaW5lciwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmNvbHVtbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMub2Zmc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ISF3b3Jrb3V0LmV4ZXJjaXNlcy5maWx0ZXIoKHc6IEV4ZXJjaXNlKSA9PiB3LmJvZHlQYXJ0ID09PSBiKS5sZW5ndGggJiYgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMuYm9sZCl9PntifTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXQuZXhlcmNpc2VzLmZpbHRlcigoZXg6IGFueSkgPT4gZXguYm9keVBhcnQgPT09IGIpLm1hcCgoYzogYW55LCBpZDogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5jb2x1bW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLm9mZnNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2MubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya291dERldGFpbHM7IiwiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCJcclxuICAgIH0sXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjMwcHhcIlxyXG4gICAgfSxcclxuICAgIGNvbHVtbjoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBvZmZzZXQ6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjIwcHhcIlxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIlxyXG4gICAgfSwgXHJcbiAgICBib2xkOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCJcclxuICAgIH1cclxufSkpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vV29ya291dEZvcm0uc3R5bGVzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQgd29ya291dExpc3QgZnJvbSAnLi4vLi4vdGVtcC93b3Jrb3V0TGlzdC5qc29uJztcclxuLy8gaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuLi8uLi90ZW1wL2luaXRpYWxTdGF0ZS5qc29uJ1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEJ1dHRvbixcclxuICAgIENoZWNrYm94LFxyXG4gICAgVGV4dEZpZWxkXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuaW1wb3J0IHt2NH0gZnJvbSAndXVpZCdcclxuXHJcbmludGVyZmFjZSBXb3Jrb3V0Rm9ybVByb3BzIHtcclxuICAgIGhhbmRsZUNsb3NlOiBGdW5jdGlvbjtcclxuICAgIGRhdGE/OiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IFdvcmtvdXRGb3JtID0gKHtoYW5kbGVDbG9zZSwgZGF0YX06IFdvcmtvdXRGb3JtUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGVkaXQgPSBCb29sZWFuKGRhdGEpXHJcblxyXG5cclxuICAgIGNvbnN0IGJvZHlQYXJ0cyA9IFtcImNoZXN0XCIsIFwiYmFja1wiLCBcImFybXNcIiwgXCJ0cmljZXBzXCIsIFwiYmljZXBzXCIsIFwibGVnc1wiLCBcImNhbGZlc1wiLCBcImFic1wiXTtcclxuICAgIGNvbnN0IGV4ZXJjaXNlczogQXJyYXk8e25hbWU6IHN0cmluZzsgYm9keVBhcnQ6IHN0cmluZ30+ID0gd29ya291dExpc3Q7XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgaWQ6IHY0KCksXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBleGVyY2lzZXM6IFtdXHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBkYXRhXHJcbiAgICBsZXQgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KGRhdGEgPyBkYXRhIDogaW5pdGlhbFN0YXRlKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7dmFsdWU6IHVua25vd247IG5hbWU6IHN0cmluZ30+KSA9PiB7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYoZWRpdCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnRURJVF9XT1JLT1VUJyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGZvcm1EYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdBRERfV09SS09VVCcsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBmb3JtRGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxzcGFuPntlZGl0ID8gXCJFRElUIFdPUktPVVRcIiA6IFwiQUREIFdPUktPVVRcIn08L3NwYW4+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZTogYW55KSA9PiBoYW5kbGVTdWJtaXQoZSl9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQm9keXBhcnQgaXRlcmF0aW9uICovfVxyXG4gICAgICAgICAgICAgICAge2JvZHlQYXJ0cy5tYXAoKGI6IGFueSwgaWQ6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5jb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmNvbHVtblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogQm9keXBhcnQgbmFtZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMudGl0bGUsIGNsYXNzZXMuYm9sZCApfT57Yn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtleGVyY2lzZXMuZmlsdGVyKChleDogYW55KSA9PiBleC5ib2R5UGFydCA9PT0gYikubWFwKChleDogYW55LCBpZHg6YW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm1EYXRhLmV4ZXJjaXNlcy5tYXAoKGVsOiBhbnkpID0+IGVsLm5hbWUpLmluY2x1ZGVzKGV4Lm5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtleC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlczogWy4uLmZvcm1EYXRhLmV4ZXJjaXNlcywge25hbWU6IGV4Lm5hbWUsIGJvZHlQYXJ0OiBifV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VzOiBmb3JtRGF0YS5leGVyY2lzZXMuZmlsdGVyKChleF86IGFueSkgPT4gZXhfLm5hbWUgIT09IGV4Lm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntleC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZWRpdCA/IFwiRURJVFwiIDogXCJBRERcIn1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtvdXRGb3JtOyIsImltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgfSxcclxuICAgIGNvbHVtbjoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBvZmZzZXQ6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjIwcHhcIlxyXG4gICAgfVxyXG59KSkiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vRGlhbG9nQnV0dG9uLnN0eWxlcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuXHJcbmludGVyZmFjZSBEaWFsb2dCdXR0b25Qcm9wcyB7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcbmNvbnN0IERpYWxvZ0J1dHRvbiA9ICh7bGFiZWwsIGNoaWxkcmVufTogRGlhbG9nQnV0dG9uUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICAvL0RpYWxvZ1xyXG4gICAgICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgIC8vUm91dGVyXHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIC8vRGF0YVxyXG5cclxuICAgICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcy5yb290LCBjbGFzc2VzLmNvbHVtbil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsYWJlbH0gY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMuY29udGFpbmVyKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nQnV0dG9uIiwiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIlxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgIH0sXHJcbiAgICBjb2x1bW46IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIHJvdzoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICBib3R0b206XCIwXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3RhcnRcIixcclxuICAgIH0sXHJcbiAgICBvZmZzZXQ6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjIwcHhcIlxyXG4gICAgfVxyXG59KSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vRm9vdGVyLnN0eWxlcydcclxuXHJcbmZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMuY29udGFpbmVyLCBjbGFzc2VzLnJvdywgY2xhc3Nlcy5mb290ZXIpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj5GaXRVcDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+Q29udGFjdCB1czo8L2gzPlxyXG4gICAgICAgICAgICA8cD4oKzY2KSA2NjYgNjY2IDY2NjwvcD5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzphbmRyemVqLnBydXN6eW5za2k5MEBnbWFpbC5jb21cIj5hbmRyemVqLnBydXN6eW5za2k5MEBnbWFpbC5jb208L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIiwiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAlXCJcclxuICAgIH0sXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcclxuICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxyXG4gICAgfSxcclxuICAgIGNvbHVtbjoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBvZmZzZXQ6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjIwcHhcIlxyXG4gICAgfVxyXG59KSkiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vTmF2YmFyLnN0eWxlcyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQge1xyXG4gIEFwcEJhcixcclxuICBCdXR0b24sXHJcbiAgVGFicyxcclxuICBUYWIsXHJcbiAgRGlhbG9nLFxyXG4gIERpYWxvZ0NvbnRlbnQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuaW1wb3J0IEN1cnJlbnRXb3Jrb3V0IGZyb20gJy4uLy4uL0N1cnJlbnRXb3Jrb3V0L0N1cnJlbnRXb3Jrb3V0cyc7XHJcbmltcG9ydCBFeGVyY2lzZUxpc3QgZnJvbSAnLi4vLi4vRXhlcmNpc2VMaXN0L0V4ZXJjaXNlTGlzdCc7XHJcbmltcG9ydCBDYWxlbmRhciBmcm9tICcuLi8uLi9DYWxlbmRhcic7XHJcblxyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vLi4vTG9naW4nO1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vLi4vUmVnaXN0ZXInO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgLy8gVGFic1xyXG4gIGNvbnN0IFtvcGVuTCwgc2V0T3BlbkxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuUiwgc2V0T3BlblJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBhbnksIG5ld1RhYjogYW55KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFRhYihuZXdUYWIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkwgPSAoKSA9PiBzZXRPcGVuTCh0cnVlKTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUwgPSAoKSA9PiBzZXRPcGVuTChmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlT3BlblIgPSAoKSA9PiBzZXRPcGVuUih0cnVlKTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVIgPSAoKSA9PiBzZXRPcGVuUihmYWxzZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICA8QXBwQmFyIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBwb3NpdGlvbj1cInN0YXRpY1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIGNsYXNzZXMuY29udGFpbmVyLFxyXG4gICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgIDxoMT5GaXRVcDwvaDE+XHJcbiAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVGFifVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJDdXJyZW50IFdvcmtvdXRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJFeGVyY2lzZSBMaXN0XCIgLz5cclxuICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiQ2FsZW5kYXJcIiAvPlxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPERpYWxvZyBcclxuICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbkx9IFxyXG4gICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUx9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8TG9naW4gXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VMPXtoYW5kbGVDbG9zZUx9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZnNldH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW5MfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9nZyBJblxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxEaWFsb2cgXHJcbiAgICAgICAgICAgICAgICAgIG9wZW49e29wZW5SfSBcclxuICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VSfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8UmVnaXN0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VSPXtoYW5kbGVDbG9zZVJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub2Zmc2V0fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT3BlblJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIHsgc2VsZWN0ZWRUYWIgPT09IDAgJiYgPEN1cnJlbnRXb3Jrb3V0IC8+fVxyXG4gICAgICAgIHsgc2VsZWN0ZWRUYWIgPT09IDEgJiYgPEV4ZXJjaXNlTGlzdCAvPn1cclxuICAgICAgICB7IHNlbGVjdGVkVGFiID09PSAyICYmIDxDYWxlbmRhciAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IE5hdmJhclxyXG4iLCJpbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgIH0sXHJcbiAgICBjb2x1bW46IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIHJvdzoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCIyMHB4XCJcclxuICAgIH1cclxufSkpICIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vT3B0aW9uc01lbnUuc3R5bGVzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcblxyXG5pbXBvcnQgV29ya291dEZvcm0gZnJvbSAnLi4vLi4vV29ya291dEZvcm0vV29ya291dEZvcm0nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wdGlvbnNNZW51ICh7d29ya291dH06YW55KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgWywgdXBkYXRlU3RhdGVdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgZm9yY2VVcGRhdGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB1cGRhdGVTdGF0ZSh7fSksIFtdKTtcclxuXHJcbiAgICAvLyBNZW51XHJcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBSZW1vdmUgd29ya291dCBidXR0b24gICAgXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ0RFTEVURV9XT1JLT1VUJyxcclxuICAgICAgICAgICAgcGF5bG9hZDogaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgXHJcbiAgICAvLyBFZGl0IHdvcmtvdXQgYnV0dG9uXHJcbiAgICBjb25zdCBbb3BlbkVkaXRXb3Jrb3V0LCBzZXRPcGVuRWRpdFdvcmtvdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUVkaXRPcGVuID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIHNldE9wZW5FZGl0V29ya291dCh0cnVlKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUVkaXRDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuRWRpdFdvcmtvdXQoZmFsc2UpO1xyXG4gICAgICAgIGZvcmNlVXBkYXRlKCk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJzaW1wbGUtbWVudVwiIFxyXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bW9yZV92ZXJ0PC9zcGFuPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICBpZD1cInNpbXBsZS1tZW51XCJcclxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cclxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHdvcmtvdXQuaWQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0T3Blbih3b3Jrb3V0LmlkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8RGlhbG9nIFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJ0cmFuc2l0aW9uLWRpYWxvZy10aXRsZVwiK3dvcmtvdXQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17b3BlbkVkaXRXb3Jrb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUVkaXRDbG9zZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRGb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2U9e3NldE9wZW5FZGl0V29ya291dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3dvcmtvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvTWVudT5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgfSxcclxuICAgIGNvbHVtbjoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgICAgIGJvdHRvbTpcIjBcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzdGFydFwiLFxyXG4gICAgfSxcclxuICAgIG9mZnNldDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiXHJcbiAgICB9LFxyXG4gICAgZ2xhc3NNb3JwaGlzbToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSggMjU1LCAyNTUsIDI1NSwgMC40IClcIixcclxuICAgICAgICBib3hTaGFkb3c6IFwiMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3IClcIixcclxuICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKCA0cHggKVwiLFxyXG4gICAgICAgIHdlYmtpdEJhY2tkcm9wRmlsdGVyOiBcImJsdXIoIDRweCApXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKVwiXHJcbiAgICB9XHJcbn0pKTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50LXJhbmdlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=