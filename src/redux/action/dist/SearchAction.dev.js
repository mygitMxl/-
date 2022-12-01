"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getList = exports.changePage = exports.logout = exports.MouseLeave = exports.MouseEnter = exports.handleBlur = exports.handleFlocus = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _immutable = require("immutable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//用于注册
var handleFlocus = function handleFlocus(list) {
  console.log(list);
  /* 依次点击时list的size为10,第二次就为50了 */

  return {
    type: 'true'
  };
};

exports.handleFlocus = handleFlocus;

var handleBlur = function handleBlur() {
  return {
    type: 'fasle'
  };
};

exports.handleBlur = handleBlur;

var MouseEnter = function MouseEnter() {
  return {
    type: 'MouseEnter'
  };
};

exports.MouseEnter = MouseEnter;

var MouseLeave = function MouseLeave() {
  return {
    type: 'MouseLeave'
  };
};

exports.MouseLeave = MouseLeave;

var logout = function logout() {
  return {
    type: 'loginout'
  };
}; //...............................................................


exports.logout = logout;

var changePage = function changePage(page, totalPage, spin) {
  var originAngle = spin.style.transform.replace(/[^0-9]/ig, ''); // originAngle 是原始的角度,replace(/[^0-9]/ig,‘’,非数字内容进行替换成 空

  if (originAngle) {
    originAngle = parseInt(originAngle, 10); //转化成一个正整数
  } else {
    originAngle = 0;
  }

  spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

  if (page < totalPage) {
    //当前页码小于总页码
    return {
      type: 'pages',
      pages: page + 1
    };
  } else {
    return {
      type: 'pages',
      pages: 1
    };
  }
}; //..................................................................................


exports.changePage = changePage;

var getList = function getList() {
  return function (dispacth) {
    _axios["default"].get('https://www.fastmock.site/mock/16730e39be8ca262639484e6621af3e7/api/api').then(function (res) {
      // console.log(res.data);
      dispacth({
        type: 'change_list',
        payload: (0, _immutable.fromJS)(res.data.data),
        //这里要将返回来的数据改成immutable类型,因为不改的话,reucer存入store的状态就是普通对象,在mapSstaeToProps中用getIn去接就会报错
        totalPage: Math.ceil(res.data.data.length / 10) //也就是5,总页码5

      });
    })["catch"](function (error) {
      console.log(error.data);
    });
  };
};

exports.getList = getList;