'use strict';
// {
//   cacheKey:'',  //缓存key
//   url:'',       //二楼活动资源包地址
//   gmtStart:'',  //开始时间
//   gmtEnd:''     //结束时间
// }
//{
//   code:0,
//   response:{
//     resultCode: 0 //结果状态（0-成功，1-失败，-1 网络失败，-2 资源解压失败）
//   }
// }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var _SET_REFRESH = require('./SET_REFRESH');

var _SET_REFRESH2 = _interopRequireDefault(_SET_REFRESH);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'SET_FLOOR';
var SET_FLOOR = function SET_FLOOR(obj) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      (0, _SET_REFRESH2.default)();
      window.WinJSBridge.call('events', 'floor', obj, function (res) {
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
exports.default = SET_FLOOR;
//# sourceMappingURL=SET_FLOOR.js.map