"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecommendBox2 = exports.RecommendMaBox = exports.RecommendMa = exports.RecommendInfo = exports.RecommendWriper = exports.ListInfo = exports.ListItem = exports.TopicItem = exports.TopicWrapper = exports.HomeRight = exports.HomeLeft = exports.HomeWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\nposition:absolute\ntop:-188px\nleft:25px\nwidth:170px\nheight:170px\nborder:1px solid #ccc\nbackground:white\nborder-radius:6px\n.pic{\n    width:150px\n    height:150px\n    float:left\n    padding:7px 10px\n}\n.triangle{\n    position:absolute\n    bottom:-26px\n    left:75px\n    border-width:13px;\n    border-style:solid;\n    border-color:white transparent transparent transparent;\n}\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\npadding:7px 10px\n.pic{\n    width:50px\n    height:50px\n    float:left\n    margin-right:7px\n}\n.phone{\nfont-size:14px\ncolor:#333333\nmargin-top:6px\n}\n.create{\nfont-size:12px\ncolor:#999999\nmargin-top:14px\n}\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\nposition:relative\nwidth:218px\nheight:66px\nborder:1px solid #f0f0f0\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\nwidth:218px\nborder:1px solid\nmargin-bottom:6px\n.pic{\n    height:39px\n    cursor:pointer\n}\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\nheight:461px\nborder:1px solid\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nwidth:500px\nfloat:left\n.title{\n    line-height:27px;\n     font-size:18px;\n     font-weight:bold\n     color:#333\n}\n.desc{\n    line-height:24px;\n    font-size:13px;\n    color:#999\n}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\npadding:20px 0;\noverflow: hidden;\nborder-bottom:1px solid #dcdcdc\n.pic{\n    width:125px;\n    height:100px;\n    float:right\n    border-radius:8px\n}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\nfloat: left;\nheight: 32px;\nline-height: 32px;\nmargin-left: 18px;\nmargin-bottom: 18px;\npadding-right: 10px\nbackground: #f7f7f7;\nfont-size: 14px;\ncolor: #000;\nborder: 1px solid #dcdcdc;\nborder-radius: 4px;\n.topic-pic {\n    display: block;\n    float: left;\n    width: 32px;\n    height: 32px;\n    margin-right: 10px;\n}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n overflow:hidden;\n padding:20px 0 10px 0\n border-bottom:1px solid #dcdcdc\n margin-left:-18px\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nwidth:275px;\nfloat:right\nborder:1px solid blue\npadding-top:30px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nfloat:left;\nmargin-left:15px;\npadding-top:30px;\nborder:1px solid red\nwidth:625px;\n.banner-img{\n    width:625px;\n    height:270px\n}\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nwidth:960px;\nmargin:0 auto;\noverflow:hidden\nborder:1px solid\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//整体框架
var HomeWrapper = _styledComponents["default"].div(_templateObject());

exports.HomeWrapper = HomeWrapper;

var HomeLeft = _styledComponents["default"].div(_templateObject2());

exports.HomeLeft = HomeLeft;

var HomeRight = _styledComponents["default"].div(_templateObject3()); //..................................................
//Topic区域


exports.HomeRight = HomeRight;

var TopicWrapper = _styledComponents["default"].div(_templateObject4());

exports.TopicWrapper = TopicWrapper;

var TopicItem = _styledComponents["default"].div(_templateObject5()); //..........................................................
//List区域


exports.TopicItem = TopicItem;

var ListItem = _styledComponents["default"].div(_templateObject6());

exports.ListItem = ListItem;

var ListInfo = _styledComponents["default"].div(_templateObject7()); //................................................
//recommend部分


exports.ListInfo = ListInfo;

var RecommendWriper = _styledComponents["default"].div(_templateObject8());

exports.RecommendWriper = RecommendWriper;

var RecommendInfo = _styledComponents["default"].div(_templateObject9());

exports.RecommendInfo = RecommendInfo;

var RecommendMa = _styledComponents["default"].div(_templateObject10());

exports.RecommendMa = RecommendMa;

var RecommendMaBox = _styledComponents["default"].div(_templateObject11());

exports.RecommendMaBox = RecommendMaBox;

var RecommendBox2 = _styledComponents["default"].div(_templateObject12());

exports.RecommendBox2 = RecommendBox2;