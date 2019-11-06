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

// 页面 跳转 下一级页面
// app 进入 后台
// 页面 销毁

/**
 * todo GLOBAL
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'PAGE_HIDE';
var PAGE_HIDE = function PAGE_HIDE(fn) {
  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      document.addEventListener('onpagehide', fn);
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.fnError);
  }
};
exports.default = PAGE_HIDE;
//# sourceMappingURL=PAGE_HIDE.js.map