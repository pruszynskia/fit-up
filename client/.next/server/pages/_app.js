(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

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

/***/ "./src/components/PageLayout.tsx":
/*!***************************************!*\
  !*** ./src/components/PageLayout.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PageLayout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/Navbar */ "./src/components/common/Navbar/index.tsx");
/* harmony import */ var _common_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/Footer */ "./src/components/common/Footer/index.tsx");

var _jsxFileName = "C:\\Users\\aprus\\coding\\fit-up-app\\client\\src\\components\\PageLayout.tsx";



function PageLayout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      display: "grid"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Footer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

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
    alignItems: "center",
    justifyContent: "space-between"
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Login */ "./src/components/Login/index.tsx");
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Register */ "./src/components/Register/index.tsx");

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

  const handleOpenL = () => setOpenL(true);

  const handleCloseL = () => setOpenL(false);

  const handleOpenR = () => setOpenR(true);

  const handleCloseR = () => setOpenR(false);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.AppBar, {
    position: "static",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.root,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "FitUp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__.default, {
          open: openL,
          onClose: handleCloseL,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__.default, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Login__WEBPACK_IMPORTED_MODULE_4__.default, {
              handleCloseL: handleCloseL
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
          className: classes.offset,
          variant: "contained",
          color: "secondary",
          size: "small",
          onClick: handleOpenL,
          children: "Logg In"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__.default, {
          open: openR,
          onClose: handleCloseR,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__.default, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Register__WEBPACK_IMPORTED_MODULE_5__.default, {
              handleCloseR: handleCloseR
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
          className: classes.offset,
          variant: "contained",
          color: "secondary",
          size: "small",
          onClick: handleOpenR,
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/common/Navbar/index.tsx":
/*!************************************************!*\
  !*** ./src/components/common/Navbar/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar */ "./src/components/common/Navbar/Navbar.tsx");


/***/ }),

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
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageLayout */ "./src/components/PageLayout.tsx");

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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageLayout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_material-ui_core_esm_styles_index_js","vendors-node_modules_material-ui_core_esm_Button_index_js-node_modules_material-ui_core_esm_D-7dd0df"], function() { return __webpack_exec__("./src/pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4uc3R5bGVzLnRzIiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC8uL3NyYy9jb21wb25lbnRzL1BhZ2VMYXlvdXQudHN4Iiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvY29tcG9uZW50cy9SZWdpc3Rlci9SZWdpc3Rlci5zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC8uL3NyYy9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyLnRzeCIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0Zvb3Rlci9Gb290ZXIuc3R5bGVzLnRzIiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vRm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9OYXZiYXIvTmF2YmFyLnN0eWxlcy50cyIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL05hdmJhci9OYXZiYXIudHN4Iiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9maXQtdXAtYXBwLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovL2ZpdC11cC1hcHAvLi9zcmMvcmVkdXgvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiIiwid2VicGFjazovL2ZpdC11cC1hcHAvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovL2ZpdC11cC1hcHAvZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly9maXQtdXAtYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vZml0LXVwLWFwcC9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovL2ZpdC11cC1hcHAvZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY29udGFpbmVyIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImNvbHVtbiIsInJvdyIsIm9mZnNldCIsIm1hcmdpbkxlZnQiLCJvZmZzZXRUb3AiLCJtYXJnaW5Ub3AiLCJMb2dpbiIsImhhbmRsZUNsb3NlTCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NuYW1lcyIsInRhcmdldCIsInZhbHVlIiwiUGFnZUxheW91dCIsImNoaWxkcmVuIiwiUmVnaXN0ZXIiLCJoYW5kbGVDbG9zZVIiLCJoZWlnaHQiLCJmbGV4V3JhcCIsImZvb3RlciIsInBvc2l0aW9uIiwibGVmdCIsImJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwid2lkdGgiLCJGb290ZXIiLCJOYXZiYXIiLCJvcGVuTCIsInNldE9wZW5MIiwib3BlblIiLCJzZXRPcGVuUiIsImhhbmRsZU9wZW5MIiwiaGFuZGxlT3BlblIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiQUREX1dPUktPVVQiLCJERUxFVEVfV09SS09VVCIsIkVESVRfV09SS09VVCIsIkFERF9XT1JLT1VUX0RBWSIsIkVESVRfV09SS09VVF9EQVkiLCJERUxFVEVfV09SS09VVF9EQVkiLCJpbml0aWFsU3RhdGUiLCJ3b3Jrb3V0Iiwid29ya291dERheXMiLCJ0ZXN0Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpZCIsInY0IiwicGF5bG9hZCIsImZpbHRlciIsImRhdGEiLCJtYXAiLCJlZGl0IiwiY3JlYXRlU3RvcmUiLCJkZXZUb29sc0VuaGFuY2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLCtEQUFlQSxvRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDaENDLE1BQUksRUFBRTtBQUNGQyxXQUFPLEVBQUUsTUFEUDtBQUVGQyxpQkFBYSxFQUFFO0FBRmIsR0FEMEI7QUFLaENDLFdBQVMsRUFBRTtBQUNQRixXQUFPLEVBQUUsTUFERjtBQUVQRyxrQkFBYyxFQUFFLFFBRlQ7QUFHUEMsY0FBVSxFQUFFLFVBSEw7QUFJUEMsV0FBTyxFQUFFO0FBSkYsR0FMcUI7QUFXaENDLFFBQU0sRUFBRTtBQUNKTCxpQkFB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Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIH0sXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImJhc2VsaW5lXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgY29sdW1uOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICByb3c6IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIG9mZnNldDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiXHJcbiAgICB9LFxyXG4gICAgb2Zmc2V0VG9wOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIlxyXG4gICAgfSxcclxufSkpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vTG9naW4uc3R5bGVzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQnV0dG9uLCBcclxuICAgIFRleHRGaWVsZFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmludGVyZmFjZSBMb2dpbiB7XHJcbiAgICBoYW5kbGVDbG9zZUwoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHtoYW5kbGVDbG9zZUx9OiBMb2dpbikge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaGFuZGxlQ2xvc2VMKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEVtYWlsXHJcblxyXG5cclxuICAgIC8vIFBhc3N3b3JkXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5jb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5jb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlNpZ24gaW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub2Zmc2V0VG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZnNldFRvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwge1JlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tbW9uL05hdmJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbW1vbi9Gb290ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VMYXlvdXQoe2NoaWxkcmVufToge2NoaWxkcmVuOiBSZWFjdE5vZGV9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCJcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIH1cclxuIiwiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIH0sXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImJhc2VsaW5lXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgY29sdW1uOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICByb3c6IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIG9mZnNldDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiXHJcbiAgICB9LFxyXG4gICAgb2Zmc2V0VG9wOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIlxyXG4gICAgfSxcclxufSkpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vUmVnaXN0ZXIuc3R5bGVzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQnV0dG9uLCBcclxuICAgIFRleHRGaWVsZFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmludGVyZmFjZSBSZWdpc3RlciB7XHJcbiAgICBoYW5kbGVDbG9zZVIoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyKHtoYW5kbGVDbG9zZVJ9OiBSZWdpc3Rlcikge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaGFuZGxlQ2xvc2VSKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEVtYWlsXHJcblxyXG5cclxuICAgIC8vIFBhc3N3b3JkXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5jb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5jb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlNpZ24gdXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub2Zmc2V0VG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZnNldFRvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCJcclxuICAgIH0sXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICB9LFxyXG4gICAgY29sdW1uOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICByb3c6IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgbGVmdDogXCIwXCIsXHJcbiAgICAgICAgYm90dG9tOlwiMFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInN0YXJ0XCIsXHJcbiAgICB9LFxyXG4gICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCIyMHB4XCJcclxuICAgIH1cclxufSkpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL0Zvb3Rlci5zdHlsZXMnXHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLmNvbnRhaW5lciwgY2xhc3Nlcy5yb3csIGNsYXNzZXMuZm9vdGVyKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDI+Rml0VXA8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPkNvbnRhY3QgdXM6PC9oMz5cclxuICAgICAgICAgICAgPHA+KCs2NikgNjY2IDY2NiA2NjY8L3A+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86YW5kcnplai5wcnVzenluc2tpOTBAZ21haWwuY29tXCI+YW5kcnplai5wcnVzenluc2tpOTBAZ21haWwuY29tPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiIsImltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxuICAgIH0sXHJcbiAgICBjb2x1bW46IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIHJvdzoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCIyMHB4XCJcclxuICAgIH1cclxufSkpIiwiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9OYXZiYXIuc3R5bGVzJztcclxuaW1wb3J0IHtcclxuICBBcHBCYXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZydcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi8uLi9Mb2dpbidcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4uLy4uL1JlZ2lzdGVyJ1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAvLyBUYWJzXHJcbiAgY29uc3QgW29wZW5MLCBzZXRPcGVuTF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW29wZW5SLCBzZXRPcGVuUl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5MID0gKCkgPT4gc2V0T3BlbkwodHJ1ZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VMID0gKCkgPT4gc2V0T3BlbkwoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5SID0gKCkgPT4gc2V0T3BlblIodHJ1ZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VSID0gKCkgPT4gc2V0T3BlblIoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8aDE+Rml0VXA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxEaWFsb2cgXHJcbiAgICAgICAgICAgICAgICAgIG9wZW49e29wZW5MfSBcclxuICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VMfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPExvZ2luIFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlTD17aGFuZGxlQ2xvc2VMfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vZmZzZXR9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPcGVuTH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExvZ2cgSW5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8RGlhbG9nIFxyXG4gICAgICAgICAgICAgICAgICBvcGVuPXtvcGVuUn0gXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlUn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFJlZ2lzdGVyIFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlUj17aGFuZGxlQ2xvc2VSfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZnNldH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW5SfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBOYXZiYXJcclxuIiwiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5cclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUxheW91dCc7XHJcblxyXG4vLyBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSkpO1xyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPFBhZ2VMYXlvdXQ+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1BhZ2VMYXlvdXQ+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iLCJleHBvcnQgY29uc3QgQUREX1dPUktPVVQgPSAnQUREX1dPUktPVVQnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1dPUktPVVQgPSAnREVMRVRFX1dPUktPVVQnO1xyXG5leHBvcnQgY29uc3QgRURJVF9XT1JLT1VUPSAnRURJVF9XT1JLT1VUJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfV09SS09VVF9EQVkgPSBcIkFERF9XT1JLT1VUX0RBWVwiXHJcbmV4cG9ydCBjb25zdCBFRElUX1dPUktPVVRfREFZID0gXCJFRElUX1dPUktPVVRfREFZXCJcclxuZXhwb3J0IGNvbnN0IERFTEVURV9XT1JLT1VUX0RBWSA9IFwiREVMRVRFX1dPUktPVVRfREFZXCIiLCJpbXBvcnQge1xyXG4gICAgQUREX1dPUktPVVQsXHJcbiAgICBBRERfV09SS09VVF9EQVksXHJcbiAgICBERUxFVEVfV09SS09VVCxcclxuICAgIERFTEVURV9XT1JLT1VUX0RBWSxcclxuICAgIEVESVRfV09SS09VVCxcclxuICAgIEVESVRfV09SS09VVF9EQVlcclxufSBmcm9tICcuLi9hY3Rpb25UeXBlcyc7XHJcblxyXG5pbXBvcnQge3Y0fSBmcm9tICd1dWlkJztcclxuXHJcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uLy4uL3NyYy90ZW1wL3dvcmtvdXRMaXN0Lmpzb24nXHJcbmltcG9ydCBXb3Jrb3V0RGV0YWlsc1N0eWxlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dvcmtvdXREZXRhaWxzL1dvcmtvdXREZXRhaWxzLnN0eWxlcyc7XHJcbmltcG9ydCB7Um9vdFN0YXRlLCBXb3Jrb3V0RGF5RGV0YWlsc30gZnJvbSAnLi4vLi4vbGliL3R5cGVzJ1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBSb290U3RhdGUgPSB7XHJcbiAgICB3b3Jrb3V0OiBbXSxcclxuICAgIHdvcmtvdXREYXlzOiBbXSxcclxuICAgIHRlc3Q6IFtdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvb3RSZWR1Y2VyKHN0YXRlOiBSb290U3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9XT1JLT1VUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHdvcmtvdXQ6IFsuLi5zdGF0ZS53b3Jrb3V0LCB7aWQ6IHY0KCksIC4uLmFjdGlvbi5wYXlsb2FkfV1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBERUxFVEVfV09SS09VVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB3b3Jrb3V0OiBcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS53b3Jrb3V0LmZpbHRlcigoZGF0YTogYW55KSA9PiBkYXRhLmlkICE9PSBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBFRElUX1dPUktPVVQ6IHtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB3b3Jrb3V0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLndvcmtvdXQubWFwKChlZGl0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVkaXQuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX1dPUktPVVRfREFZOntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgd29ya291dERheXM6IFsuLi5zdGF0ZS53b3Jrb3V0RGF5cywge2lkOnY0KCksIC4uLmFjdGlvbi5wYXlsb2FkfV1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBERUxFVEVfV09SS09VVF9EQVk6e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB3b3Jrb3V0RGF5czogXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUud29ya291dERheXMuZmlsdGVyKChkYXRhOiBhbnkpID0+IGRhdGEuaWQgIT09IGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBFRElUX1dPUktPVVRfREFZOntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgd29ya291dERheXM6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUud29ya291dERheXMubWFwKCh3b3Jrb3V0OiBXb3Jrb3V0RGF5RGV0YWlscykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod29ya291dC5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3b3Jrb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgXCJURVNUX0FDVElPTl9HRVRfREFUQVwiOiBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdGVzdDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIFwiVEVTVF9BQ1RJT05fQUREX0RBVEFcIjogXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRlc3Q6IFsuLi5zdGF0ZS50ZXN0LCBhY3Rpb24ucGF5bG9hZF1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHsgZGV2VG9vbHNFbmhhbmNlciB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgZGV2VG9vbHNFbmhhbmNlcih7fSkpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=