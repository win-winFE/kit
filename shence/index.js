'use strict';
/**
 * @apiDefine shenceNpm
 * @apiParamExample {string} npm 引入
 * import {shence} from '@yylc/kit';
 * shence();
 * // 确保 process.env.NODE_ENV === 'production' 为正式环境 ，其实皆为测试环境
 **/

/**
 * @apiDefine shenceJs
 * @apiParamExample {string} js 引入
 * // 版本号仅供参考
 * // 测试环境
 * <script src="https://fe.yingyinglicai.com/lyfe/h5-common/kit/test/1.0.0/shence.js"></script>
 * // 正式环境
 * <script src="https://fe.yingyinglicai.com/lyfe/h5-common/kit/prod/1.0.0/shence.js"></script>
 **/

var _shence = require('../shence');

var _shence2 = _interopRequireDefault(_shence);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pkg = require('../../src/package.json');
(0, _shence2.default)();
window.shence = sensors;
window.shence.version = pkg.version;
//# sourceMappingURL=index.js.map