'use strict';
//{
//   code:0,
//   response:{
//     resultCode: 0 //结果状态（0-成功，1-失败，-1 网络失败，-2 资源解压失败）
//     size: '1080_1920' //1080_1920或者 640_960
//   }
// }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'GET_FLOOR';
var GET_FLOOR = function GET_FLOOR() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('events', 'size', function (res) {
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
exports.default = GET_FLOOR;
//# sourceMappingURL=GET_FLOOR.js.map