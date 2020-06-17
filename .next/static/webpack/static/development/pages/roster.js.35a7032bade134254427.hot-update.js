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
  }, []);
  /*get all playerid for a given roster by team name*/

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!teamRoaster) {
      console.log('run something here');
    } else {
      console.log(teamRoaster[0].teamId);
      dispatch(Object(_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_6__["getAllPlayerId"])(teamRoaster[0].teamId));
      getAllPlayers(teamRoaster[0].teamId);
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

  function getAllPlayers(_x) {
    return _getAllPlayers.apply(this, arguments);
  }

  function _getAllPlayers() {
    _getAllPlayers = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(itemId) {
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
                return team.includes(itemId);
              });
              console.log(filteredTeams);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));
    return _getAllPlayers.apply(this, arguments);
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, state.players.length > 0 && __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"],
    className: classes.tableStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.table,
    size: "small",
    "aria-label": "a dense table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }, "NAME"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }, "POINTS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 33
    }
  }, "BLOCKS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }, "ASSISTS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 33
    }
  }, "STEALS"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
          lineNumber: 109,
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

  return function (_x2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yb3N0ZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQXR0YWNobWVudCIsImhlaWdodCIsInRhYmxlIiwibWluV2lkdGgiLCJ0YWJsZVN0eWxlIiwid2lkdGgiLCJtYXJnaW4iLCJSb3N0ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvdW50ZXIiLCJ0ZWFtUm9hc3RlciIsInBlcnNvbklkcyIsInVzZUltbWVyIiwiaXNMb2FkaW5nIiwicGxheWVycyIsInBsYXllckJpbyIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0U2luZ2xlUm9hc3RlciIsInRlYW1OYW1lIiwiY29uc29sZSIsImxvZyIsInRlYW1JZCIsImdldEFsbFBsYXllcklkIiwiZ2V0QWxsUGxheWVycyIsImRyYWZ0IiwibGVhZ3VlIiwic3RhbmRhcmQiLCJpdGVtSWQiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJmaWx0ZXJlZFRlYW1zIiwiZmlsdGVyIiwidGVhbSIsImluY2x1ZGVzIiwibGVuZ3RoIiwiUGFwZXIiLCJtYXAiLCJwb3N0IiwiaW5kZXgiLCJwZXJzb25JZCIsImdldEluaXRpYWxQcm9wcyIsInN0b3JlIiwicmVxIiwicmVzIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLG1CQUFlLGdCQUFTLGFBQVQsTUFEYjtBQUVGQyx3QkFBb0IsRUFBRSxPQUZwQjtBQUdG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LEVBQUVJLEtBQVo7QUFBbUIsYUFBSyxFQUFFRCxJQUFJLENBQUNFLFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQUNIO0FBQ0gsR0FKQSxDQURMLENBVkosQ0FESixDQUhSLENBRko7QUE2QkgsQ0FyRkQ7O0dBQU14QyxNO1VBQ2NYLFMsRUFDQ2UsdUQsRUFDZUMsdUQsRUFFTkssa0Q7OztLQUx4QlYsTTs7QUF1Rk5BLE1BQU0sQ0FBQ3lDLGVBQVA7QUFBQSwrTEFBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdCQyxpQkFBaEIsUUFBZ0JBLEtBQWhCLEVBQXNCQyxHQUF0QixRQUFzQkEsR0FBdEIsRUFBMEJDLEdBQTFCLFFBQTBCQSxHQUExQixFQUE4QkMsS0FBOUIsUUFBOEJBLEtBQTlCO0FBQ2ZaLGdCQURlLEdBQ1JZLEtBQUssQ0FBQ1osSUFERTtBQUFBLDhDQUdkO0FBQ0hoQixzQkFBUSxFQUFFZ0I7QUFEUCxhQUhjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9lakMscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJvc3Rlci5qcy4zNWE3MDMyYmFkZTEzNDI1NDQyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHtjb25uZWN0LHVzZURpc3BhdGNoLHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7Z2V0U2luZ2xlUm9hc3RlcixnZXRBbGxQbGF5ZXJJZH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUltbWVyIH0gZnJvbSBcInVzZS1pbW1lclwiXHJcbmltcG9ydCBDYXJkcyBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRzJztcclxuXHJcbi8vLS0vL1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtcIi4vZmxvb3IucG5nXCJ9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6ICdmaXhlZCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnXHJcbiAgICB9LFxyXG4gICAgdGFibGU6IHtcclxuICAgICAgICBtaW5XaWR0aDogNjUwLFxyXG4gICAgfSxcclxuICAgIHRhYmxlU3R5bGU6IHtcclxuICAgICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgUm9zdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7dGVhbVJvYXN0ZXIscGVyc29uSWRzfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmNvdW50ZXIpO1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlSW1tZXIoe1xyXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBwbGF5ZXJzOiBbXSxcclxuICAgICAgICBwbGF5ZXJCaW86IFtdXHJcbiAgICB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKGdldFNpbmdsZVJvYXN0ZXIocHJvcHMudGVhbU5hbWUpKTtcclxuICAgIH0sW10pXHJcblxyXG4gICAgLypnZXQgYWxsIHBsYXllcmlkIGZvciBhIGdpdmVuIHJvc3RlciBieSB0ZWFtIG5hbWUqL1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgIGlmKCF0ZWFtUm9hc3Rlcil7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZygncnVuIHNvbWV0aGluZyBoZXJlJyk7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZWFtUm9hc3RlclswXS50ZWFtSWQpO1xyXG4gICAgICAgICAgICAgZGlzcGF0Y2goZ2V0QWxsUGxheWVySWQodGVhbVJvYXN0ZXJbMF0udGVhbUlkKSk7XHJcbiAgICAgICAgICAgICBnZXRBbGxQbGF5ZXJzKHRlYW1Sb2FzdGVyWzBdLnRlYW1JZCk7XHJcbiAgICAgICAgIH1cclxuICAgIH0sW3RlYW1Sb2FzdGVyXSlcclxuXHJcbiAgIC8qYXJyYXkgb2YgcGxheWVyIGlkcyovXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZighcGVyc29uSWRzKXtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKGRyYWZ0ID0+IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnBsYXllcnMgPSBwZXJzb25JZHMubGVhZ3VlLnN0YW5kYXJkLnBsYXllcnNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbcGVyc29uSWRzXSlcclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUGxheWVycyhpdGVtSWQpIHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9kYXRhLm5iYS5uZXQvMTBzL3Byb2QvdjEvMjAxOS9wbGF5ZXJzLmpzb25gKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRUZWFtcyA9IGRhdGEubGVhZ3VlLnN0YW5kYXJkLmZpbHRlcigodGVhbSk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZWFtLmluY2x1ZGVzKGl0ZW1JZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkVGVhbXMpO1xyXG5cclxuXHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qc2V0UGxheWVyKGRhdGEubGVhZ3VlLnN0YW5kYXJkLnN0YXRzLmNhcmVlclN1bW1hcnkpOyovXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtzdGF0ZS5wbGF5ZXJzLmxlbmd0aCA+IDAgJiYgKFxyXG5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGVTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cImEgZGVuc2UgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPk5BTUU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlBPSU5UUzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkJMT0NLUzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkFTU0lTVFM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5TVEVBTFM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnBsYXllcnMubWFwKChwb3N0LGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA8PSBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDYXJkcyBrZXk9e2luZGV4fSBhcG9zdD17cG9zdC5wZXJzb25JZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5Sb3N0ZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oe3N0b3JlLHJlcSxyZXMscXVlcnl9KSB7XHJcbiAgICBjb25zdCB0ZWFtID0gcXVlcnkudGVhbTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlYW1OYW1lOiB0ZWFtXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJvc3RlcjtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=