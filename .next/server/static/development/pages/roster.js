module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cards.js":
/*!*****************************!*\
  !*** ./components/Cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/counterActions */ "./redux/actions/counterActions.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "@material-ui/core/TableContainer");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "W:\\1FrontEnd\\react stuff\\courtSide\\components\\Cards.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //-//









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])({
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
  },
  tableStyle: {
    width: '50%',
    margin: 'auto',
    '&:hover': {
      cursor: 'pointer'
    }
  }
});

const Cards = ({
  apost
}) => {
  const classes = useStyles();
  const {
    0: player,
    1: setPlayer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: playerlist,
    1: setPlayerList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  /* useEffect(() => {
       getPlayer(apost);
   }, []);*/

  async function getPlayer(item) {
    try {
      const response = await fetch(`http://data.nba.net/10s/prod/v1/2019/players/${item}_profile.json`);
      const data = await response.json();
      setPlayer(data.league.standard.stats.careerSummary);
    } catch (e) {
      console.log(e);
      setPlayer([]);
    }
  }

  return __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6___default.a, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default.a,
    className: classes.tableStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.table,
    size: "small",
    "aria-label": "a dense table",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, "NAME"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
    align: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, "POSITION"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, "JERSEY#"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, "HEIGHT"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, "YEARS PRO"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, apost.map(row => __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: row.personId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "th",
    scope: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }, row.firstName, " ", row.lastName), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
    align: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }, row.pos), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, row.jersey), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, row.heightFeet, "'", row.heightInches), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 29
    }
  }, row.yearsPro))))));
};

Cards.getInitialProps = async function ({
  store
}) {};

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ }),

/***/ "./pages/roster.js":
/*!*************************!*\
  !*** ./pages/roster.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/counterActions */ "./redux/actions/counterActions.js");
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-immer */ "use-immer");
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_immer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Cards */ "./components/Cards.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "@material-ui/core/TableContainer");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "W:\\1FrontEnd\\react stuff\\courtSide\\pages\\roster.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 //--//









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  root: {
    backgroundImage: `url(${"./floor.png"})`,
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

const Roster = props => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    teamRoaster,
    personIds
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.counter);
  const [state, setState] = Object(use_immer__WEBPACK_IMPORTED_MODULE_4__["useImmer"])({
    isLoading: true,
    players: [],
    playerBio: []
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_3__["getSingleRoaster"])(props.teamName));
  }, []);
  /*get all playerid for a given roster by team name*/

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!teamRoaster) {
      console.log('run something here');
    } else {
      console.log(teamRoaster[0].teamId);
      dispatch(Object(_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_3__["getAllPlayerId"])(teamRoaster[0].teamId));
      getAllPlayers(teamRoaster[0].teamId);
    }
  }, [teamRoaster]);
  /*array of player ids*/

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!personIds) {} else {
      setState(draft => {
        draft.players = personIds.league.standard.players;
      });
    }
  }, [personIds]);

  async function getAllPlayers(itemId) {
    try {
      const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`http://data.nba.net/10s/prod/v1/2019/players.json`);
      const data = await response.json();
      setState(draft => {
        draft.playerBio = data.league.standard.filter(team => {
          return team.teamId.includes(itemId);
        });
      });
    } catch (e) {
      console.log(e);
    }
    /*setPlayer(data.league.standard.stats.careerSummary);*/

  }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, state.playerBio.length > 0 && __jsx(_components_Cards__WEBPACK_IMPORTED_MODULE_5__["default"], {
    apost: state.playerBio,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }));
};

Roster.getInitialProps = async function ({
  store,
  req,
  res,
  query
}) {
  const team = query.team;
  return {
    teamName: team
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Roster);

/***/ }),

/***/ "./redux/actions/counterActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/counterActions.js ***!
  \*****************************************/
/*! exports provided: incrementCounter, decrementCounter, searchPlayerTwo, getPlayers, addTeams, searchPlayers, getSingleRoaster, getAllPlayerId, setLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCounter", function() { return incrementCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementCounter", function() { return decrementCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPlayerTwo", function() { return searchPlayerTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayers", function() { return getPlayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTeams", function() { return addTeams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPlayers", function() { return searchPlayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleRoaster", function() { return getSingleRoaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPlayerId", function() { return getAllPlayerId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return setLoading; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./redux/actions/types.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);

 //Action Creator

const incrementCounter = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_COUNTER"]
});
const decrementCounter = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DECREMENT_COUNTER"]
});
const searchPlayerTwo = text => async dispatch => {
  try {
    const res = await fetch(`http://data.nba.net/10s/prod/v1/2019/players/${text}_profile.json`);
    const data = await res.json();
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PLAYER_TWO"],
      payload: data.league.standard.stats.careerSummary
    });
  } catch (e) {
    console.log(e);
  }
};
const getPlayers = () => async dispatch => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_PLAYERS"]
}); //-//

const addTeams = Teams => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SAVE_TEAMS"],
  payload: Teams
});
const searchPlayers = term => async dispatch => {
  try {
    //send to the reducer
    setLoading();
    const res = await fetch(`http://data.nba.net/10s/prod/v1/2019/players/${term}_profile.json`);
    const data = await res.json();
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PLAYER_ONE"],
      payload: data.league.standard.stats.careerSummary
    });
  } catch (e) {
    console.log(e);
  }
};
const getSingleRoaster = teamname => dispatch => {
  //send to the reducer
  setLoading();
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_SINGLE_ROASTER"],
    payload: teamname
  });
};
const getAllPlayerId = teamid => async dispatch => {
  try {
    //send to the reducer
    setLoading();
    const res = await fetch(`http://data.nba.net/10s/prod/v1/2019/teams/${teamid}/roster.json`);
    const data = await res.json();
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_PLAYERS_ID"],
      payload: data
    });
  } catch (e) {}
}; // Set loading to true

const setLoading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"]
  };
};

/***/ }),

/***/ "./redux/actions/types.js":
/*!********************************!*\
  !*** ./redux/actions/types.js ***!
  \********************************/
/*! exports provided: INCREMENT_COUNTER, DECREMENT_COUNTER, SAVE_TEAMS, GET_SINGLE_ROASTER, GET_PLAYERS, SEARCH_PLAYER_ONE, SEARCH_PLAYER_TWO, SET_LOADING, GET_ALL_PLAYERS_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_COUNTER", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER", function() { return DECREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_TEAMS", function() { return SAVE_TEAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SINGLE_ROASTER", function() { return GET_SINGLE_ROASTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PLAYERS", function() { return GET_PLAYERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PLAYER_ONE", function() { return SEARCH_PLAYER_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PLAYER_TWO", function() { return SEARCH_PLAYER_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_PLAYERS_ID", function() { return GET_ALL_PLAYERS_ID; });
//Action Types
const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";
const SAVE_TEAMS = "SAVE_TEAMS";
const GET_SINGLE_ROASTER = "GET_SINGLE_ROASTER";
const GET_PLAYERS = 'GET_PLAYERS';
const SEARCH_PLAYER_ONE = 'SEARCH_PLAYER_ONE';
const SEARCH_PLAYER_TWO = 'SEARCH_PLAYER_TWO';
const SET_LOADING = 'SET_LOADING';
const GET_ALL_PLAYERS_ID = 'GET_ALL_PLAYERS_ID ';

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/roster.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! W:\1FrontEnd\react stuff\courtSide\pages\roster.js */"./pages/roster.js");


/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableContainer":
/*!***************************************************!*\
  !*** external "@material-ui/core/TableContainer" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "use-immer":
/*!****************************!*\
  !*** external "use-immer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-immer");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9yb3N0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3R5cGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVzZS1pbW1lclwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWluV2lkdGgiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFyZ2luIiwibG9zZXIiLCJidWxsZXQiLCJkaXNwbGF5IiwidHJhbnNmb3JtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsImZsZXhDZW50ZXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5SaWdodCIsImNvbHVtbkNhcmQiLCJwYWRkaW5nIiwidGFibGVTdHlsZSIsImN1cnNvciIsIkNhcmRzIiwiYXBvc3QiLCJjbGFzc2VzIiwicGxheWVyIiwic2V0UGxheWVyIiwidXNlU3RhdGUiLCJwbGF5ZXJsaXN0Iiwic2V0UGxheWVyTGlzdCIsImdldFBsYXllciIsIml0ZW0iLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJsZWFndWUiLCJzdGFuZGFyZCIsInN0YXRzIiwiY2FyZWVyU3VtbWFyeSIsImUiLCJjb25zb2xlIiwibG9nIiwiUGFwZXIiLCJ0YWJsZSIsIm1hcCIsInJvdyIsInBlcnNvbklkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJqZXJzZXkiLCJoZWlnaHRGZWV0IiwiaGVpZ2h0SW5jaGVzIiwieWVhcnNQcm8iLCJnZXRJbml0aWFsUHJvcHMiLCJzdG9yZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRBdHRhY2htZW50IiwiaGVpZ2h0IiwiUm9zdGVyIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidGVhbVJvYXN0ZXIiLCJwZXJzb25JZHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY291bnRlciIsInNldFN0YXRlIiwidXNlSW1tZXIiLCJpc0xvYWRpbmciLCJwbGF5ZXJzIiwicGxheWVyQmlvIiwidXNlRWZmZWN0IiwiZ2V0U2luZ2xlUm9hc3RlciIsInRlYW1OYW1lIiwidGVhbUlkIiwiZ2V0QWxsUGxheWVySWQiLCJnZXRBbGxQbGF5ZXJzIiwiZHJhZnQiLCJpdGVtSWQiLCJmaWx0ZXIiLCJ0ZWFtIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImluY3JlbWVudENvdW50ZXIiLCJ0eXBlIiwiSU5DUkVNRU5UX0NPVU5URVIiLCJkZWNyZW1lbnRDb3VudGVyIiwiREVDUkVNRU5UX0NPVU5URVIiLCJzZWFyY2hQbGF5ZXJUd28iLCJ0ZXh0IiwiU0VBUkNIX1BMQVlFUl9UV08iLCJwYXlsb2FkIiwiZ2V0UGxheWVycyIsIkdFVF9QTEFZRVJTIiwiYWRkVGVhbXMiLCJUZWFtcyIsIlNBVkVfVEVBTVMiLCJzZWFyY2hQbGF5ZXJzIiwidGVybSIsInNldExvYWRpbmciLCJTRUFSQ0hfUExBWUVSX09ORSIsInRlYW1uYW1lIiwiR0VUX1NJTkdMRV9ST0FTVEVSIiwidGVhbWlkIiwiR0VUX0FMTF9QTEFZRVJTX0lEIiwiU0VUX0xPQURJTkciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QU1ULFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1PLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1WLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1lLFdBQVcsR0FBRSxhQUFuQjtBQUNBLE1BQU1ELGtCQUFrQixHQUFFLHFCQUExQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQLG9EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyb3N0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge3NlYXJjaFBsYXllcnN9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnMnO1xyXG5cclxuLy8tLy9cclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IHttYWtlU3R5bGVzLHN0eWxlZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDI3NSxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMGQxYjInLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgbWFyZ2luOiAnMjBweCAwJyxcclxuICAgIH0sXHJcbiAgICBsb3Nlcjoge1xyXG4gICAgICAgIG1pbldpZHRoOiAyNzUsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZkZDU3JyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIG1hcmdpbjogJzIwcHggMCcsXHJcbiAgICB9LFxyXG4gICAgYnVsbGV0OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgbWFyZ2luOiAnMCAycHgnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgfSxcclxuICAgIHBvczoge1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTIsXHJcbiAgICB9LFxyXG4gICAgZmxleENlbnRlcjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luOiAnMTAwcHggMCcsXHJcbiAgICAgICAgJyYgPiBkaXYnOntcclxuICAgICAgICAgICAgd2lkdGg6ICc0MCUnLFxyXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb2x1bW5DYXJkOntcclxuICAgICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgcGFkZGluZzogJy43NXJlbScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwZDFiMicsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgIH0sXHJcbiAgICB0YWJsZVN0eWxlOiB7XHJcbiAgICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICAgICcmOmhvdmVyJzp7XHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5jb25zdCBDYXJkcyA9ICh7YXBvc3R9KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbcGxheWVyLHNldFBsYXllcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGxheWVybGlzdCxzZXRQbGF5ZXJMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgIC8qIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0UGxheWVyKGFwb3N0KTtcclxuICAgIH0sIFtdKTsqL1xyXG5cclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWVyKGl0ZW0pIHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9kYXRhLm5iYS5uZXQvMTBzL3Byb2QvdjEvMjAxOS9wbGF5ZXJzLyR7aXRlbX1fcHJvZmlsZS5qc29uYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFBsYXllcihkYXRhLmxlYWd1ZS5zdGFuZGFyZC5zdGF0cy5jYXJlZXJTdW1tYXJ5KTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHNldFBsYXllcihbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZVN0eWxlfT5cclxuICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cImEgZGVuc2UgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPk5BTUU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj5QT1NJVElPTjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+SkVSU0VZIzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+SEVJR0hUPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5ZRUFSUyBQUk88L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHthcG9zdC5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cucGVyc29uSWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5maXJzdE5hbWV9IHtyb3cubGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+e3Jvdy5wb3N9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+e3Jvdy5qZXJzZXl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+e3Jvdy5oZWlnaHRGZWV0fXtcIidcIn17cm93LmhlaWdodEluY2hlc308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cm93LnllYXJzUHJvfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuQ2FyZHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oe3N0b3JlfSkge1xyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYXJkc1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHtjb25uZWN0LHVzZURpc3BhdGNoLHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7Z2V0U2luZ2xlUm9hc3RlcixnZXRBbGxQbGF5ZXJJZH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUltbWVyIH0gZnJvbSBcInVzZS1pbW1lclwiXHJcbmltcG9ydCBDYXJkcyBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRzJztcclxuXHJcbi8vLS0vL1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtcIi4vZmxvb3IucG5nXCJ9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6ICdmaXhlZCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnXHJcbiAgICB9LFxyXG4gICAgdGFibGU6IHtcclxuICAgICAgICBtaW5XaWR0aDogNjUwLFxyXG4gICAgfSxcclxuICAgIHRhYmxlU3R5bGU6IHtcclxuICAgICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgUm9zdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7dGVhbVJvYXN0ZXIscGVyc29uSWRzfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmNvdW50ZXIpO1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlSW1tZXIoe1xyXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBwbGF5ZXJzOiBbXSxcclxuICAgICAgICBwbGF5ZXJCaW86IFtdXHJcbiAgICB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKGdldFNpbmdsZVJvYXN0ZXIocHJvcHMudGVhbU5hbWUpKTtcclxuICAgIH0sW10pXHJcblxyXG4gICAgLypnZXQgYWxsIHBsYXllcmlkIGZvciBhIGdpdmVuIHJvc3RlciBieSB0ZWFtIG5hbWUqL1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgIGlmKCF0ZWFtUm9hc3Rlcil7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZygncnVuIHNvbWV0aGluZyBoZXJlJyk7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZWFtUm9hc3RlclswXS50ZWFtSWQpO1xyXG4gICAgICAgICAgICAgZGlzcGF0Y2goZ2V0QWxsUGxheWVySWQodGVhbVJvYXN0ZXJbMF0udGVhbUlkKSk7XHJcbiAgICAgICAgICAgICBnZXRBbGxQbGF5ZXJzKHRlYW1Sb2FzdGVyWzBdLnRlYW1JZCk7XHJcbiAgICAgICAgIH1cclxuICAgIH0sW3RlYW1Sb2FzdGVyXSlcclxuXHJcbiAgIC8qYXJyYXkgb2YgcGxheWVyIGlkcyovXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZighcGVyc29uSWRzKXtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKGRyYWZ0ID0+IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnBsYXllcnMgPSBwZXJzb25JZHMubGVhZ3VlLnN0YW5kYXJkLnBsYXllcnNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbcGVyc29uSWRzXSlcclxuXHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBsYXllcnMoaXRlbUlkKSB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vZGF0YS5uYmEubmV0LzEwcy9wcm9kL3YxLzIwMTkvcGxheWVycy5qc29uYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHNldFN0YXRlKGRyYWZ0ID0+IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnBsYXllckJpbyA9IGRhdGEubGVhZ3VlLnN0YW5kYXJkLmZpbHRlcigodGVhbSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVhbS50ZWFtSWQuaW5jbHVkZXMoaXRlbUlkKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qc2V0UGxheWVyKGRhdGEubGVhZ3VlLnN0YW5kYXJkLnN0YXRzLmNhcmVlclN1bW1hcnkpOyovXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtzdGF0ZS5wbGF5ZXJCaW8ubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Q2FyZHMgYXBvc3Q9e3N0YXRlLnBsYXllckJpb30vPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcblJvc3Rlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbih7c3RvcmUscmVxLHJlcyxxdWVyeX0pIHtcclxuICAgIGNvbnN0IHRlYW0gPSBxdWVyeS50ZWFtO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVhbU5hbWU6IHRlYW1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUm9zdGVyO1xyXG5cclxuIiwiaW1wb3J0IHtJTkNSRU1FTlRfQ09VTlRFUixcclxuICAgIERFQ1JFTUVOVF9DT1VOVEVSLFxyXG4gICAgU0FWRV9URUFNUyxcclxuICAgIEdFVF9QTEFZRVJTLFxyXG4gICAgU0VBUkNIX1BMQVlFUl9PTkUsXHJcbiAgICBTRUFSQ0hfUExBWUVSX1RXTyxcclxuICAgIEdFVF9TSU5HTEVfUk9BU1RFUixcclxuICAgIFNFVF9MT0FESU5HLFxyXG4gICAgR0VUX0FMTF9QTEFZRVJTX0lEIH0gZnJvbSAnLi90eXBlcydcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuXHJcbi8vQWN0aW9uIENyZWF0b3JcclxuZXhwb3J0IGNvbnN0IGluY3JlbWVudENvdW50ZXIgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogSU5DUkVNRU5UX0NPVU5URVJcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVjcmVtZW50Q291bnRlciA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBERUNSRU1FTlRfQ09VTlRFUlxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoUGxheWVyVHdvID0gdGV4dCA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9kYXRhLm5iYS5uZXQvMTBzL3Byb2QvdjEvMjAxOS9wbGF5ZXJzLyR7dGV4dH1fcHJvZmlsZS5qc29uYCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogU0VBUkNIX1BMQVlFUl9UV08sXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGRhdGEubGVhZ3VlLnN0YW5kYXJkLnN0YXRzLmNhcmVlclN1bW1hcnlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQbGF5ZXJzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4gKHtcclxuICAgIHR5cGU6IEdFVF9QTEFZRVJTXHJcbn0pO1xyXG5cclxuXHJcbi8vLS8vXHJcbmV4cG9ydCBjb25zdCBhZGRUZWFtcyA9IFRlYW1zID0+ICh7XHJcbiAgICB0eXBlOiBTQVZFX1RFQU1TLFxyXG4gICAgcGF5bG9hZDogVGVhbXNcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoUGxheWVycyA9ICh0ZXJtKSAgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIC8vc2VuZCB0byB0aGUgcmVkdWNlclxyXG4gICAgICAgIHNldExvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9kYXRhLm5iYS5uZXQvMTBzL3Byb2QvdjEvMjAxOS9wbGF5ZXJzLyR7dGVybX1fcHJvZmlsZS5qc29uYCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogU0VBUkNIX1BMQVlFUl9PTkUsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGRhdGEubGVhZ3VlLnN0YW5kYXJkLnN0YXRzLmNhcmVlclN1bW1hcnlcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2luZ2xlUm9hc3RlciA9IHRlYW1uYW1lID0+IGRpc3BhdGNoID0+e1xyXG5cclxuICAgIC8vc2VuZCB0byB0aGUgcmVkdWNlclxyXG4gICAgc2V0TG9hZGluZygpO1xyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBHRVRfU0lOR0xFX1JPQVNURVIsXHJcbiAgICAgICAgcGF5bG9hZDogdGVhbW5hbWVcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxQbGF5ZXJJZCA9IHRlYW1pZCA9PiBhc3luYyBkaXNwYXRjaCA9PntcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgLy9zZW5kIHRvIHRoZSByZWR1Y2VyXHJcbiAgICAgICAgc2V0TG9hZGluZygpO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2RhdGEubmJhLm5ldC8xMHMvcHJvZC92MS8yMDE5L3RlYW1zLyR7dGVhbWlkfS9yb3N0ZXIuanNvbmApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEdFVF9BTExfUExBWUVSU19JRCxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2ggKGUpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBTZXQgbG9hZGluZyB0byB0cnVlXHJcbmV4cG9ydCBjb25zdCBzZXRMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBTRVRfTE9BRElOR1xyXG4gICAgfTtcclxufTtcclxuIiwiLy9BY3Rpb24gVHlwZXNcclxuZXhwb3J0IGNvbnN0IElOQ1JFTUVOVF9DT1VOVEVSID0gXCJJTkNSRU1FTlRfQ09VTlRFUlwiO1xyXG5leHBvcnQgY29uc3QgREVDUkVNRU5UX0NPVU5URVIgPSBcIkRFQ1JFTUVOVF9DT1VOVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBTQVZFX1RFQU1TID0gXCJTQVZFX1RFQU1TXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU0lOR0xFX1JPQVNURVIgPSBcIkdFVF9TSU5HTEVfUk9BU1RFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BMQVlFUlMgPSAnR0VUX1BMQVlFUlMnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BMQVlFUl9PTkUgPSAnU0VBUkNIX1BMQVlFUl9PTkUnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BMQVlFUl9UV08gPSAnU0VBUkNIX1BMQVlFUl9UV08nO1xyXG5leHBvcnQgY29uc3QgU0VUX0xPQURJTkcgPSdTRVRfTE9BRElORyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1BMQVlFUlNfSUQgPSdHRVRfQUxMX1BMQVlFUlNfSUQgJztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1c2UtaW1tZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==