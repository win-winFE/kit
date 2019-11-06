'use strict';
// 打开客服

/**
 * todo CUSTOMER
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'CUSTOMER_OPEN';
var CUSTOMER_OPEN = function CUSTOMER_OPEN(url) {
  if (typeof url !== 'string') {
    throw new TypeError('[' + name + '] ' + _config.strError);
  }
  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('customerService', 'showService', { url: url });
  });
};
exports.default = CUSTOMER_OPEN;
//# sourceMappingURL=CUSTOMER_OPEN.js.map