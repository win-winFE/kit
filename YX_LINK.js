'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var YX_LINK = function YX_LINK() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('password', 'points', function (res) {
        var code = res.code,
            response = res.response;

        if (code == 0) {
          fn(response);
        } else {
          throw new Error('[' + name + '] ' + appError);
        }
      });
    });
  } else {
    throw new TypeError('[' + name + '] ' + fnError);
  }
};
exports.default = YX_LINK;
//# sourceMappingURL=YX_LINK.js.map