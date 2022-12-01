"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Addition = exports.SearchInfoItem = exports.SearchInfoList = exports.SearchInfoSwitch = exports.SearchInfoTitle = exports.SearchInfo = exports.NavSearch = exports.SearchWrapper = exports.NavItem = exports.Nav = exports.Logo = exports.HeaderWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _logo = _interopRequireDefault(require("../../statics/logo.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\nfloat:right;\nmargin-top:9px;\npadding: 0 20px;\nmargin-right:20px;\nline-height:38px;\nborder:1px solid ;\nborder-radius:19px;\n&.reg{\n  color:#ec6149\n}\n&.writing{\n  color:#fff;\n  background-color:#ec6149;\n}\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n position:absolute;\n right:0;\n top:0;\n height:56px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\ndisplay: block;\nfloat: left;\nline-height: 20px;\npadding: 0 5px;\nmargin-right: 10px;\nmargin-bottom: 15px;\nfont-size: 12px;\nborder: 1px solid #ddd;\ncolor: #787878;\nborder-radius: 3px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\toverflow: hidden;\n  margin-top:8px\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\nfloat: right;\nfont-size: 13px;\ncursor: pointer;\n.spin{                  //\u6362\u4E00\u6362\u56FE\u6807\n  display: block;\n  float: left;\n  font-size: 12px;\n  margin-right: 2px;\n  transition: all .2s ease-in;     /* \u4E24\u79D2\u6267\u884C\u5B8C\u6BD5 */\n  transform-origin: center center; //\u56F4\u7740\u81EA\u5DF1\u65CB\u8F6C\n} \n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\nmargin-top: 20px;\nmargin-bottom: 15px;\nline-height: 20px;\nfont-size: 14px;\ncolor: #969696;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nposition: absolute;\nleft: 0;\ntop: 56px;\nwidth: 240px;\npadding: 0 20px;\nbox-shadow: 0 0 8px rgba(0, 0, 0, .2);\nbackground: #fff;\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n width:160px;\n height:38px;\n boredr:none;\n outline:none;\n border-radius:19px;\n background:#eee;\n margin-top:9px;\n margin-left:20px\n padding: 0 30px 0 20px;\n box-sizing: border-box;      //\u76D2\u5B50\u5BBD\u5EA6\u4E0D\u53D7padding\u6216margin\u5F71\u54CD\n font-size:14px\n &::placeholder{\n    color:#999\n }\n &.focused{                  //&\u4EE3\u8868\u540C\u7EA7\n  width:250px\n }\n &.slide-enter{\n  transition: all .2s ease-out        //\u8FD9\u91CC\u7684\u65F6\u957F\u8981\u548CHeader\u4E2D\u5BF9\u5E94\u4E0A\n  }\n  &.slide-enter-active{\n    width:240px\n  }\n  &.slide-exit{\n    transition: all .2s ease-out  \n  }\n  &.slide-exit-active{\n    width:160px\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\nposition:relative;\nfloat:left;                  //\u5176\u4ED6\u5143\u7D20\u6D6E\u52A8\u4E86\u5B83\u4E5F\u8981\u6D6E\u52A8\n.zoom {\n  position: absolute;        //\u7ED9SearchWrapper\u4E0B\u7684\u6240\u6709iconfont\u52A0\u6837\u5F0F\n  right: 5px;\n  top:13px\n  width: 30px;\n  line-height: 30px;\n  border-radius: 15px;\n  text-align: center;\n  &.focused {\n    background: #777;\n    color: #fff;  \n}\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nline-height:56px;\npadding: 0 15px\nfont-size:17px\n&.left{                    /*Navitem\u4E2D\u6709clasName='left'\u5411\u5DE6\u5426\u5219\u5411\u53F3*/\n    float:left;\n}\n&.right{\n    float:right\n    color:#969696\n}\n&.active{\n color:#ea6f5a\n}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nwidth:960px;\nheight:100%;\npadding-right:70px;\nmargin:0 auto;\nbox-sizing:border-box;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nposition:absolute;\ntop:0;\nleft:0;\ndisplay:block\nwidth:100px;\nheight:56px;\nbackground: url(", ");    //\u56FE\u7247\nbackground-size:contain;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n position: relative;\n z-index: 1;\n height:58px;\n border-bottom: 2px solid #f0f0f0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderWrapper = _styledComponents["default"].div(_templateObject());

exports.HeaderWrapper = HeaderWrapper;

var Logo = _styledComponents["default"].a(_templateObject2(), _logo["default"]);

exports.Logo = Logo;

var Nav = _styledComponents["default"].div(_templateObject3());

exports.Nav = Nav;

var NavItem = _styledComponents["default"].div(_templateObject4());

exports.NavItem = NavItem;

var SearchWrapper = _styledComponents["default"].div(_templateObject5());

exports.SearchWrapper = SearchWrapper;

var NavSearch = _styledComponents["default"].input.attrs({
  /* attrs是属性 */
  placeholder: '搜索'
})(_templateObject6());

exports.NavSearch = NavSearch;

var SearchInfo = _styledComponents["default"].div(_templateObject7());

exports.SearchInfo = SearchInfo;

var SearchInfoTitle = _styledComponents["default"].div(_templateObject8());

exports.SearchInfoTitle = SearchInfoTitle;

var SearchInfoSwitch = _styledComponents["default"].span(_templateObject9());

exports.SearchInfoSwitch = SearchInfoSwitch;

var SearchInfoList = _styledComponents["default"].div(_templateObject10());

exports.SearchInfoList = SearchInfoList;

var SearchInfoItem = _styledComponents["default"].a(_templateObject11());

exports.SearchInfoItem = SearchInfoItem;

var Addition = _styledComponents["default"].div(_templateObject12());

exports.Addition = Addition;

var Button = _styledComponents["default"].div(_templateObject13());

exports.Button = Button;