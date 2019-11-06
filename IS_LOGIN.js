'use strict';
/**
 * @api GET_LOGIN() GET_LOGIN
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiDescription 判断是否已登录
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * GET_LOGIN(({isLogin})=>{
 *  console.log(isLogin)
 * })
 * @apiParamExample {string} 返回值
 * {
 *      isLogin: true
 *  }
 **/

/**
 * todo LOGIN
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'IS_LOGIN';
var IS_LOGIN = function IS_LOGIN() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('login', 'isLogin', function (res) {
        var code = res.code,
            response = res.response;

        if (code == 0) {
          fn(response);
        } else {
          throw new Error('[' + name + '] ' + _config.appError);
        }
      });
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.fnError);
  }
};
exports.default = IS_LOGIN;
//# sourceMappingURL=IS_LOGIN.js.map