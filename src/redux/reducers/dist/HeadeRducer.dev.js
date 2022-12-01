"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immutable = require("immutable");

var defaultStae = (0, _immutable.fromJS)({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  //总页码
  mousein: false
}); //stae初始值

var HeadReducer = function HeadReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultStae;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'true':
      return state.set('focused', true);

    case 'fasle':
      return state.set('focused', false);

    case 'change_list':
      return state.merge({
        list: action.payload,
        totalPage: action.totalPage
      });

    case 'MouseEnter':
      return state.set('mousein', true);

    case 'MouseLeave':
      return state.set('mousein', false);

    case 'pages':
      return state.set('page', action.pages);

    default:
      return state;
  }
};

var _default = HeadReducer;
exports["default"] = _default;