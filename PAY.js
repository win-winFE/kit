'use strict';
// 收银台


// {
//   old: false,        //类型 默认 false
//     title:'自定义标题', //标题 默认 金额
//   hideIcon:false,   //隐藏icon 默认false
//   amount:'10',      //金额
//   point:'1000',     //积分
//   others:{          //密码验证携带额外参数
//   authCode:'61271234761236123'
// }
// }

//{
//     code: 0,
//     response:{
//         passToken: '',   //密码接口返回字段
//         resultCode:0    //结果状态（0-成功，1-失败，99-取消）
//     }
//   }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'PAY';
var PAY = function PAY(obj) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('paydesk', 'pay', obj, function (res) {
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
exports.default = PAY;
//# sourceMappingURL=PAY.js.map