'use strict';
// 客服
// 输入内容回调
// {path: '图片存储地址',progress:'进度值'}

/**
 * todo CUSTOMER
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'CUSTOMER_EVENT_UPLOAD';
var CUSTOMER_EVENT_UPLOAD = function CUSTOMER_EVENT_UPLOAD() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      document.addEventListener('CHARTBAR_EVENT_UPLOAD', fn);
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.fnError);
  }
};
exports.default = CUSTOMER_EVENT_UPLOAD;
//# sourceMappingURL=CUSTOMER_EVENT_UPLOAD.js.map