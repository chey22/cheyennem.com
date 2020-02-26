webpackHotUpdate(6,{

/***/ "./pages/skills/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismic_javascript__ = __webpack_require__("./node_modules/prismic-javascript/dist/prismic-javascript.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismic_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismic_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismic_reactjs__ = __webpack_require__("./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismic_reactjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismic_reactjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Name__ = __webpack_require__("./components/Name/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Head__ = __webpack_require__("./components/Head/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Menu__ = __webpack_require__("./components/Menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_LeftContainer__ = __webpack_require__("./components/LeftContainer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_RightContainer__ = __webpack_require__("./components/RightContainer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_scss__ = __webpack_require__("./pages/skills/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__styles_scss__);

var _jsxFileName = "C:\\Users\\Cheyenne\\Documents\\IB\\cheyennem.com\\pages\\skills\\index.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


 // import moment from "moment";



 // import Bio from "@components/Bio";





var Skills = function Skills(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_9__styles_scss___default.a.home,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_LeftContainer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Head__["a" /* default */], {
    title: "Cheyenne Mangum | Skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Menu__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Name__["a" /* default */], {
    data: props.homeData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_9__styles_scss___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Skills")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_RightContainer__["a" /* default */], {
    homeData: props.homeData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }));
}; //Async get data from Prismic


Skills.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var apiEndpoint, api, homeData, resumeData, skillsData;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          apiEndpoint = "https://cheyennem-com.cdn.prismic.io/api/v2";
          _context.next = 3;
          return __WEBPACK_IMPORTED_MODULE_2_prismic_javascript___default.a.api(apiEndpoint);

        case 3:
          api = _context.sent;
          _context.next = 6;
          return api.query(__WEBPACK_IMPORTED_MODULE_2_prismic_javascript___default.a.Predicates.at("document.type", "skills"));

        case 6:
          homeData = _context.sent;
          _context.next = 9;
          return api.query(__WEBPACK_IMPORTED_MODULE_2_prismic_javascript___default.a.Predicates.at("document.type", "resume"));

        case 9:
          resumeData = _context.sent;
          _context.next = 12;
          return api.query(__WEBPACK_IMPORTED_MODULE_2_prismic_javascript___default.a.Predicates.at("document.type", "skills"));

        case 12:
          skillsData = _context.sent;
          return _context.abrupt("return", {
            homeData: homeData.results[0].data,
            resumeData: resumeData.results[0].data,
            skillsData: skillsData.results[0].data
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Skills);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/skills\\index")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.ada3b7210fff0aba5861.hot-update.js.map