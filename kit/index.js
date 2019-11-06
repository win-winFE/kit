'use strict';
/**
 * @apiDefine kitNpm
 * @apiParamExample {string} npm 引入
 * import {kit} from '@yylc/kit';
 * import {fetch} from kit;
 **/

/**
 * @apiDefine kitJs
 * @apiParamExample {string} js 引入
 * // 版本号仅供参考
 * // 测试环境
 * <script src="https://fe.yingyinglicai.com/lyfe/h5-common/kit/test/1.0.0/kit.js"></script>
 * // 正式环境
 * <script src="https://fe.yingyinglicai.com/lyfe/h5-common/kit/prod/1.0.0/kit.js"></script>
 * var {fetch} = kit;
 **/

var _fetch = require('../fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _format = require('../format');

var _format2 = _interopRequireDefault(_format);

var _getUrlParam = require('../getUrlParam');

var _getUrlParam2 = _interopRequireDefault(_getUrlParam);

var _logo = require('../logo');

var _logo2 = _interopRequireDefault(_logo);

var _React = require('../React');

var _React2 = _interopRequireDefault(_React);

var _ReactDOM = require('../ReactDOM');

var _ReactDOM2 = _interopRequireDefault(_ReactDOM);

var _Fragment = require('../Fragment');

var _Fragment2 = _interopRequireDefault(_Fragment);

var _download = require('../download');

var _download2 = _interopRequireDefault(_download);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var kit = { fetch: _fetch2.default, format: _format2.default, getUrlParam: _getUrlParam2.default, logo: _logo2.default, React: _React2.default, ReactDOM: _ReactDOM2.default, Fragment: _Fragment2.default, download: _download2.default };
var pkg = require('../../src/package.json');
window.kit = kit;
window.kit.version = pkg.version;
//# sourceMappingURL=index.js.map