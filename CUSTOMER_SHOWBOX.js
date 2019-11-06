'use strict';
// 客服中心
// 显示输入法键盘

/**
 * todo CUSTOMER
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _config = require('./APP/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'CUSTOMER_HIDEBOX';
var CUSTOMER_HIDEBOX = function CUSTOMER_HIDEBOX(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('customerService', 'showInputBox', obj, function (res) {});
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.objError);
  }
};
exports.default = CUSTOMER_HIDEBOX;
//# sourceMappingURL=CUSTOMER_SHOWBOX.js.map