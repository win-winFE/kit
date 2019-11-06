'use strict';
/**
 * @api LOGOUT() LOGOUT
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiDescription 退出登录
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * LOGOUT()
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

var name = 'LOGOUT';
var LOGOUT = function LOGOUT(_) {
  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('login', 'logout');
  });
};
exports.default = LOGOUT;
//# sourceMappingURL=LOGOUT.js.map