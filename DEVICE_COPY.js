'use strict';
// {
//   text:'内容'
// }

/**
 * todo DEVICE
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'DEVICE_COPY';
var DEVICE_COPY = function DEVICE_COPY(text) {
  if (typeof text === 'string') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('tools', 'copyToClipboard', { text: text }, function (res) {});
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.strError);
  }
};
exports.default = DEVICE_COPY;
//# sourceMappingURL=DEVICE_COPY.js.map