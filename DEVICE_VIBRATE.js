'use strict';
// 振动时长 ms
// }

/**
 * todo DEVICE
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'DEVICE_VIBRATE';
var DEVICE_VIBRATE = function DEVICE_VIBRATE() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

  if (typeof time === 'number') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('device', 'vibrate', { time: time }, function (res) {});
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.numError);
  }
};
exports.default = DEVICE_VIBRATE;
//# sourceMappingURL=DEVICE_VIBRATE.js.map