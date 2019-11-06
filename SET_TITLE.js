'use strict';
/**
 * @api SET_TITLE(title,fn) SET_TITLE
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {string} title 浏览器标题
 * @apiParam {function} fn 点击回调事件
 * @apiDescription 设置浏览器标题及其点击事件
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * SET_TITLE('注册页',_=>{
 *    scrollTo(0,0);
 * })
 * // 标题设置为 注册页
 * // 点击标题后返回页面顶部
 * @apiParamExample {string} 返回值
 * 无
 **/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'SET_TITLE';
var SET_TITLE = function SET_TITLE(title) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {};

  var rds = new Date() * 1;
  var random = '___callback___' + rds;
  window[random] = function (_) {
    fn && fn();
  };
  document.title = title;
  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('webview', 'setTitle', {
      title: title,
      onclick: random + '()'
    });
  });
};
exports.default = SET_TITLE;
//# sourceMappingURL=SET_TITLE.js.map