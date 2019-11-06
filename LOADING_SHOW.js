'use strict';
/**
 * @api SET_LOADING(text) SET_LOADING
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {string} url 目标URL地址
 * @apiDescription APP loading 显示
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * SET_LOADING()
 * @apiParamExample {string} 返回值
 * 无
 **/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'LOADING_SHOW';
var LOADING_SHOW = function LOADING_SHOW() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '请稍后...';

  if (typeof text !== 'string') {
    throw new TypeError('[' + name + '] ' + _config.strError);
  }
  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('tools', 'showLoading', { text: text });
  });
};
exports.default = LOADING_SHOW;
//# sourceMappingURL=LOADING_SHOW.js.map