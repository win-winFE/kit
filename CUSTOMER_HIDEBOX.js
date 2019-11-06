'use strict';
// 客服中心
// 隐藏输入法键盘

/**
 * todo CUSTOMER
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'CUSTOMER_HIDEBOX';
var CUSTOMER_HIDEBOX = function CUSTOMER_HIDEBOX(_) {
  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('customerService', 'hideInputBox', function (res) {});
  });
};
exports.default = CUSTOMER_HIDEBOX;
//# sourceMappingURL=CUSTOMER_HIDEBOX.js.map