'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var WinJSBridgeReady = 'WinJSBridgeReady';
var WinJSDec = function WinJSDec(fn) {
  return document.addEventListener(WinJSBridgeReady, fn);
};
var numError = 'not a number';
var strError = 'not a string';
var objError = 'not a object';
var fnError = 'not a function';
var appError = 'app callBack Error';
exports.WinJSDec = WinJSDec;
exports.appError = appError;
exports.fnError = fnError;
exports.numError = numError;
exports.objError = objError;
exports.strError = strError;
//# sourceMappingURL=config.js.map