'use strict';
/**
 * @api JUMP_BACK(num) JUMP_BACK
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {number} num=1 APP 返回 n 层页面
 * @apiDescription APP 返回 n 层页面 默认返回1层页面，即返回上一级页面
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * // 0 为不返回
 * // 1 为返回1层
 * // 默认 为返回1层
 * JUMP_BACK()
 * @apiParamExample {string} 返回值
 * 无
 **/

/**
 * todo JUMP
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'JUMP_BACK';
var JUMP_BACK = function JUMP_BACK() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  if (typeof num === 'number') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('webview', 'back', { index: num });
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.numError);
  }
};
exports.default = JUMP_BACK;
//# sourceMappingURL=JUMP_BACK.js.map