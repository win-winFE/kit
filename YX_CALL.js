'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'YX_CALL';
var YX_CALL = function YX_CALL(tel) {
  if (!isNaN(tel)) {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('tools', 'calltel', { tel: tel });
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.fnError);
  }
};
exports.default = YX_CALL;
//# sourceMappingURL=YX_CALL.js.map