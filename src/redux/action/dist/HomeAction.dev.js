"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMoreList = exports.getHomeInfo = exports.changHomeData = exports.changeScrollTopShow = exports.codeLeave = exports.codeEnter = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _immutable = require("immutable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var codeEnter = function codeEnter() {
  return {
    type: 'codeEnter'
  };
};

exports.codeEnter = codeEnter;

var codeLeave = function codeLeave() {
  return {
    type: 'codeLeave'
  };
};

exports.codeLeave = codeLeave;

var changeScrollTopShow = function changeScrollTopShow() {
  if (document.documentElement.scrollTop > 100) {
    return {
      type: 'toggleTopShow',
      payload: true
    };
  } else {
    return {
      type: 'toggleTopShow',
      payload: false
    };
  }
}; //....................................................................
//Home所有数据都在这


exports.changeScrollTopShow = changeScrollTopShow;

var changHomeData = function changHomeData(result) {
  return {
    type: 'change_hone_data',
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
  };
};

exports.changHomeData = changHomeData;

var getHomeInfo = function getHomeInfo() {
  return function (dispatch) {
    _axios["default"].get('https://www.fastmock.site/mock/c1248b4428d69377c3001bf1361e444c/api/home').then(function (res) {
      var result = res.data.data;
      dispatch(changHomeData(result));
    });
  };
}; //........................................................................
//List组件的异步,获取更多数据


exports.getHomeInfo = getHomeInfo;

var getMoreList = function getMoreList(page) {
  return function (dispatch) {
    _axios["default"].get('https://www.fastmock.site/mock/c1248b4428d69377c3001bf1361e444c/api/homelist').then(function (res) {
      var result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    });
  };
};

exports.getMoreList = getMoreList;

var addHomeList = function addHomeList(result, nexpage) {
  return {
    type: 'addList',
    list: (0, _immutable.fromJS)(result),

    /* 这里记得转immutable,fouze获取组件获取数据得不到 */
    nexpage: nexpage
  };
};