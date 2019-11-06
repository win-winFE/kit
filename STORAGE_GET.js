'use strict';
// {
//   level:1, //level=1 默认清除缓存 level=2 版本更新清除缓存 level=3 不清缓存
//     k
// {
//   code:0,
//     response: {
//   data:'data1'
// }
// }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'STORAGE_GET';
var STORAGE_GET = function STORAGE_GET(key) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('storage', 'load', { key: key }, function (res) {
        var code = res.code,
            response = res.response;

        if (code == 0) {
          fn(response);
        } else {
          throw new Error('[' + name + '] ' + _config.appError);
        }
      });
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.fnError);
  }
};
exports.default = STORAGE_GET;
//# sourceMappingURL=STORAGE_GET.js.map