'use strict';
/**
 * @api BROWSER BROWSER
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiDescription UA 头判断，是否 APP 内判断
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * BROWSER.iOS
 * BROWSER.iPhone
 * BROWSER.Android
 * BROWSER.isClient  // 是否 APP 内
 * BROWSER.isWinClient
 * BROWSER.isWeixin
 * @apiParamExample {string} 返回值
 * 无
 **/

/**
 * todo GLOBAL
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BROWSER = {
  iOS: navigator.userAgent.match(/Mac OS/),
  iPad: navigator.userAgent.indexOf('iPad') > -1,
  iPhone: navigator.userAgent.indexOf('iPhone') > -1,
  Android: navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1,
  isClient: navigator.userAgent.indexOf('lyWb') > -1,
  isWinClient: navigator.userAgent.indexOf('WinClient') > -1,
  isWeixin: navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1,
  isYXLIFEClient: navigator.userAgent.indexOf('lyWb') > -1 && (navigator.userAgent.indexOf('biz/YXLIFE') > -1 || navigator.userAgent.indexOf('biz/QTT') > -1) // 支持券淘淘
};
exports.default = BROWSER;
//# sourceMappingURL=BROWSER.js.map