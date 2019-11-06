'use strict';
/**
 * @api SET_DRAGBACK(enable) SET_DRAGBACK
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {boolean} enable=false 是否开启滑动返回，默认关闭滑动返回
 * @apiDescription 是否开启滑动返回
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * SET_DRAGBACK()
 * @apiParamExample {string} 返回值
 * 无
 **/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'SET_DRAGBACK';
var SET_DRAGBACK = function SET_DRAGBACK() {
  var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('webview', 'dragBackEnable', { enable: enable });
  });
};
exports.default = SET_DRAGBACK;
//# sourceMappingURL=SET_DRAGBACK.js.map