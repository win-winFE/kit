'use strict';

var _SHARE_RIGHT = require('../SHARE_RIGHT');

var _SHARE_RIGHT2 = _interopRequireDefault(_SHARE_RIGHT);

var _SHARE_WEIXIN = require('../SHARE_WEIXIN');

var _SHARE_WEIXIN2 = _interopRequireDefault(_SHARE_WEIXIN);

var _SHARE_IMG = require('../SHARE_IMG');

var _SHARE_IMG2 = _interopRequireDefault(_SHARE_IMG);

var _SHARE = require('../SHARE');

var _SHARE2 = _interopRequireDefault(_SHARE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pkg = require('../../src/package.json');
var share = {
  SHARE_RIGHT: _SHARE_RIGHT2.default, SHARE_WEIXIN: _SHARE_WEIXIN2.default, SHARE_IMG: _SHARE_IMG2.default, SHARE: _SHARE2.default
};
window.share = share;
window.share.version = pkg.version;
//# sourceMappingURL=index.js.map