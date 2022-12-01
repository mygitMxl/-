"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immutable = require("immutable");

var defaultStae = (0, _immutable.fromJS)({
  myHeader: true,
  Mylogin: true,
  login: true
  /* 判断用户是否登录 */

}); //stae初始值

var LoginReducer = function LoginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultStae;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'headrShow':
      return state.set('myHeader', false);

    case 'headHide':
      return state.set('myHeader', true);

    case 'Yes':
      return state.set('Mylogin', true);

    case 'No':
      return state.set('Mylogin', false);

    case 'changeLogin':
      return state.set('login', action.value);

    case 'loginout':
      return state.set('login', false);

    default:
      return state;
  }
};

var _default = LoginReducer;
exports["default"] = _default;