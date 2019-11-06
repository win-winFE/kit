'use strict';
/**
 * @api TOAST(message,type) TOAST
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {string} message 文本
 * @apiParam {string} type=3 提示类型 0:对勾 1:错误 2:感叹号 3:无图标
 * @apiDescription app toast 事件
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * TOAST('手机号格式错误')
 * @apiParamExample {string} 返回值
 * 无
 **/

/**
 * todo TOOLS
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'TOAST';
var TOAST = function TOAST(message) {
  var offSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('tools', 'toast', { message: message, offSet: offSet });
  });
};
exports.default = TOAST;
//# sourceMappingURL=TOAST.js.map