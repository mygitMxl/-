"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _HeadeRducer = _interopRequireDefault(require("./reducers/HeadeRducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const reducers=combineReducers(HeaerRducer )
var store = (0, _redux.legacy_createStore)(_HeadeRducer["default"]);
var _default = store;
exports["default"] = _default;