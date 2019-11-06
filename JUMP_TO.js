'use strict';
/**
 * @api JUMP_TO(url) JUMP_TO
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {string} url 目标URL地址
 * @apiDescription APP 常规跳转下一页,下一页为H5页面
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * JUMP_TO('https://www.baidu.com')  外部地址
 * JUMP_TO('https://gift.yingyinglicai.com/activity/invite/???')  活动地址
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

var name = 'JUMP_TO';
var JUMP_TO = function JUMP_TO(url) {
  if (typeof url !== 'string') {
    throw new TypeError('[' + name + '] ' + _config.strError);
  }
  if (navigator.userAgent.indexOf('biz/QTT') > -1) {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('navigation', 'go', { url: url });
    });
  } else if (navigator.userAgent.indexOf('biz/YYLC') > -1 || navigator.userAgent.indexOf('biz/YXLIFE') > -1 || navigator.userAgent.indexOf('biz/YYAUCTION') > -1) {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('navigation', 'jumpNativePage', { url: url });
    });
  } else {
    location.href = url;
  }
};
exports.default = JUMP_TO;
//# sourceMappingURL=JUMP_TO.js.map