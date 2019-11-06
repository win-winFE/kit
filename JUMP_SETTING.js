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

var name = 'JUMP_SETTING';
var JUMP_SETTING = function JUMP_SETTING(_) {
  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('tools', 'opensetting');
  });
};
exports.default = JUMP_SETTING;
//# sourceMappingURL=JUMP_SETTING.js.map