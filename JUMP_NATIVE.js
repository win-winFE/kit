'use strict';
/**
 * @api JUMP_NATIVE(url) JUMP_NATIVE
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {string} url 目标URL地址
 * @apiDescription APP 常规跳转下一页，下一页为APP原生页面
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * JUMP_NATIVE('select?index=0') // 0（首页）或1（产品列表）或2（资产）或3（我）
 " JUMP_NATIVE('helpcenter') // 帮助中心
 " JUMP_NATIVE('message/messagecenter') // 消息中心
 " JUMP_NATIVE('events/list') // 活动中心
 " JUMP_NATIVE('toBonus') // 变现红包页面
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

var name = 'JUMP_NATIVE';
var JUMP_NATIVE = function JUMP_NATIVE(des) {
  if (typeof des !== 'string') {
    throw new TypeError('[' + name + '] ' + _config.strError);
  }
  var url = 'yylc://app.yingyinglicai.com/' + des;
  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('navigation', 'jumpNativePage', { url: url });
  });
};
exports.default = JUMP_NATIVE;
//# sourceMappingURL=JUMP_NATIVE.js.map