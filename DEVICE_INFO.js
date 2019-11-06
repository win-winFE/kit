'use strict';
// {
//   code:0,
//     response: {
//   model: '',  //设备型号
//     token:'',   //唯一标识
//     jail:'',    //是否越狱
//     macAddress:'', //mac地址
//     idfa: '',     //广告标识符
//     sysVersion: '', //系统版本号
//     appVersion: '', //app版本号
//     appName: '',   //app名称
//     device: '',    //设备类型 ANDROID IOS
//     appChannel:''  //app渠道
// }
// }

/**
 * todo DEVICE
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'DEVICE_INFO';
var DEVICE_INFO = function DEVICE_INFO() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('device', 'deviceInfo', function (res) {
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
exports.default = DEVICE_INFO;
//# sourceMappingURL=DEVICE_INFO.js.map