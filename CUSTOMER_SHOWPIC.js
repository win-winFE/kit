'use strict';
// {
//   picUrl: 'http://...'  //预览的图片地址
// }

/**
 * todo CUSTOMER
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'CUSTOMER_SHOWPIC';
var CUSTOMER_SHOWPIC = function CUSTOMER_SHOWPIC(picUrl) {
  if (typeof picUrl !== 'string') {
    throw new TypeError('[' + name + '] ' + _config.strError);
  }
  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('customerService', 'showPic', { picUrl: picUrl });
  });
};
exports.default = CUSTOMER_SHOWPIC;
//# sourceMappingURL=CUSTOMER_SHOWPIC.js.map