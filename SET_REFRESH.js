'use strict';
/**
 * @api SET_REFRESH() SET_REFRESH
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiDescription APP 中 H5 容器添加下拉刷新功能
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * // 调用后，可在 h5 容器中可下拉刷新当前页面
 * SET_REFRESH()
 * @apiParamExample {string} 返回值
 * 无
 **/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'SET_REFRESH';
var SET_REFRESH = function SET_REFRESH() {
  var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('webview', 'pullRefreshEnable', { enable: enable });
  });
};
exports.default = SET_REFRESH;
//# sourceMappingURL=SET_REFRESH.js.map