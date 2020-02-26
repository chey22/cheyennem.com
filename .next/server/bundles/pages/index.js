module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Bio/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Name__ = __webpack_require__("./components/Name/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismic_reactjs__ = __webpack_require__("prismic-reactjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismic_reactjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismic_reactjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_scss__ = __webpack_require__("./components/Bio/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_scss__);
var _jsxFileName = "C:\\Users\\Cheyenne\\Documents\\IB\\cheyennem.com\\components\\Bio\\index.js";





var Bio = function Bio(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Name__["a" /* default */], {
    data: props.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_2_prismic_reactjs__["RichText"].render(props.data.bio)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.email,
    href: "mailto:".concat(props.data.email),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.data.email));
};

/* harmony default export */ __webpack_exports__["a"] = (Bio);

/***/ }),

/***/ "./components/Bio/styles.scss":
/***/ (function(module, exports) {

module.exports = {
	"description": "TXTo0S12wIz6k4rX_aNOF",
	"email": "_2vFH_2Od1sHuZIEncMao4H"
};

/***/ }),

/***/ "./components/Head/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = "C:\\Users\\Cheyenne\\Documents\\IB\\cheyennem.com\\components\\Head\\index.js";



var defaultDescription = "";
var defaultOGURL = "";
var defaultOGImage = "";

var Head = function Head(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.title || ""), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: props.title || "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }));
};

Head.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  description: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  url: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  ogImage: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"]
};
/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),

/***/ "./components/LeftContainer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__("./components/LeftContainer/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
var _jsxFileName = "C:\\Users\\Cheyenne\\Documents\\IB\\cheyennem.com\\components\\LeftContainer\\index.js";



var LeftContainer = function LeftContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.leftContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (LeftContainer);

/***/ }),

/***/ "./components/LeftContainer/styles.scss":
/***/ (function(module, exports) {

module.exports = {
	"leftContainer": "-KeXU9A9inG_IlvPF2c1Z"
};

/***/ }),

/***/ "./components/Menu/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_scss__ = __webpack_require__("./components/Menu/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_scss__);
var _jsxFileName = "C:\\Users\\Cheyenne\\Documents\\IB\\cheyennem.com\\components\\Menu\\index.js";







__WEBPACK_IMPORTED_MODULE_2_next_router___default.a.onRouteChangeStart = function (url) {
  console.log("Loading: ".concat(url));
  __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.start();
};

__WEBPACK_IMPORTED_MODULE_2_next_router___default.a.onRouteChangeComplete = function () {
  return __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.done();
};

__WEBPACK_IMPORTED_MODULE_2_next_router___default.a.onRouteChangeError = function () {
  return __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.done();
};

var ActiveLink = Object(__WEBPACK_IMPORTED_MODULE_2_next_router__["withRouter"])(function (_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: href,
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: href,
    className: router.pathname === href ? __WEBPACK_IMPORTED_MODULE_4__styles_scss___default.a.selected : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, children));
});

var Menu = function Menu(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_4__styles_scss___default.a.menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ActiveLink, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Home"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ActiveLink, {
    href: "/experience",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Experience"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ActiveLink, {
    href: "/skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Skills"));
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "./components/Menu/styles.scss":
/***/ (function(module, exports) {

module.exports = {
	"menu": "_1uxFD1oDvIc7FDRbfBBDHf",
	"selected": "_2eHLfCS7YWTF8nhd9iJ17L"
};

/***/ }),

/***/ "./components/Name/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_textfit__ = __webpack_require__("react-textfit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_textfit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_textfit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__("./components/Name/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_scss__);
var _jsxFileName = "C:\\Users\\Cheyenne\\Documents\\IB\\cheyennem.com\\components\\Name\\index.js";




var Name = function Name(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_textfit__["Textfit"], {
    mode: "single",
    className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, props.data.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "".concat(__WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.position, " roboto"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.data.position));
};

/* harmony default export */ __webpack_exports__["a"] = (Name);

/***/ }),

/***/ "./components/Name/styles.scss":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "_1xw1iwrrp1Ew3yD3x1l8kx",
	"name": "_1yaICkdsjRc6uvTvNhWTAp",
	"position": "_3cO9JdM1AWr3u75XeKADzh"
};

/***/ }),

/***/ "./components/RightContainer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__("./components/RightContainer/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
var _jsxFileName = "C:\\Users\\Cheyenne\\Documents\\IB\\cheyennem.com\\components\\RightContainer\\index.js";



var RightContainer = function RightContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.rightContainer,
    style: {
      backgroundImage: "url(\"".concat(props.homeData.image.url, "\")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (RightContainer);

/***/ }),

/***/ "./components/RightContainer/styles.scss":
/***/ (function(module, exports) {

module.exports = {
	"rightContainer": "_2Y6lVCBaiRFsANBDQyZxdS",
	"github": "_2jZrnjZcd8nwh0UzIrvoyR"
};

/***/ }),

/***/ "./pages/home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismic_javascript__ = __webpack_require__("prismic-javascript");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismic_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismic_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismic_reactjs__ = __webpack_require__("prismic-reactjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismic_reactjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismic_reactjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Head__ = __webpack_require__("./components/Head/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Menu__ = __webpack_require__("./components/Menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Bio__ = __webpack_require__("./components/Bio/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_LeftContainer__ = __webpack_require__("./components/LeftContainer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_RightContainer__ = __webpack_require__("./components/RightContainer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_scss__ = __webpack_require__("./pages/home/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__styles_scss__);

var _jsxFileName = "C:\\Users\\Cheyenne\\Documents\\IB\\cheyennem.com\\pages\\home\\index.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






 // import Skills from "@components/Skills";





var Home = function Home(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_10__styles_scss___default.a.home,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_LeftContainer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Head__["a" /* default */], {
    title: "Cheyenne Mangum",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Menu__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Bio__["a" /* default */], {
    data: props.homeData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_RightContainer__["a" /* default */], {
    homeData: props.homeData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }));
}; //Async get data from Prismic


Home.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var apiEndpoint, api, homeData, age;
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
          return api.query(__WEBPACK_IMPORTED_MODULE_2_prismic_javascript___default.a.Predicates.at("document.type", "home"));

        case 6:
          homeData = _context.sent;
          //Calculate age
          age = __WEBPACK_IMPORTED_MODULE_4_moment___default()().diff("1991-07-22", "years"); //Replace [age] in bio with my actual age

          homeData.results[0].data.bio[0].text = homeData.results[0].data.bio[0].text.replace("[age]", age);
          return _context.abrupt("return", {
            homeData: homeData.results[0].data
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ "./pages/home/styles.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__("./pages/home/index.js");

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__home__["a" /* default */]);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prismic-javascript":
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ }),

/***/ "prismic-reactjs":
/***/ (function(module, exports) {

module.exports = require("prismic-reactjs");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-textfit":
/***/ (function(module, exports) {

module.exports = require("react-textfit");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map