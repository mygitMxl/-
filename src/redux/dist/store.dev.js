"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxImmutable = require("redux-immutable");

var _HeadeRducer = _interopRequireDefault(require("./reducers/HeadeRducer"));

var _HomeReducer = _interopRequireDefault(require("./reducers/HomeReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _reduxImmutable.combineReducers)({
  HeaerRducer: _HeadeRducer["default"],
  HomeReducer: _HomeReducer["default"]
});
var store = (0, _redux.legacy_createStore)(reducers, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk["default"])));
var _default = store;
exports["default"] = _default;