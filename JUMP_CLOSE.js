'use strict';
/**
 * @api JUMP_CLOSE(url) JUMP_CLOSE
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {string} url 目标URL地址
 * @apiDescription APP 关闭当前页面并跳转下一页，下一页可为 h5 或原生
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * JUMP_CLOSE()  关闭当前页面
 * JUMP_CLOSE('https://www.baidu.com')  外部地址
 * JUMP_CLOSE('https://gift.yingyinglicai.com/activity/invite/???')  活动地址
 * JUMP_CLOSE('tab.ly/???')  原生地址
 * @apiParamExample {string} 返回值
 * 无
 **/

/**
 * todo JUMP
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var _BROWSER = require('./BROWSER');

var _BROWSER2 = _interopRequireDefault(_BROWSER);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'JUMP_CLOSE';
var JUMP_CLOSE = function JUMP_CLOSE(url) {
  if (!url) {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('webview', 'close');
    });
  } else {
    if (typeof url !== 'string') {
      throw new TypeError('[' + name + '] not a string');
    }
    if (_BROWSER2.default.isClient) {
      /^(page.ly|tab.ly).*/.test(url) ? url = 'yylc://app.yingyinglicai.com/' + url : void 0;
      (0, _config.WinJSDec)(function (_) {
        window.WinJSBridge.call('navigation', 'jumpAndClosePage', { url: url });
      });
    } else {
      window.location.href = url;
    }
  }
};
exports.default = JUMP_CLOSE;
//# sourceMappingURL=JUMP_CLOSE.js.map