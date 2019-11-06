'use strict';
/**
 * @api format(date,string) format
 * @apiGroup kit
 * @apiVersion 1.0.0
 * @apiParam {date} date 需要格式化的时间
 * @apiParam {string} string 格式化的规则
 * @apiDescription 时间格式格式化
 * @apiUse kitNpm
 * @apiUse kitJs
 * @apiParamExample {string} 例子
 * // 基本用法
 * format(new Date() * 1, 'YYYY-MM-DD hh:mm:ss')
 * // 详细用法
 * // 搜索 date-fns kit 中引用了其 format 方法
 **/

Object.defineProperty(exports, "__esModule", {
  value: true
});
var format = require('date-fns/format');
exports.default = format;
//# sourceMappingURL=format.js.map