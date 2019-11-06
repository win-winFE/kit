'use strict';

/**
 * @api getUrlParam(param) getUrlParam
 * @apiGroup kit
 * @apiVersion 1.0.0
 * @apiParam {string} param 参数
 * @apiDescription 获取 url 上的参数
 * @apiUse kitNpm
 * @apiUse kitJs
 * @apiParamExample {string} 例子
 * http://www.baidu.com?search=???
 * getUrlParam('search') // get ???
 **/

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getUrlParam = function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
};
exports.default = getUrlParam;
//# sourceMappingURL=getUrlParam.js.map