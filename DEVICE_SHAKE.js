'use strict';
// {
//   code:0,
//     response: {
//   status: 0 //网络状态 0没网络 1移动网络 2wifi网络
// }
// }

/**
 * todo DEVICE
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'DEVICE_SHAKE';
var DEVICE_SHAKE = function DEVICE_SHAKE() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('device', 'enableshake', { enable: true }, function (res) {});
      document.addEventListener('ondeviceshake', fn);
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.fnError);
  }
};
exports.default = DEVICE_SHAKE;
//# sourceMappingURL=DEVICE_SHAKE.js.map