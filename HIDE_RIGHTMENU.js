'use strict';
/**
 * @api HIDE_RIGHTMENU() HIDE_RIGHTMENU
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiDescription 隐藏导航栏右侧信息
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * HIDE_RIGHTMENU()
 * @apiParamExample {string} 返回值
 * 无
 **/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'HIDE_RIGHTMENU';
var HIDE_RIGHTMENU = function HIDE_RIGHTMENU(_) {
  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('webview', 'hideOptionMenu');
  });
};
exports.default = HIDE_RIGHTMENU;
//# sourceMappingURL=HIDE_RIGHTMENU.js.map