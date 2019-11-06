'use strict';
// {
//   appId: '...' //查询app的标识
// }
// {
//   code:0,
//     response:{
//   isInstalled: true
// }
// }

/**
 * todo DEVICE
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'DEVICE_INSTALL';
var DEVICE_INSTALL = function DEVICE_INSTALL(appId) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('device', 'isInstall', { appId: appId }, function (res) {
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
exports.default = DEVICE_INSTALL;
//# sourceMappingURL=DEVICE_INSTALL.js.map