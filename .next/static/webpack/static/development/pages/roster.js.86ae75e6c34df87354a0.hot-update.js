webpackHotUpdate("static\\development\\pages\\roster.js",{

/***/ "./components/Cards.js":
/*!*****************************!*\
  !*** ./components/Cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/counterActions */ "./redux/actions/counterActions.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");




var _this = undefined,
    _jsxFileName = "W:\\1FrontEnd\\react stuff\\courtSide\\components\\Cards.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 //-//









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["makeStyles"])({
  root: {
    minWidth: 275,
    width: '100%',
    backgroundColor: '#00d1b2',
    color: '#fff',
    margin: '20px 0'
  },
  loser: {
    minWidth: 275,
    width: '100%',
    backgroundColor: '#ffdd57',
    color: '#fff',
    margin: '20px 0'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '100px 0',
    '& > div': {
      width: '40%',
      marginRight: '20px'
    }
  },
  columnCard: {
    width: '50%',
    margin: 'auto',
    padding: '.75rem',
    backgroundColor: '#00d1b2',
    color: '#fff'
  }
});

var Cards = function Cards(_ref) {
  _s();

  var apost = _ref.apost;
  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.counter;
  }),
      contestantOne = _useSelector.contestantOne;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      player = _useState[0],
      setPlayer = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    /*console.log(apost);*/
    dispatch(Object(_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_5__["searchPlayers"])(apost));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (contestantOne) {
      setPlayer(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          player: !prevState.player
        });
      });
      /*console.log(contestantOne);*/
    }
  }, [contestantOne]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, contestantOne === undefined || !contestantOne ? "" : __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, "Player Name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, contestantOne.ppg), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, contestantOne.bpg), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, contestantOne.apg), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, contestantOne.ftm)));
};

_s(Cards, "FUqlLyZd+fL4pQ4RpP40F/U7AcQ=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = Cards;

Cards.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var store;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref2.store;
            console.log('$$$$$$$');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Cards);

var _c;

$RefreshReg$(_c, "Cards");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWluV2lkdGgiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFyZ2luIiwibG9zZXIiLCJidWxsZXQiLCJkaXNwbGF5IiwidHJhbnNmb3JtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsImZsZXhDZW50ZXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5SaWdodCIsImNvbHVtbkNhcmQiLCJwYWRkaW5nIiwiQ2FyZHMiLCJhcG9zdCIsImNsYXNzZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvdW50ZXIiLCJjb250ZXN0YW50T25lIiwidXNlU3RhdGUiLCJwbGF5ZXIiLCJzZXRQbGF5ZXIiLCJ1c2VFZmZlY3QiLCJzZWFyY2hQbGF5ZXJzIiwicHJldlN0YXRlIiwidW5kZWZpbmVkIiwicHBnIiwiYnBnIiwiYXBnIiwiZnRtIiwiZ2V0SW5pdGlhbFByb3BzIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsU0FBUyxHQUFHQyw0RUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkMsWUFBUSxFQUFFLEdBRFI7QUFFRkMsU0FBSyxFQUFFLE1BRkw7QUFHRkMsbUJBQWUsRUFBRSxTQUhmO0FBSUZDLFNBQUssRUFBRSxNQUpMO0FBS0ZDLFVBQU0sRUFBRTtBQUxOLEdBRG1CO0FBUXpCQyxPQUFLLEVBQUU7QUFDSEwsWUFBUSxFQUFFLEdBRFA7QUFFSEMsU0FBSyxFQUFFLE1BRko7QUFHSEMs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LGVBQU47QUFBQSwrTEFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdCQyxpQkFBaEIsU0FBZ0JBLEtBQWhCO0FBQ3BCQyxtQkFBTyxDQUFDQyxHQUFSLENBQVksU0FBWjs7QUFEb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR2V2QixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccm9zdGVyLmpzLjg2YWU3NWU2YzM0ZGY4NzM1NGEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge3NlYXJjaFBsYXllcnN9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnMnO1xyXG5cclxuLy8tLy9cclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IHttYWtlU3R5bGVzLHN0eWxlZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDI3NSxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMGQxYjInLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgbWFyZ2luOiAnMjBweCAwJyxcclxuICAgIH0sXHJcbiAgICBsb3Nlcjoge1xyXG4gICAgICAgIG1pbldpZHRoOiAyNzUsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZkZDU3JyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIG1hcmdpbjogJzIwcHggMCcsXHJcbiAgICB9LFxyXG4gICAgYnVsbGV0OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgbWFyZ2luOiAnMCAycHgnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgfSxcclxuICAgIHBvczoge1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTIsXHJcbiAgICB9LFxyXG4gICAgZmxleENlbnRlcjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luOiAnMTAwcHggMCcsXHJcbiAgICAgICAgJyYgPiBkaXYnOntcclxuICAgICAgICAgICAgd2lkdGg6ICc0MCUnLFxyXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb2x1bW5DYXJkOntcclxuICAgICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgcGFkZGluZzogJy43NXJlbScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwZDFiMicsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuY29uc3QgQ2FyZHMgPSAoe2Fwb3N0fSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge2NvbnRlc3RhbnRPbmV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuY291bnRlcik7XHJcbiAgICBjb25zdCBbcGxheWVyLHNldFBsYXllcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLypjb25zb2xlLmxvZyhhcG9zdCk7Ki9cclxuICAgICAgICBkaXNwYXRjaChzZWFyY2hQbGF5ZXJzKGFwb3N0KSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgIGlmKGNvbnRlc3RhbnRPbmUpe1xyXG4gICAgICAgICAgIHNldFBsYXllcihwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICAgICByZXR1cm4gey4uLnByZXZTdGF0ZSxwbGF5ZXI6ICFwcmV2U3RhdGUucGxheWVyfTtcclxuICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIC8qY29uc29sZS5sb2coY29udGVzdGFudE9uZSk7Ki9cclxuICAgICAgIH1cclxuICAgIH0sIFtjb250ZXN0YW50T25lXSk7XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtjb250ZXN0YW50T25lID09PSB1bmRlZmluZWQgfHwgIWNvbnRlc3RhbnRPbmUgP1xyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllciBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlc3RhbnRPbmUucHBnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e2NvbnRlc3RhbnRPbmUuYnBnfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57Y29udGVzdGFudE9uZS5hcGd9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntjb250ZXN0YW50T25lLmZ0bX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbkNhcmRzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKHtzdG9yZX0pIHtcclxuICAgIGNvbnNvbGUubG9nKCckJCQkJCQkJyk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=