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
    players: []
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
    }
  }, [teamRoaster]);
  /*array of player ids*/

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!personIds) {
      console.log('xxxxxxxxx');
    } else {
      console.log(personIds.league.standard.players);
      setState(function (draft) {
        draft.players = personIds.league.standard.players;
      });
    }
  }, [personIds]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, personIds.league.standard.players > 0 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, state.players.map(function (post, index) {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 31
      }
    }, post.personId);
  })));
};

_s(Roster, "lj/mPlrtQyw1K/Lp0uWOi2Qf5Ws=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], use_immer__WEBPACK_IMPORTED_MODULE_7__["useImmer"]];
});

_c = Roster;

Roster.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var store, req, res, query, team;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, req = _ref.req, res = _ref.res, query = _ref.query;
            team = query.team;
            return _context.abrupt("return", {
              teamName: team
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yb3N0ZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQXR0YWNobWVudCIsImhlaWdodCIsInRhYmxlIiwibWluV2lkdGgiLCJ0YWJsZVN0eWxlIiwid2lkdGgiLCJtYXJnaW4iLCJSb3N0ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvdW50ZXIiLCJ0ZWFtUm9hc3RlciIsInBlcnNvbklkcyIsInVzZUltbWVyIiwiaXNMb2FkaW5nIiwicGxheWVycyIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0U2luZ2xlUm9hc3RlciIsInRlYW1OYW1lIiwiY29uc29sZSIsImxvZyIsInRlYW1JZCIsImdldEFsbFBsYXllcklkIiwibGVhZ3VlIiwic3RhbmRhcmQiLCJkcmFmdCIsIm1hcCIsInBvc3QiLCJpbmRleCIsInBlcnNvbklkIiwiZ2V0SW5pdGlhbFByb3BzIiwic3RvcmUiLCJyZXEiLCJyZXMiLCJxdWVyeSIsInRlYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLG1CQUFlLGdCQUFTLGFBQVQsTUFEYjtBQUVGQyx3QkFBb0IsRUFBRSxPQUZwQjtBQUdGQyxVQUFNLEVBQUU7QUFITixHQURtQjtBQU16QkMsT0FBSyxFQUFFO0FBQ0hDLFlBQVEsRUFBRTtBQURQLEdBTmtCO0FBU3pCQyxZQUFVLEVBQUU7QUFDUkMsU0FBSyxFQUFFLEtBREM7QUFFUkMsVUFBTSxFQUFFO0FB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QWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJvc3Rlci5qcy4xNWJhNWYyZGRmMzg3YWMwOGVkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHtjb25uZWN0LHVzZURpc3BhdGNoLHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7Z2V0U2luZ2xlUm9hc3RlcixnZXRBbGxQbGF5ZXJJZH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUltbWVyIH0gZnJvbSBcInVzZS1pbW1lclwiXHJcbmltcG9ydCBDYXJkcyBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRzJztcclxuXHJcbi8vLS0vL1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtcIi4vZmxvb3IucG5nXCJ9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6ICdmaXhlZCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnXHJcbiAgICB9LFxyXG4gICAgdGFibGU6IHtcclxuICAgICAgICBtaW5XaWR0aDogNjUwLFxyXG4gICAgfSxcclxuICAgIHRhYmxlU3R5bGU6IHtcclxuICAgICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgUm9zdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7dGVhbVJvYXN0ZXIscGVyc29uSWRzfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmNvdW50ZXIpO1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VJbW1lcih7XHJcbiAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHBsYXllcnM6IFtdXHJcbiAgICB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKGdldFNpbmdsZVJvYXN0ZXIocHJvcHMudGVhbU5hbWUpKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICAvKmdldCBhbGwgcGxheWVyaWQgZm9yIGEgZ2l2ZW4gcm9zdGVyIGJ5IHRlYW0gbmFtZSovXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgaWYoIXRlYW1Sb2FzdGVyKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW4gc29tZXRoaW5nIGhlcmUnKTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlYW1Sb2FzdGVyWzBdLnRlYW1JZCk7XHJcbiAgICAgICAgICAgICBkaXNwYXRjaChnZXRBbGxQbGF5ZXJJZCh0ZWFtUm9hc3RlclswXS50ZWFtSWQpKTtcclxuICAgICAgICAgfVxyXG4gICAgfSxbdGVhbVJvYXN0ZXJdKVxyXG5cclxuICAgLyphcnJheSBvZiBwbGF5ZXIgaWRzKi9cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKCFwZXJzb25JZHMpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygneHh4eHh4eHh4Jyk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwZXJzb25JZHMubGVhZ3VlLnN0YW5kYXJkLnBsYXllcnMpXHJcbiAgICAgICAgICAgIHNldFN0YXRlKGRyYWZ0ID0+IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnBsYXllcnMgPSBwZXJzb25JZHMubGVhZ3VlLnN0YW5kYXJkLnBsYXllcnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFtwZXJzb25JZHNdKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cGVyc29uSWRzLmxlYWd1ZS5zdGFuZGFyZC5wbGF5ZXJzID4gMCAmJiAoXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7c3RhdGUucGxheWVycy5tYXAoKHBvc3QsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGgxPntwb3N0LnBlcnNvbklkfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuUm9zdGVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKHtzdG9yZSxyZXEscmVzLHF1ZXJ5fSkge1xyXG4gICAgY29uc3QgdGVhbSA9IHF1ZXJ5LnRlYW07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0ZWFtTmFtZTogdGVhbVxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBSb3N0ZXI7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9