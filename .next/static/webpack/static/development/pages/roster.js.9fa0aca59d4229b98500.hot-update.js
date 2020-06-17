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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/counterActions */ "./redux/actions/counterActions.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");



var _this = undefined,
    _jsxFileName = "W:\\1FrontEnd\\react stuff\\courtSide\\components\\Cards.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 //-//









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])({
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      player = _useState[0],
      setPlayer = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      playerlist = _useState2[0],
      setPlayerList = _useState2[1];
  /* useEffect(() => {
       getPlayer(apost);
   }, []);*/


  function getPlayer(_x) {
    return _getPlayer.apply(this, arguments);
  }

  function _getPlayer() {
    _getPlayer = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(item) {
      var response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("http://data.nba.net/10s/prod/v1/2019/players/".concat(item, "_profile.json"));

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              setPlayer(data.league.standard.stats.careerSummary);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              setPlayer([]);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));
    return _getPlayer.apply(this, arguments);
  }

  return __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__["default"],
    className: classes.tableStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.table,
    size: "small",
    "aria-label": "a dense table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, "NAME"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, "POINTS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, "BLOCKS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, "ASSISTS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, "STEALS"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, apost.map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: row.personId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 29
      }
    }, row.firstName));
  }))));
};

_s(Cards, "rPiG22FGdHgBIH6BeV5/hZ3el58=", false, function () {
  return [useStyles];
});

_c = Cards;

Cards.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref2) {
    var store;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            store = _ref2.store;

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWluV2lkdGgiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFyZ2luIiwibG9zZXIiLCJidWxsZXQiLCJkaXNwbGF5IiwidHJhbnNmb3JtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsImZsZXhDZW50ZXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5SaWdodCIsImNvbHVtbkNhcmQiLCJwYWRkaW5nIiwiQ2FyZHMiLCJhcG9zdCIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInBsYXllciIsInNldFBsYXllciIsInBsYXllcmxpc3QiLCJzZXRQbGF5ZXJMaXN0IiwiZ2V0UGxheWVyIiwiaXRlbSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImxlYWd1ZSIsInN0YW5kYXJkIiwic3RhdHMiLCJjYXJlZXJTdW1tYXJ5IiwiY29uc29sZSIsImxvZyIsIlBhcGVyIiwidGFibGVTdHlsZSIsInRhYmxlIiwibWFwIiwicm93IiwicGVyc29uSWQiLCJmaXJzdE5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsU0FBUyxHQUFHQyw0RUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkMsWUFBUSxFQUFFLEdBRFI7QUFFRkMsU0FBSyxFQUFFLE1BRkw7QUFHRkMsbUJBQWUsRUFBRSxTQUhmO0FBSUZDLFNBQUssRUFBRSxNQUpMO0FBS0ZDLFVBQU0sRUFBRTtBQUxOLEdBRG1CO0FBUXpCQyxPQUFLLEVBQUU7QUFDSEwsWUFBUSxFQUFF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QUE7QUFBQSxjQUhKLEVBSUksTUFBQyxtRUFBRDtBQUFXLFNBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosRUFLSSxNQUFDLG1FQUFEO0FBQVcsU0FBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixDQURKLENBREosRUFVSSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS3JCLEtBQUssQ0FBQ3NCLEdBQU4sQ0FBVSxVQUFDQyxHQUFEO0FBQUEsV0FDUCxNQUFDLG1FQUFEO0FBQVUsU0FBRyxFQUFFQSxHQUFHLENBQUNDLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLG1FQUFEO0FBQVcsZUFBUyxFQUFDLElBQXJCO0FBQTBCLFdBQUssRUFBQyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tELEdBQUcsQ0FBQ0UsU0FEVCxDQURKLENBRE87QUFBQSxHQUFWLENBREwsQ0FWSixDQURKLENBREo7QUE2QkgsQ0F0REQ7O0dBQU0xQixLO1VBQ2N0QixTOzs7S0FEZHNCLEs7O0FBd0ROQSxLQUFLLENBQUMyQixlQUFOO0FBQUEsK0xBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQkMsaUJBQWhCLFNBQWdCQSxLQUFoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHZTVCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyb3N0ZXIuanMuOWZhMGFjYTU5ZDQyMjliOTg1MDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7c2VhcmNoUGxheWVyc30gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9ucyc7XHJcblxyXG4vLy0vL1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQge21ha2VTdHlsZXMsc3R5bGVkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBtaW5XaWR0aDogMjc1LFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwZDFiMicsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICBtYXJnaW46ICcyMHB4IDAnLFxyXG4gICAgfSxcclxuICAgIGxvc2VyOiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDI3NSxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmRkNTcnLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgbWFyZ2luOiAnMjBweCAwJyxcclxuICAgIH0sXHJcbiAgICBidWxsZXQ6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICBtYXJnaW46ICcwIDJweCcsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICB9LFxyXG4gICAgcG9zOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMixcclxuICAgIH0sXHJcbiAgICBmbGV4Q2VudGVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW46ICcxMDBweCAwJyxcclxuICAgICAgICAnJiA+IGRpdic6e1xyXG4gICAgICAgICAgICB3aWR0aDogJzQwJScsXHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbHVtbkNhcmQ6e1xyXG4gICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICBwYWRkaW5nOiAnLjc1cmVtJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDBkMWIyJyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5jb25zdCBDYXJkcyA9ICh7YXBvc3R9KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbcGxheWVyLHNldFBsYXllcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGxheWVybGlzdCxzZXRQbGF5ZXJMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgIC8qIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0UGxheWVyKGFwb3N0KTtcclxuICAgIH0sIFtdKTsqL1xyXG5cclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWVyKGl0ZW0pIHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9kYXRhLm5iYS5uZXQvMTBzL3Byb2QvdjEvMjAxOS9wbGF5ZXJzLyR7aXRlbX1fcHJvZmlsZS5qc29uYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFBsYXllcihkYXRhLmxlYWd1ZS5zdGFuZGFyZC5zdGF0cy5jYXJlZXJTdW1tYXJ5KTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHNldFBsYXllcihbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZVN0eWxlfT5cclxuICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cImEgZGVuc2UgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPk5BTUU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj5QT0lOVFM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+QkxPQ0tTPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkFTU0lTVFM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+U1RFQUxTPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICB7YXBvc3QubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93LnBlcnNvbklkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhbG9yaWVzfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5mYXR9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhcmJzfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5wcm90ZWlufTwvVGFibGVDZWxsPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuQ2FyZHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oe3N0b3JlfSkge1xyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYXJkc1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==