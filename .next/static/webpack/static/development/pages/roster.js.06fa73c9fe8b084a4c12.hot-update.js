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
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.counter;
  }),
      contestantOne = _useSelector.contestantOne;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      player = _useState[0],
      setPlayer = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    /*console.log(apost);*/

    /*dispatch(searchPlayers(apost));*/
    getPlayer(apost);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (contestantOne) {
      setPlayer(contestantOne);
    }
  }, [contestantOne]);

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
              _context.next = 2;
              return fetch("http://data.nba.net/10s/prod/v1/2019/players/".concat(item, "_profile.json"));

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              data = _context.sent;
              setPlayer(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getPlayer.apply(this, arguments);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, player.length > 0 ? "" : __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, "Player Name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, player.ppg || 0), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, player.bpg || 0), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, player.apg || 0), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, player.ftm || 0)));
};

_s(Cards, "c7qYkIRyoDSPHOxoN5MI496JFm4=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
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
            console.log('$$$$$$$');

          case 2:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWluV2lkdGgiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFyZ2luIiwibG9zZXIiLCJidWxsZXQiLCJkaXNwbGF5IiwidHJhbnNmb3JtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsImZsZXhDZW50ZXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5SaWdodCIsImNvbHVtbkNhcmQiLCJwYWRkaW5nIiwiQ2FyZHMiLCJhcG9zdCIsImNsYXNzZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvdW50ZXIiLCJjb250ZXN0YW50T25lIiwidXNlU3RhdGUiLCJwbGF5ZXIiLCJzZXRQbGF5ZXIiLCJ1c2VFZmZlY3QiLCJnZXRQbGF5ZXIiLCJpdGVtIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibGVuZ3RoIiwicHBnIiwiYnBnIiwiYXBnIiwiZnRtIiwiZ2V0SW5pdGlhbFByb3BzIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLDRFQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxZQUFRLEVBQUUsR0FEUjtBQUVGQyxTQUFLLEVBQUUsTUFGTDtBQUdGQyxtQkFBZSxFQUFFLFNBSGY7QUFJRkMsU0FBSyxFQUFFLE1BSkw7QUFLRkMsVUFBTSxFQUFFO0FBTE4sR0FEbUI7QUFRekJDLE9BQUssRUFBRTtBQUNITCxZQUFRLEVBQUUsR0FEUDtBQUVIQyxTQUFLLEVBQUUsTUFGSjtBQUdIQyxtQkFBZSxFQUFFLFNBSGQ7QUFJSEMsU0FBSyxFQUFFLE1BSko7QUFLSEMsVUFBTSxFQUFFO0FBTEwsR0FSa0I7QUFlekJFLFFBQU0sRUFBRTtBQUNKQyxXQUFPLEVBQUUsY0FETDtBQUVKSCxVQUFNLEVBQUUsT0FGSjtBQUdKSSxhQUFTLEVBQUU7QUFIUCxHQWZpQjtBQW9CekJDLE9BQUssRUFBRTtBQUNIQyxZQUFRLEVBQUU7QUFEUCxHQXBCa0I7QUF1QnpCQyxLQUFHLEVBQUU7QUFDREMsZ0JBQVksRUFBRTtBQURiLEdBdkJvQjtBQTBCekJDLFlBQVUsRUFBRTtBQUNSTixXQUFPLEVBQUUsTUFERDtBQUVSTyxrQkFBYyxFQUFFLFFBRlI7QUFHUkMsY0FBVSxFQUFFLFFBSEo7QUFJUlgsVUFBTSxFQUFFLFNBSkE7QUFLUixlQUFVO0FBQ05ILFdBQUssRUFBRSxLQUREO0FBRU5lLGlCQUFXLEVBQUU7QUFGUDtBQUxGLEdBMUJhO0FBb0N6QkMsWUFBVSxFQUFDO0FBQ1BoQixTQUFLLEVBQUUsS0FEQTtBQUVQRyxVQUFNLEVBQUUsTUFGRDtBQUdQYyxXQUFPLEVBQUUsUUFIRjtBQUlQaEIsbUJBQWUsRUFBRSxTQUpWO0FBS1BDLFNBQUssRUFBRTtBQUxBO0FBcENjLENBQUQsQ0FBNUI7O0FBOENBLElBQU1nQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFhO0FBQUE7O0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXO0FBQ3ZCLE1BQU1DLE9BQU8sR0FBR3hCLFNBQVMsRUFBekI7QUFDQSxNQUFNeUIsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGdUIscUJBR0NDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsT0FBZjtBQUFBLEdBQUQsQ0FIWjtBQUFBLE1BR2hCQyxhQUhnQixnQkFHaEJBLGFBSGdCOztBQUFBLGtCQUlJQyxzREFBUSxDQUFDLEVBQUQsQ0FKWjtBQUFBLE1BSWhCQyxNQUpnQjtBQUFBLE1BSVRDLFNBSlM7O0FBTXZCQyx5REFBUyxDQUFDLFlBQU07QUFDWjs7QUFDQTtBQUNBQyxhQUFTLENBQUNaLEtBQUQsQ0FBVDtBQUNILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQVcseURBQVMsQ0FBQyxZQUFNO0FBQ2IsUUFBR0osYUFBSCxFQUFpQjtBQUNiRyxlQUFTLENBQUNILGFBQUQsQ0FBVDtBQUNIO0FBQ0gsR0FKUSxFQUlOLENBQUNBLGFBQUQsQ0FKTSxDQUFUOztBQVp1QixXQWtCUkssU0FsQlE7QUFBQTtBQUFBOztBQUFBO0FBQUEsa01Ba0J2QixpQkFBeUJDLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQzJCQyxLQUFLLHdEQUFpREQsSUFBakQsbUJBRGhDOztBQUFBO0FBQ1VFLHNCQURWO0FBQUE7QUFBQSxxQkFFdUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZ2Qjs7QUFBQTtBQUVVQyxrQkFGVjtBQUdJUCx1QkFBUyxDQUFDTyxJQUFELENBQVQ7O0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FsQnVCO0FBQUE7QUFBQTs7QUEwQnZCLFNBQ0ksbUVBQ0tSLE1BQU0sQ0FBQ1MsTUFBUCxHQUFnQixDQUFoQixHQUNHLEVBREgsR0FHTyxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFJSSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1QsTUFBTSxDQUFDVSxHQUFQLElBQWMsQ0FEbkIsQ0FKSixFQU9JLE1BQUMsbUVBQUQ7QUFBVyxTQUFLLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQlYsTUFBTSxDQUFDVyxHQUFQLElBQWMsQ0FBeEMsQ0FQSixFQVFJLE1BQUMsbUVBQUQ7QUFBVyxTQUFLLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQlgsTUFBTSxDQUFDWSxHQUFQLElBQWMsQ0FBeEMsQ0FSSixFQVNJLE1BQUMsbUVBQUQ7QUFBVyxTQUFLLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQlosTUFBTSxDQUFDYSxHQUFQLElBQWMsQ0FBeEMsQ0FUSixDQUpaLENBREo7QUFvQkgsQ0E5Q0Q7O0dBQU12QixLO1VBQ2N0QixTLEVBQ0MwQix1RCxFQUNPQyx1RDs7O0tBSHRCTCxLOztBQWdETkEsS0FBSyxDQUFDd0IsZUFBTjtBQUFBLCtMQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0JDLGlCQUFoQixTQUFnQkEsS0FBaEI7QUFDcEJDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaOztBQURvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHZTNCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyb3N0ZXIuanMuMDZmYTczYzlmZThiMDg0YTRjMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7c2VhcmNoUGxheWVyc30gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9ucyc7XHJcblxyXG4vLy0vL1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQge21ha2VTdHlsZXMsc3R5bGVkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBtaW5XaWR0aDogMjc1LFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwZDFiMicsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICBtYXJnaW46ICcyMHB4IDAnLFxyXG4gICAgfSxcclxuICAgIGxvc2VyOiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDI3NSxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmRkNTcnLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgbWFyZ2luOiAnMjBweCAwJyxcclxuICAgIH0sXHJcbiAgICBidWxsZXQ6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICBtYXJnaW46ICcwIDJweCcsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICB9LFxyXG4gICAgcG9zOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMixcclxuICAgIH0sXHJcbiAgICBmbGV4Q2VudGVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW46ICcxMDBweCAwJyxcclxuICAgICAgICAnJiA+IGRpdic6e1xyXG4gICAgICAgICAgICB3aWR0aDogJzQwJScsXHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbHVtbkNhcmQ6e1xyXG4gICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICBwYWRkaW5nOiAnLjc1cmVtJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDBkMWIyJyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5jb25zdCBDYXJkcyA9ICh7YXBvc3R9KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7Y29udGVzdGFudE9uZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5jb3VudGVyKTtcclxuICAgIGNvbnN0IFtwbGF5ZXIsc2V0UGxheWVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8qY29uc29sZS5sb2coYXBvc3QpOyovXHJcbiAgICAgICAgLypkaXNwYXRjaChzZWFyY2hQbGF5ZXJzKGFwb3N0KSk7Ki9cclxuICAgICAgICBnZXRQbGF5ZXIoYXBvc3QpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgIGlmKGNvbnRlc3RhbnRPbmUpe1xyXG4gICAgICAgICAgIHNldFBsYXllcihjb250ZXN0YW50T25lKTtcclxuICAgICAgIH1cclxuICAgIH0sIFtjb250ZXN0YW50T25lXSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWVyKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vZGF0YS5uYmEubmV0LzEwcy9wcm9kL3YxLzIwMTkvcGxheWVycy8ke2l0ZW19X3Byb2ZpbGUuanNvbmApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0UGxheWVyKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7cGxheWVyLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllciBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsYXllci5wcGcgfHwgMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntwbGF5ZXIuYnBnIHx8IDB9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntwbGF5ZXIuYXBnIHx8IDB9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntwbGF5ZXIuZnRtIHx8IDB9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG5DYXJkcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbih7c3RvcmV9KSB7XHJcbiAgICBjb25zb2xlLmxvZygnJCQkJCQkJCcpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9