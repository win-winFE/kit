'use strict';
// 红包


// {
// 	toolType:'',  //支付工具类型
//     couponNo:'', //红包编号
//     couponAmount:'' //红包金额
//  }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'USE_COUPON';
var USE_COUPON = function USE_COUPON(obj) {
  if (obj !== 'object') {
    throw new TypeError('[' + name + '] ' + _config.objError);
  }
  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('coupon', 'useCoupon', obj);
  });
};
exports.default = USE_COUPON;
//# sourceMappingURL=USE_COUPON.js.map