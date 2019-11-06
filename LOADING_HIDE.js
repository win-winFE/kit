'use strict';
/**
 * @api HIDE_LOADING() HIDE_LOADING
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiDescription APP loading 隐藏
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * HIDE_LOADING()
 * @apiParamExample {string} 返回值
 * 无
 **/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'LOADING_HIDE';
var LOADING_HIDE = function LOADING_HIDE(_) {
  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('tools', 'hideLoading');
  });
};
exports.default = LOADING_HIDE;
//# sourceMappingURL=LOADING_HIDE.js.map