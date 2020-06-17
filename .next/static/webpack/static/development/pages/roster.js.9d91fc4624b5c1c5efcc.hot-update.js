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
    __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 25
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yb3N0ZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQXR0YWNobWVudCIsImhlaWdodCIsInRhYmxlIiwibWluV2lkdGgiLCJ0YWJsZVN0eWxlIiwid2lkdGgiLCJtYXJnaW4iLCJSb3N0ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvdW50ZXIiLCJ0ZWFtUm9hc3RlciIsInBlcnNvbklkcyIsInVzZUltbWVyIiwiaXNMb2FkaW5nIiwicGxheWVycyIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0U2luZ2xlUm9hc3RlciIsInRlYW1OYW1lIiwiY29uc29sZSIsImxvZyIsInRlYW1JZCIsImdldEFsbFBsYXllcklkIiwibGVhZ3VlIiwic3RhbmRhcmQiLCJkcmFmdCIsIm1hcCIsInBvc3QiLCJpbmRleCIsInBlcnNvbklkIiwiZ2V0SW5pdGlhbFByb3BzIiwic3RvcmUiLCJyZXEiLCJyZXMiLCJxdWVyeSIsInRlYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLG1CQUFlLGdCQUFTLGFBQVQsTUFEYjtBQUVGQyx3QkFBb0IsRUFBRSxPQUZwQjtBQUdGQyxVQUFNLEVBQUU7QUFITixHQURtQjtBQU16QkMsT0FBSyxFQUFFO0FBQ0hDLFlBQVEsRUFBRTtBQURQLEdBTmtCO0FBU3pCQyxZQUFVLEVBQUU7QUFDUkMsU0FBSyxFQUFFLEtBREM7QUFFUkMsVUFBTSxFQUFFO0FB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OiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccm9zdGVyLmpzLjlkOTFmYzQ2MjRiNWMxYzVlZmNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQge2Nvbm5lY3QsdXNlRGlzcGF0Y2gsdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtnZXRTaW5nbGVSb2FzdGVyLGdldEFsbFBsYXllcklkfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlSW1tZXIgfSBmcm9tIFwidXNlLWltbWVyXCJcclxuaW1wb3J0IENhcmRzIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZHMnO1xyXG5cclxuLy8tLS8vXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1wiLi9mbG9vci5wbmdcIn0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogJ2ZpeGVkJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCdcclxuICAgIH0sXHJcbiAgICB0YWJsZToge1xyXG4gICAgICAgIG1pbldpZHRoOiA2NTAsXHJcbiAgICB9LFxyXG4gICAgdGFibGVTdHlsZToge1xyXG4gICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBSb3N0ZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHt0ZWFtUm9hc3RlcixwZXJzb25JZHN9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuY291bnRlcik7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUltbWVyKHtcclxuICAgICAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgcGxheWVyczogW11cclxuICAgIH0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goZ2V0U2luZ2xlUm9hc3Rlcihwcm9wcy50ZWFtTmFtZSkpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIC8qZ2V0IGFsbCBwbGF5ZXJpZCBmb3IgYSBnaXZlbiByb3N0ZXIgYnkgdGVhbSBuYW1lKi9cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICBpZighdGVhbVJvYXN0ZXIpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coJ3J1biBzb21ldGhpbmcgaGVyZScpO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2codGVhbVJvYXN0ZXJbMF0udGVhbUlkKTtcclxuICAgICAgICAgICAgIGRpc3BhdGNoKGdldEFsbFBsYXllcklkKHRlYW1Sb2FzdGVyWzBdLnRlYW1JZCkpO1xyXG4gICAgICAgICB9XHJcbiAgICB9LFt0ZWFtUm9hc3Rlcl0pXHJcblxyXG4gICAvKmFycmF5IG9mIHBsYXllciBpZHMqL1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoIXBlcnNvbklkcyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd4eHh4eHh4eHgnKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBlcnNvbklkcy5sZWFndWUuc3RhbmRhcmQucGxheWVycylcclxuICAgICAgICAgICAgc2V0U3RhdGUoZHJhZnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucGxheWVycyA9IHBlcnNvbklkcy5sZWFndWUuc3RhbmRhcmQucGxheWVyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW3BlcnNvbklkc10pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtwZXJzb25JZHMubGVhZ3VlLnN0YW5kYXJkLnBsYXllcnMgPiAwICYmIChcclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5wbGF5ZXJzLm1hcCgocG9zdCxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3Bvc3QucGVyc29uSWR9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5Sb3N0ZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oe3N0b3JlLHJlcSxyZXMscXVlcnl9KSB7XHJcbiAgICBjb25zdCB0ZWFtID0gcXVlcnkudGVhbTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlYW1OYW1lOiB0ZWFtXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJvc3RlcjtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=