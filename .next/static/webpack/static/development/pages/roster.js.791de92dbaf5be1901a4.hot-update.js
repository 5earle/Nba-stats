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
                return team.includes(input.toLowerCase("203500"));
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
      lineNumber: 89,
      columnNumber: 9
    }
  }, state.players.length > 0 && __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"],
    className: classes.tableStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.table,
    size: "small",
    "aria-label": "a dense table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 33
    }
  }, "NAME"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, "POINTS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, "BLOCKS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }, "ASSISTS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }, "STEALS"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
          lineNumber: 106,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yb3N0ZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQXR0YWNobWVudCIsImhlaWdodCIsInRhYmxlIiwibWluV2lkdGgiLCJ0YWJsZVN0eWxlIiwid2lkdGgiLCJtYXJnaW4iLCJSb3N0ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvdW50ZXIiLCJ0ZWFtUm9hc3RlciIsInBlcnNvbklkcyIsInVzZUltbWVyIiwiaXNMb2FkaW5nIiwicGxheWVycyIsInBsYXllckJpbyIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0U2luZ2xlUm9hc3RlciIsInRlYW1OYW1lIiwiZ2V0QWxsUGxheWVycyIsImNvbnNvbGUiLCJsb2ciLCJ0ZWFtSWQiLCJnZXRBbGxQbGF5ZXJJZCIsImRyYWZ0IiwibGVhZ3VlIiwic3RhbmRhcmQiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJmaWx0ZXJlZFRlYW1zIiwiZmlsdGVyIiwidGVhbSIsImluY2x1ZGVzIiwiaW5wdXQiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsIlBhcGVyIiwibWFwIiwicG9zdCIsImluZGV4IiwicGVyc29uSWQiLCJnZXRJbml0aWFsUHJvcHMiLCJzdG9yZSIsInJlcSIsInJlcyIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxtQkFBZSxnQkFBUyxhQUFULE1BRGI7QUFFRkMsd0JBQW9CLEVBQUUsT0FGcEI7QUFHRkMsVUFBTSxFQUFFO0FBSE4sR0FEbUI7QUFNekJDLE9BQUssRUFBRTtBQUNIQyxZQUFRLEVBQUU7QUFEUCxHQU5rQjtBQVN6QkMsWUFBVSxFQUFFO0FBQ1JDLFNBQUssRUFBRSxLQURDO0FBRVJDLFVBQU0sRUFBRTtBQUZBO0FBVGEsQ0FBRCxDQUE1Qjs7QUFlQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDdEIsTUFBTUMsT0FBTyxHQUFHYixTQUFTLEVBQXpCO0FBQ0EsTUFBTWMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGc0IscUJBR1VDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsT0FBZjtBQUFBLEdBQUQsQ0FIckI7QUFBQSxNQUdmQyxXQUhlLGdCQUdmQSxXQUhlO0FBQUEsTUFHSEMsU0FIRyxnQkFHSEEsU0FIRzs7QUFBQSxrQkFJSUMsMERBQVEsQ0FBQztBQUMvQkMsYUFBUyxFQUFFLElBRG9CO0FBRS9CQyxXQUFPLEVBQUUsRUFGc0I7QUFHL0JDLGFBQVMsRUFBRTtBQUhvQixHQUFELENBSlo7QUFBQTtBQUFBLE1BSWZQLEtBSmU7QUFBQSxNQUlSUSxRQUpROztBQVV0QkMseURBQVMsQ0FBQyxZQUFJO0FBQ1ZaLFlBQVEsQ0FBQ2Esc0ZBQWdCLENBQUNmLEtBQUssQ0FBQ2dCLFFBQVAsQ0FBakIsQ0FBUjtBQUNBQyxpQkFBYTtBQUNoQixHQUhRLEVBR1AsRUFITyxDQUFUO0FBS0E7O0FBQ0FILHlEQUFTLENBQUMsWUFBSTtBQUNULFFBQUcsQ0FBQ1AsV0FBSixFQUFnQjtBQUNaVyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNILEtBRkQsTUFFTztBQUNIRCxhQUFPLENBQUNDLEdBQVIsQ0FBWVosV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlYSxNQUEzQjtBQUNBbEIsY0FBUSxDQUFDbUIsb0ZBQWMsQ0FBQ2QsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlYSxNQUFoQixDQUFmLENBQVI7QUFDSDtBQUNMLEdBUFEsRUFPUCxDQUFDYixXQUFELENBUE8sQ0FBVDtBQVNEOztBQUNDTyx5REFBUyxDQUFDLFlBQUk7QUFDVixRQUFHLENBQUNOLFNBQUosRUFBYyxDQUNiLENBREQsTUFDTTtBQUNGSyxjQUFRLENBQUMsVUFBQVMsS0FBSyxFQUFJO0FBQ2RBLGFBQUssQ0FBQ1gsT0FBTixHQUFnQkgsU0FBUyxDQUFDZSxNQUFWLENBQWlCQyxRQUFqQixDQUEwQmIsT0FBMUM7QUFDSCxPQUZPLENBQVI7QUFHSDtBQUNKLEdBUFEsRUFPUCxDQUFDSCxTQUFELENBUE8sQ0FBVDs7QUExQnNCLFdBb0NQUyxhQXBDTztBQUFBO0FBQUE7O0FBQUE7QUFBQSxzTUFvQ3RCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFK0JRLHlEQUFLLHFEQUZwQzs7QUFBQTtBQUVjQyxzQkFGZDtBQUFBO0FBQUEscUJBRzJCQSxRQUFRLENBQUNDLElBQVQsRUFIM0I7O0FBQUE7QUFHY0Msa0JBSGQ7QUFLWUMsMkJBTFosR0FLNEJELElBQUksQ0FBQ0wsTUFBTCxDQUFZQyxRQUFaLENBQXFCTSxNQUFyQixDQUE0QixVQUFDQyxJQUFELEVBQVE7QUFDcEQsdUJBQU9BLElBQUksQ0FBQ0MsUUFBTCxDQUFjQyxLQUFLLENBQUNDLFdBQU4sQ0FBa0IsUUFBbEIsQ0FBZCxDQUFQO0FBQ0gsZUFGbUIsQ0FMNUI7QUFRUWhCLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVUsYUFBWjtBQVJSO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV1FYLHFCQUFPLENBQUNDLEdBQVI7O0FBWFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FwQ3NCO0FBQUE7QUFBQTs7QUFxRHRCLFNBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLZCxLQUFLLENBQUNNLE9BQU4sQ0FBY3dCLE1BQWQsR0FBdUIsQ0FBdkIsSUFFRyxNQUFDLHlFQUFEO0FBQWdCLGFBQVMsRUFBRUMsZ0VBQTNCO0FBQWtDLGFBQVMsRUFBRW5DLE9BQU8sQ0FBQ0wsVUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0VBQUQ7QUFBTyxhQUFTLEVBQUVLLE9BQU8sQ0FBQ1AsS0FBMUI7QUFBaUMsUUFBSSxFQUFDLE9BQXRDO0FBQThDLGtCQUFXLGVBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUVJLE1BQUMsb0VBQUQ7QUFBVyxTQUFLLEVBQUMsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLEVBR0ksTUFBQyxvRUFBRDtBQUFXLFNBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosRUFJSSxNQUFDLG9FQUFEO0FBQVcsU0FBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixFQUtJLE1BQUMsb0VBQUQ7QUFBVyxTQUFLLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLENBREosQ0FESixFQVVJLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLVyxLQUFLLENBQUNNLE9BQU4sQ0FBYzBCLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ2hDLFFBQUdBLEtBQUssSUFBSWxDLEtBQUssQ0FBQ00sT0FBTixDQUFjd0IsTUFBMUIsRUFBaUM7QUFDN0IsYUFBTyxNQUFDLHlEQUFEO0FBQU8sV0FBRyxFQUFFSSxLQUFaO0FBQW1CLGFBQUssRUFBRUQsSUFBSSxDQUFDRSxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7QUFDSDtBQUNILEdBSkEsQ0FETCxDQVZKLENBREosQ0FIUixDQUZKO0FBNkJILENBbEZEOztHQUFNekMsTTtVQUNjWCxTLEVBQ0NlLHVELEVBQ2VDLHVELEVBQ05LLGtEOzs7S0FKeEJWLE07O0FBb0ZOQSxNQUFNLENBQUMwQyxlQUFQO0FBQUEsK0xBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQkMsaUJBQWhCLFFBQWdCQSxLQUFoQixFQUFzQkMsR0FBdEIsUUFBc0JBLEdBQXRCLEVBQTBCQyxHQUExQixRQUEwQkEsR0FBMUIsRUFBOEJDLEtBQTlCLFFBQThCQSxLQUE5QjtBQUNmZCxnQkFEZSxHQUNSYyxLQUFLLENBQUNkLElBREU7QUFBQSw4Q0FHZDtBQUNIZixzQkFBUSxFQUFFZTtBQURQLGFBSGM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBekI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT2VoQyxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccm9zdGVyLmpzLjc5MWRlOTJkYmFmNWJlMTkwMWE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQge2Nvbm5lY3QsdXNlRGlzcGF0Y2gsdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtnZXRTaW5nbGVSb2FzdGVyLGdldEFsbFBsYXllcklkfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlSW1tZXIgfSBmcm9tIFwidXNlLWltbWVyXCJcclxuaW1wb3J0IENhcmRzIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZHMnO1xyXG5cclxuLy8tLS8vXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1wiLi9mbG9vci5wbmdcIn0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogJ2ZpeGVkJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCdcclxuICAgIH0sXHJcbiAgICB0YWJsZToge1xyXG4gICAgICAgIG1pbldpZHRoOiA2NTAsXHJcbiAgICB9LFxyXG4gICAgdGFibGVTdHlsZToge1xyXG4gICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBSb3N0ZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHt0ZWFtUm9hc3RlcixwZXJzb25JZHN9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuY291bnRlcik7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUltbWVyKHtcclxuICAgICAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgcGxheWVyczogW10sXHJcbiAgICAgICAgcGxheWVyQmlvOiBbXVxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkaXNwYXRjaChnZXRTaW5nbGVSb2FzdGVyKHByb3BzLnRlYW1OYW1lKSk7XHJcbiAgICAgICAgZ2V0QWxsUGxheWVycygpO1xyXG4gICAgfSxbXSlcclxuXHJcbiAgICAvKmdldCBhbGwgcGxheWVyaWQgZm9yIGEgZ2l2ZW4gcm9zdGVyIGJ5IHRlYW0gbmFtZSovXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgaWYoIXRlYW1Sb2FzdGVyKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW4gc29tZXRoaW5nIGhlcmUnKTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlYW1Sb2FzdGVyWzBdLnRlYW1JZCk7XHJcbiAgICAgICAgICAgICBkaXNwYXRjaChnZXRBbGxQbGF5ZXJJZCh0ZWFtUm9hc3RlclswXS50ZWFtSWQpKTtcclxuICAgICAgICAgfVxyXG4gICAgfSxbdGVhbVJvYXN0ZXJdKVxyXG5cclxuICAgLyphcnJheSBvZiBwbGF5ZXIgaWRzKi9cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKCFwZXJzb25JZHMpe1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgc2V0U3RhdGUoZHJhZnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucGxheWVycyA9IHBlcnNvbklkcy5sZWFndWUuc3RhbmRhcmQucGxheWVyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW3BlcnNvbklkc10pXHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBsYXllcnMoKSB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vZGF0YS5uYmEubmV0LzEwcy9wcm9kL3YxLzIwMTkvcGxheWVycy5qc29uYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRUZWFtcyA9IGRhdGEubGVhZ3VlLnN0YW5kYXJkLmZpbHRlcigodGVhbSk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZWFtLmluY2x1ZGVzKGlucHV0LnRvTG93ZXJDYXNlKFwiMjAzNTAwXCIpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRUZWFtcyk7XHJcblxyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKnNldFBsYXllcihkYXRhLmxlYWd1ZS5zdGFuZGFyZC5zdGF0cy5jYXJlZXJTdW1tYXJ5KTsqL1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7c3RhdGUucGxheWVycy5sZW5ndGggPiAwICYmIChcclxuXHJcbiAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IHNpemU9XCJzbWFsbFwiIGFyaWEtbGFiZWw9XCJhIGRlbnNlIHRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5OQU1FPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj5QT0lOVFM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5CTE9DS1M8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5BU1NJU1RTPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+U1RFQUxTPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5wbGF5ZXJzLm1hcCgocG9zdCxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPD0gc3RhdGUucGxheWVycy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2FyZHMga2V5PXtpbmRleH0gYXBvc3Q9e3Bvc3QucGVyc29uSWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuUm9zdGVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKHtzdG9yZSxyZXEscmVzLHF1ZXJ5fSkge1xyXG4gICAgY29uc3QgdGVhbSA9IHF1ZXJ5LnRlYW07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0ZWFtTmFtZTogdGVhbVxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBSb3N0ZXI7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9