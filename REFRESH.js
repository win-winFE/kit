'use strict';
/**
 * @api REFRESH() REFRESH
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {boolean} type=false 刷新方式
 * @apiDescription app 容器强制刷新
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * // 普通刷新
 * REFRESH()
 * // app 触发下拉动画 然后进行刷新
 * // only 多一个动画
 * REFRESH(true)
 * @apiParamExample {string} 返回值
 * 无
 **/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'REFRESH';
var REFRESH = function REFRESH() {
  var pullRefresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('webview', 'refresh', { pullRefresh: pullRefresh });
  });
};
exports.default = REFRESH;
//# sourceMappingURL=REFRESH.js.map