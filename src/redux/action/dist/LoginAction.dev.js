"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZhuCe = exports.DengLu = exports.HeaderHide = exports.HeaderShow = exports.Login = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//用于登录验证
var Login = function Login(account, password) {
  return function (dispatch) {
    _axios["default"].post('https://www.fastmock.site/mock/16730e39be8ca262639484e6621af3e7/api/login', {
      username: account,
      password: password
    }).then(function (res) {
      var result = res.data.info;

      if (result.code === '10001') {
        dispatch(changeLogin());
        localStorage.setItem('token', 'tom');
      } else {
        alert(result.message);
      }
    });
  };
};

exports.Login = Login;

var changeLogin = function changeLogin() {
  return {
    type: 'changeLogin',
    value: false
  };
}; //.......
//.............................
//用于Header组件隐藏与显示


var HeaderShow = function HeaderShow() {
  return {
    type: 'headrShow'
  };
};

exports.HeaderShow = HeaderShow;

var HeaderHide = function HeaderHide() {
  return {
    type: 'headHide'
  };
}; //............................
//用于登录和注册组件切换


exports.HeaderHide = HeaderHide;

var DengLu = function DengLu() {
  return {
    type: 'Yes'
  };
};

exports.DengLu = DengLu;

var ZhuCe = function ZhuCe() {
  return {
    type: 'No'
  };
};

exports.ZhuCe = ZhuCe;