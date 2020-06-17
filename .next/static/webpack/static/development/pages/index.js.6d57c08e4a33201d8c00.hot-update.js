webpackHotUpdate("static\\development\\pages\\index.js",{

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
    getPlayer(apost);
  }, []);

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
              console.log(data.league.standard.stats.careerSummary);
              setPlayer(data.league.standard.stats.careerSummary);

            case 8:
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
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, "Player Name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, player.points || 0), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, player.blocks || 0), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, player.assists || 0), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, player.steals || 0)));
};

_s(Cards, "sKokWg7SV1su2CwAuOtBoTFaFjY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWluV2lkdGgiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFyZ2luIiwibG9zZXIiLCJidWxsZXQiLCJkaXNwbGF5IiwidHJhbnNmb3JtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsImZsZXhDZW50ZXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5SaWdodCIsImNvbHVtbkNhcmQiLCJwYWRkaW5nIiwiQ2FyZHMiLCJhcG9zdCIsImNsYXNzZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvdW50ZXIiLCJjb250ZXN0YW50T25lIiwidXNlU3RhdGUiLCJwbGF5ZXIiLCJzZXRQbGF5ZXIiLCJ1c2VFZmZlY3QiLCJnZXRQbGF5ZXIiLCJpdGVtIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxlYWd1ZSIsInN0YW5kYXJkIiwic3RhdHMiLCJjYXJlZXJTdW1tYXJ5IiwibGVuZ3RoIiwicG9pbnRzIiwiYmxvY2tzIiwiYXNzaXN0cyIsInN0ZWFscyIsImdldEluaXRpYWxQcm9wcyIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLDRFQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxZQUFRLEVBQUUsR0FEUjtBQUVGQyxTQUFLLEVBQUUsTUFGTDtBQUdGQyxtQkFBZSxFQUFFLFNBSGY7QUFJRkMsU0FBSyxFQUFFLE1BSkw7QUFLRkMsVUFBTSxFQUFFO0FBTE4s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QyxDQVBKLEVBUUksTUFBQyxtRUFBRDtBQUFXLFNBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCakIsTUFBTSxDQUFDa0IsT0FBUCxJQUFrQixDQUE1QyxDQVJKLEVBU0ksTUFBQyxtRUFBRDtBQUFXLFNBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCbEIsTUFBTSxDQUFDbUIsTUFBUCxJQUFpQixDQUEzQyxDQVRKLENBSlosQ0FESjtBQW9CSCxDQXhDRDs7R0FBTTdCLEs7VUFDY3RCLFMsRUFDQzBCLHVELEVBQ09DLHVEOzs7S0FIdEJMLEs7O0FBMENOQSxLQUFLLENBQUM4QixlQUFOO0FBQUEsK0xBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQkMsaUJBQWhCLFNBQWdCQSxLQUFoQjtBQUNwQlosbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7O0FBRG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdlcEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjZkNTdjMDhlNGEzMzIwMWQ4YzAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge3NlYXJjaFBsYXllcnN9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnMnO1xyXG5cclxuLy8tLy9cclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IHttYWtlU3R5bGVzLHN0eWxlZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDI3NSxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMGQxYjInLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgbWFyZ2luOiAnMjBweCAwJyxcclxuICAgIH0sXHJcbiAgICBsb3Nlcjoge1xyXG4gICAgICAgIG1pbldpZHRoOiAyNzUsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZkZDU3JyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIG1hcmdpbjogJzIwcHggMCcsXHJcbiAgICB9LFxyXG4gICAgYnVsbGV0OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgbWFyZ2luOiAnMCAycHgnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgfSxcclxuICAgIHBvczoge1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTIsXHJcbiAgICB9LFxyXG4gICAgZmxleENlbnRlcjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luOiAnMTAwcHggMCcsXHJcbiAgICAgICAgJyYgPiBkaXYnOntcclxuICAgICAgICAgICAgd2lkdGg6ICc0MCUnLFxyXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb2x1bW5DYXJkOntcclxuICAgICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgcGFkZGluZzogJy43NXJlbScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwZDFiMicsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuY29uc3QgQ2FyZHMgPSAoe2Fwb3N0fSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge2NvbnRlc3RhbnRPbmV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuY291bnRlcik7XHJcbiAgICBjb25zdCBbcGxheWVyLHNldFBsYXllcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRQbGF5ZXIoYXBvc3QpXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBsYXllcihpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2RhdGEubmJhLm5ldC8xMHMvcHJvZC92MS8yMDE5L3BsYXllcnMvJHtpdGVtfV9wcm9maWxlLmpzb25gKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEubGVhZ3VlLnN0YW5kYXJkLnN0YXRzLmNhcmVlclN1bW1hcnkpO1xyXG4gICAgICAgIHNldFBsYXllcihkYXRhLmxlYWd1ZS5zdGFuZGFyZC5zdGF0cy5jYXJlZXJTdW1tYXJ5KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3BsYXllci5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZXIgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbGF5ZXIucG9pbnRzIHx8IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cGxheWVyLmJsb2NrcyB8fCAwfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cGxheWVyLmFzc2lzdHMgfHwgMH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3BsYXllci5zdGVhbHMgfHwgMH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbkNhcmRzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKHtzdG9yZX0pIHtcclxuICAgIGNvbnNvbGUubG9nKCckJCQkJCQkJyk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=