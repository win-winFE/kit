'use strict';
/**
 * @api PAGE_HIDE(function) PAGE_HIDE
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {function} function 回调函数
 * @apiDescription 界面失去焦点时触发
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * // 主要使用场景
 * // 1、app 处于 h5 界面 ios 点 home 键返回桌面 触发 console.log(1)
 * // 2、h5 通过 JUMP_TO 打开另一个 h5 容器 触发 console.log(1)
 * PAGE_HIDE(_=>{
 *  console.log(1)
 * })
 * @apiParamExample {string} 返回值
 * 无
 **/

// 结果页确认按钮回调

/**
 * todo GLOBAL
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _config = require('./APP/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'CALLBACK_RESULT';
var CALLBACK_RESULT = function CALLBACK_RESULT(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('navigation', 'tradeSucc', obj);
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.objError);
  }
};
exports.default = CALLBACK_RESULT;
//# sourceMappingURL=CALLBACK_RESULT.js.map