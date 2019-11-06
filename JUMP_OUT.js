'use strict';
/**
 * @api JUMP_OUT(url) JUMP_OUT
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {string} url 目标URL地址
 * @apiDescription 用外部浏览器打开 url
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * JUMP_OUT('https://www.baidu.com')  外部地址
 * JUMP_OUT('https://gift.yingyinglicai.com/activity/invite/???')  活动地址
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

var name = 'JUMP_OUT';
var JUMP_OUT = function JUMP_OUT(url) {
  if (typeof url !== 'string') {
    throw new TypeError('[' + name + '] ' + _config.strError);
  }
  if (_BROWSER2.default.isClient) {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('navigation', 'openURLOutside', { url: url });
    });
  } else {
    window.location.href = url;
  }
};
exports.default = JUMP_OUT;
//# sourceMappingURL=JUMP_OUT.js.map