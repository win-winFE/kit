'use strict';
/**
 * @api SET_BACK() SET_BACK
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {boolean} hide=true 是否隐藏，默认隐藏
 * @apiDescription 设置返回按钮
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * SET_BACK()
 * @apiParamExample {string} 返回值
 * 无
 **/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'SET_BACK';
var SET_BACK = function SET_BACK() {
  var hide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('webview', 'hideBack', { hide: hide });
  });
};
exports.default = SET_BACK;
//# sourceMappingURL=SET_BACK.js.map