'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'YX_JUMP_YYJK';
var YX_JUMP_YYJK = function YX_JUMP_YYJK(url) {
  if (url) {
    (0, _config.WinJSDec)(function (_) {
      WinJSBridge.call('tools', 'wakeupapp', { url: url });
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.fnError);
  }
};
exports.default = YX_JUMP_YYJK;
//# sourceMappingURL=YX_JUMP_YYJK.js.map