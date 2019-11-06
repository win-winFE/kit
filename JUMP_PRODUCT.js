'use strict';
/**
 * @api JUMP_PRODUCT({code,type}) JUMP_PRODUCT
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {productCode} code 产品编号
 * @apiParam {amount} type 产品类型-0:货基 1:短期理财型 2:弘康保险 3:P2C产品
 * @apiDescription APP 跳跳转至产品详情
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * JUMP_PRODUCT('N7528',0)
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

var name = 'JUMP_PRODUCT';
var JUMP_PRODUCT = function JUMP_PRODUCT(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object') {
    throw new TypeError('[' + name + '] ' + _config.objError);
  }
  var code = obj.code,
      type = obj.type;

  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('goods', 'showProduct', { code: code, type: type });
  });
};
exports.default = JUMP_PRODUCT;
//# sourceMappingURL=JUMP_PRODUCT.js.map