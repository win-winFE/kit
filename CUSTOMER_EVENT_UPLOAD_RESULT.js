'use strict';
// 客服
// 输入内容回调
// {path: '图片存储地址',state:'上传结果状态(0标识成功)',result: '成功结果',message: '失败信息'}

/**
 * todo CUSTOMER
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'CUSTOMER_EVENT_UPLOAD_RESULT';
var CUSTOMER_EVENT_UPLOAD_RESULT = function CUSTOMER_EVENT_UPLOAD_RESULT() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      document.addEventListener('CHARTBAR_EVENT_UPLOAD_RESULT', fn);
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.fnError);
  }
};
exports.default = CUSTOMER_EVENT_UPLOAD_RESULT;
//# sourceMappingURL=CUSTOMER_EVENT_UPLOAD_RESULT.js.map