'use strict';
/**
 * @api LOGIN_EVENT_ADD(function) LOGIN_EVENT_ADD
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {function} function 自定义函数
 * @apiDescription 添加 app 登录后回调函数，app 登录后会触发
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * // 通过 LOGIN 触发登录
 * LOGIN()
 * // 用户登录后 触发 console.log(1)
 * LOGIN_EVENT_ADD(_=>{
 *  console.log(1)
 * })
 * @apiParamExample {string} 返回值
 * 无
 **/

/**
 * todo LOGIN
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'CALLBACK_LOGIN';
var CALLBACK_LOGIN = function CALLBACK_LOGIN() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      document.addEventListener('LoginEvent', fn);
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.fnError);
  }
};
exports.default = CALLBACK_LOGIN;
//# sourceMappingURL=CALLBACK_LOGIN.js.map