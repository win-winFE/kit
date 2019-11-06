'use strict';
// app 右上角分享
/**
 * todo SHARE
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _SET_RIGHTMENU = require('./SET_RIGHTMENU');

var _SET_RIGHTMENU2 = _interopRequireDefault(_SET_RIGHTMENU);

var _SHARE = require('./SHARE');

var _SHARE2 = _interopRequireDefault(_SHARE);

var _SHARE_IMG = require('./SHARE_IMG');

var _SHARE_IMG2 = _interopRequireDefault(_SHARE_IMG);

var _SHARE_WEIXIN = require('./SHARE_WEIXIN');

var _SHARE_WEIXIN2 = _interopRequireDefault(_SHARE_WEIXIN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'SHARE_RIGHT';
var SHARE_RIGHT = function SHARE_RIGHT(obj, channel) {
  if (!obj) {
    if ((0, _typeof3.default)(GOKU.shareObj) === 'object') {
      (0, _SET_RIGHTMENU2.default)('分享', _SHARE2.default);
      (0, _SHARE_WEIXIN2.default)(obj, channel);
    }
  } else if (obj.type === 'img') {
    var shareItems = obj.shareItems,
        shareTitle = obj.shareTitle,
        imageUrl = obj.imageUrl;

    (0, _SET_RIGHTMENU2.default)('分享', function (_) {
      return (0, _SHARE_IMG2.default)({ shareItems: shareItems, shareTitle: shareTitle, imageUrl: imageUrl });
    });
  } else {
    (0, _SET_RIGHTMENU2.default)('分享', _SHARE2.default.bind(undefined, obj));
    (0, _SHARE_WEIXIN2.default)(obj, channel);
  }
};
exports.default = SHARE_RIGHT;
//# sourceMappingURL=SHARE_RIGHT.js.map