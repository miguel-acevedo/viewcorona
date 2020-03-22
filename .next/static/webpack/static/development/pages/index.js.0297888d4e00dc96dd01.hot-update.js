webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Timeline.tsx":
/*!*********************************!*\
  !*** ./components/Timeline.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TimelineItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TimelineItem */ "./components/TimelineItem.tsx");
var _this = undefined,
    _jsxFileName = "/Users/apple/Documents/coronaproject/viewcorona/components/Timeline.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var Timeline = function Timeline(_ref) {
  var items = _ref.items;
  return __jsx("section", {
    className: "timeline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, items.map(function (item) {
    return __jsx("div", {
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, __jsx(_components_TimelineItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ })

})
//# sourceMappingURL=index.js.0297888d4e00dc96dd01.hot-update.js.map