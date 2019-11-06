'use strict';
/**
 * @api LOGIN() LOGIN
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiDescription 跳转 app 登录页
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * LOGIN()
 * @apiParamExample {string} 返回值
 * 触发 LOGIN_EVENT_ADD中 的事件
 **/

/**
 * todo LOGIN
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'LOGIN';
var LOGIN = function LOGIN() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('login', 'login', function (res) {
      var code = res.code,
          response = res.response;

      if (code == 0) {
        fn(response);
      } else {
        throw new Error('[' + name + '] ' + _config.appError);
      }
    });
  });
};
exports.default = LOGIN;
//# sourceMappingURL=LOGIN.js.map