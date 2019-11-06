'use strict';
// 客服
// 输入内容回调
// {text: '输入内容'}

/**
 * todo CUSTOMER
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'CUSTOMER_EVENT_TEXT';
var CUSTOMER_EVENT_TEXT = function CUSTOMER_EVENT_TEXT() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      document.addEventListener('CHARTBAR_EVENT_TEXT_SEND', fn);
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.fnError);
  }
};
exports.default = CUSTOMER_EVENT_TEXT;
//# sourceMappingURL=CUSTOMER_EVENT_TEXT.js.map