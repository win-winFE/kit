'use strict';
// 收银台

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'JK_PAY';
var PAY = function PAY(obj) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('pay', 'payment', obj, function (res) {
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
exports.default = PAY;
//# sourceMappingURL=JK_PAY.js.map