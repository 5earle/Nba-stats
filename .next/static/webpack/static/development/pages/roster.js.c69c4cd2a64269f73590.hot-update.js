webpackHotUpdate("static\\development\\pages\\roster.js",{

/***/ "./pages/roster.js":
/*!*************************!*\
  !*** ./pages/roster.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/counterActions */ "./redux/actions/counterActions.js");
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! use-immer */ "./node_modules/use-immer/dist/use-immer.module.js");
/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Cards */ "./components/Cards.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");




var _this = undefined,
    _jsxFileName = "W:\\1FrontEnd\\react stuff\\courtSide\\pages\\roster.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





 //--//









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])({
  root: {
    backgroundImage: "url(".concat("./floor.png", ")"),
    backgroundAttachment: 'fixed',
    height: '100vh'
  },
  table: {
    minWidth: 650
  },
  tableStyle: {
    width: '50%',
    margin: 'auto'
  }
});

var Roster = function Roster(props) {
  _s();

  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.counter;
  }),
      teamRoaster = _useSelector.teamRoaster,
      personIds = _useSelector.personIds;

  var _useImmer = Object(use_immer__WEBPACK_IMPORTED_MODULE_7__["useImmer"])({
    isLoading: true,
    players: [],
    playerBio: []
  }),
      _useImmer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useImmer, 2),
      state = _useImmer2[0],
      setState = _useImmer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch(Object(_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_6__["getSingleRoaster"])(props.teamName));
    getAllPlayers();
  }, []);
  /*get all playerid for a given roster by team name*/

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!teamRoaster) {
      console.log('run something here');
    } else {
      console.log(teamRoaster[0].teamId);
      dispatch(Object(_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_6__["getAllPlayerId"])(teamRoaster[0].teamId));
    }
  }, [teamRoaster]);
  /*array of player ids*/

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!personIds) {} else {
      setState(function (draft) {
        draft.players = personIds.league.standard.players;
      });
    }
  }, [personIds]);

  function getAllPlayers() {
    return _getAllPlayers.apply(this, arguments);
  }

  function _getAllPlayers() {
    _getAllPlayers = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, data, filteredTeams;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://data.nba.net/10s/prod/v1/2019/players.json");

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              filteredTeams = data.league.standard.filter(function (team) {
                console.log(team.personId);
              });
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));
    return _getAllPlayers.apply(this, arguments);
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, state.players.length > 0 && __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"],
    className: classes.tableStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.table,
    size: "small",
    "aria-label": "a dense table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, "NAME"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }, "POINTS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }, "BLOCKS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 33
    }
  }, "ASSISTS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }, "STEALS"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, state.players.map(function (post, index) {
    if (index <= state.players.length) {
      return __jsx(_components_Cards__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: index,
        apost: post.personId,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 43
        }
      });
    }
  })))));
};

_s(Roster, "lj/mPlrtQyw1K/Lp0uWOi2Qf5Ws=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], use_immer__WEBPACK_IMPORTED_MODULE_7__["useImmer"]];
});

_c = Roster;

Roster.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
    var store, req, res, query, team;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            store = _ref.store, req = _ref.req, res = _ref.res, query = _ref.query;
            team = query.team;
            return _context2.abrupt("return", {
              teamName: team
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Roster);

var _c;

$RefreshReg$(_c, "Roster");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yb3N0ZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQXR0YWNobWVudCIsImhlaWdodCIsInRhYmxlIiwibWluV2lkdGgiLCJ0YWJsZVN0eWxlIiwid2lkdGgiLCJtYXJnaW4iLCJSb3N0ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvdW50ZXIiLCJ0ZWFtUm9hc3RlciIsInBlcnNvbklkcyIsInVzZUltbWVyIiwiaXNMb2FkaW5nIiwicGxheWVycyIsInBsYXllckJpbyIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0U2luZ2xlUm9hc3RlciIsInRlYW1OYW1lIiwiZ2V0QWxsUGxheWVycyIsImNvbnNvbGUiLCJsb2ciLCJ0ZWFtSWQiLCJnZXRBbGxQbGF5ZXJJZCIsImRyYWZ0IiwibGVhZ3VlIiwic3RhbmRhcmQiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJmaWx0ZXJlZFRlYW1zIiwiZmlsdGVyIiwidGVhbSIsInBlcnNvbklkIiwibGVuZ3RoIiwiUGFwZXIiLCJtYXAiLCJwb3N0IiwiaW5kZXgiLCJnZXRJbml0aWFsUHJvcHMiLCJzdG9yZSIsInJlcSIsInJlcyIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxtQkFBZSxnQkFBUyxhQUFULE1BRGI7QUFFRkMsd0JBQW9CLEVBQUUsT0FGcEI7QUFHRkMsVUFBTSxFQUFFO0FBSE4sR0FE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VkosQ0FESixDQUhSLENBRko7QUE2QkgsQ0FwRkQ7O0dBQU1qQyxNO1VBQ2NYLFMsRUFDQ2UsdUQsRUFDZUMsdUQsRUFFTkssa0Q7OztLQUx4QlYsTTs7QUFzRk5BLE1BQU0sQ0FBQ3VDLGVBQVA7QUFBQSwrTEFBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdCQyxpQkFBaEIsUUFBZ0JBLEtBQWhCLEVBQXNCQyxHQUF0QixRQUFzQkEsR0FBdEIsRUFBMEJDLEdBQTFCLFFBQTBCQSxHQUExQixFQUE4QkMsS0FBOUIsUUFBOEJBLEtBQTlCO0FBQ2ZYLGdCQURlLEdBQ1JXLEtBQUssQ0FBQ1gsSUFERTtBQUFBLDhDQUdkO0FBQ0hmLHNCQUFRLEVBQUVlO0FBRFAsYUFIYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPZWhDLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyb3N0ZXIuanMuYzY5YzRjZDJhNjQyNjlmNzM1OTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7Y29ubmVjdCx1c2VEaXNwYXRjaCx1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge2dldFNpbmdsZVJvYXN0ZXIsZ2V0QWxsUGxheWVySWR9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VJbW1lciB9IGZyb20gXCJ1c2UtaW1tZXJcIlxyXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkcyc7XHJcblxyXG4vLy0tLy9cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7XCIuL2Zsb29yLnBuZ1wifSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRBdHRhY2htZW50OiAnZml4ZWQnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMHZoJ1xyXG4gICAgfSxcclxuICAgIHRhYmxlOiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDY1MCxcclxuICAgIH0sXHJcbiAgICB0YWJsZVN0eWxlOiB7XHJcbiAgICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IFJvc3RlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge3RlYW1Sb2FzdGVyLHBlcnNvbklkc30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5jb3VudGVyKTtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUltbWVyKHtcclxuICAgICAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgcGxheWVyczogW10sXHJcbiAgICAgICAgcGxheWVyQmlvOiBbXVxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkaXNwYXRjaChnZXRTaW5nbGVSb2FzdGVyKHByb3BzLnRlYW1OYW1lKSk7XHJcbiAgICAgICAgZ2V0QWxsUGxheWVycygpO1xyXG4gICAgfSxbXSlcclxuXHJcbiAgICAvKmdldCBhbGwgcGxheWVyaWQgZm9yIGEgZ2l2ZW4gcm9zdGVyIGJ5IHRlYW0gbmFtZSovXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgaWYoIXRlYW1Sb2FzdGVyKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW4gc29tZXRoaW5nIGhlcmUnKTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlYW1Sb2FzdGVyWzBdLnRlYW1JZCk7XHJcbiAgICAgICAgICAgICBkaXNwYXRjaChnZXRBbGxQbGF5ZXJJZCh0ZWFtUm9hc3RlclswXS50ZWFtSWQpKTtcclxuICAgICAgICAgfVxyXG4gICAgfSxbdGVhbVJvYXN0ZXJdKVxyXG5cclxuICAgLyphcnJheSBvZiBwbGF5ZXIgaWRzKi9cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKCFwZXJzb25JZHMpe1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgc2V0U3RhdGUoZHJhZnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucGxheWVycyA9IHBlcnNvbklkcy5sZWFndWUuc3RhbmRhcmQucGxheWVyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW3BlcnNvbklkc10pXHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBsYXllcnMoKSB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vZGF0YS5uYmEubmV0LzEwcy9wcm9kL3YxLzIwMTkvcGxheWVycy5qc29uYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGZpbHRlcmVkVGVhbXMgPSBkYXRhLmxlYWd1ZS5zdGFuZGFyZC5maWx0ZXIoKHRlYW0pPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZWFtLnBlcnNvbklkKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qc2V0UGxheWVyKGRhdGEubGVhZ3VlLnN0YW5kYXJkLnN0YXRzLmNhcmVlclN1bW1hcnkpOyovXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtzdGF0ZS5wbGF5ZXJzLmxlbmd0aCA+IDAgJiYgKFxyXG5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGVTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cImEgZGVuc2UgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPk5BTUU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlBPSU5UUzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkJMT0NLUzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkFTU0lTVFM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5TVEVBTFM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnBsYXllcnMubWFwKChwb3N0LGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA8PSBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDYXJkcyBrZXk9e2luZGV4fSBhcG9zdD17cG9zdC5wZXJzb25JZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5Sb3N0ZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oe3N0b3JlLHJlcSxyZXMscXVlcnl9KSB7XHJcbiAgICBjb25zdCB0ZWFtID0gcXVlcnkudGVhbTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlYW1OYW1lOiB0ZWFtXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJvc3RlcjtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=