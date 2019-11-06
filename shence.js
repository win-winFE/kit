'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = require('./shence/config');

var init = config.init,
    diy = config.diy,
    option = config.option;

/**
 * @api shence() 常规引入
 * @apiGroup shence
 * @apiVersion 1.0.0
 * @apiDescription 神策数据分析接入，埋点UV\PV采集
 * @apiUse shenceNpm
 * @apiUse shenceJs
 *
 * @apiParamExample {string} 点击热力图说明
 * // 使用前请先 使用 npm引入 or js 引入
 * <button>button按钮</button> // 自动采集
 * <input/> // 自动采集
 * <a>链接</a> // 自动采集
 * <div id="test" shence="true">按钮</div> // 采集
 * <div id="test" style="display: none" shence="true">影藏按钮</div> // 采集 神策平台无法展示
 *
 * @apiParamExample {string} 自定义埋点
 * // 使用前请先 使用 npm引入 or js 引入
 * sensors.track('WebEvent', {
 *    title: 'msg',
 * });
 * // WebEvent 可自定义，请遵循首字母大写规范，$WebEvent 为神策内置属性，请不要污染
 * // title 也可以自定义
 * // title 的值 可以为 number or string or boolean or date 不能为对象，数组
 **/

// https://sensorsdata.yingyinglicai.com/sa?token=sacccdc2b2 测试 统计库
// https://sensorsdata.yingyinglicai.com/sa?project=production&token=sa96bfb93b 盈盈金科 数据统计库

var shence = function shence() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _obj$serverUrl = obj.serverUrl,
      serverUrl = _obj$serverUrl === undefined ? 'https://sensorsdata.yingyinglicai.com/sa?token=sacccdc2b2' : _obj$serverUrl,
      _obj$bizType = obj.bizType,
      bizType = _obj$bizType === undefined ? null : _obj$bizType,
      _obj$isSinglePage = obj.isSinglePage,
      isSinglePage = _obj$isSinglePage === undefined ? false : _obj$isSinglePage;

  var options = { server_url: serverUrl, bizType: bizType, is_single_page: isSinglePage };
  options = (0, _assign2.default)(options, option);
  init(options);
  diy(options);
};
exports.default = shence;
//# sourceMappingURL=shence.js.map