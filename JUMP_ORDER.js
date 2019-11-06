'use strict';
/**
 * @api JUMP_ORDER({productCode,amount}) JUMP_ORDER
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {string} productCode 产品编号
 * @apiParam {number} amount 投资金额
 * @apiDescription APP 跳转标的投资订单页
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * // 跳转到投资订单页，显示购买 N7528 产品 金额10000
 * JUMP_ORDER({productCode:'N7528',amount:10000})
 * @apiParamExample {string} 返回值
 * 无
 **/

/**
 * todo JUMP
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _config = require('./APP/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'JUMP_ORDER';
var JUMP_ORDER = function JUMP_ORDER(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object') {
    throw new TypeError('[' + name + '] ' + _config.objError);
  }
  var productCode = obj.productCode,
      amount = obj.amount;

  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('order', 'invest', { productCode: productCode, amount: amount });
  });
};
exports.default = JUMP_ORDER;
//# sourceMappingURL=JUMP_ORDER.js.map