'use strict';
// 客服
// 输入内容回调
// {path: '图片存储地址',smallPic:'缩略图'}

/**
 * todo CUSTOMER
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'CUSTOMER_EVENT_SEL';
var CUSTOMER_EVENT_SEL = function CUSTOMER_EVENT_SEL() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      document.addEventListener('CHARTBAR_EVENT_SEL', fn);
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.fnError);
  }
};
exports.default = CUSTOMER_EVENT_SEL;
//# sourceMappingURL=CUSTOMER_EVENT_SEL.js.map