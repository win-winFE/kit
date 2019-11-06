'use strict';
// 分享 图片
// {
//     shareItems: ['sms','qqhy', 'sinawb', 'wxhy', 'wxpyq'], //自定义分享渠道,默认全部支持
//     shareTitle: '分享标题',  //分享标题
//     imageUrl: '图片链接'    //图片链接
//  }

//{
//   code:0,
//   response:{
//     shareItem: '通过哪个渠道分享的', //通过哪个渠道分享的
//     resultCode: 0   //0：成功 1：失败  99：取消
//   }
// }
/**
 * todo SHARE
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _config = require('./APP/config');

var _TOAST = require('./TOAST');

var _TOAST2 = _interopRequireDefault(_TOAST);

var _config2 = require('./share/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'SHARE_IMG';
var SHARE_IMG = function SHARE_IMG(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object') {
    (0, _config.WinJSDec)(function (_) {
      if (!obj.shareItems) {
        if ((0, _config2.shareType)().shareItems.length > 0) {
          obj['shareItems'] = (0, _config2.shareType)().shareItems;
        }
      }
      window.WinJSBridge.call('tools', 'shareImage', obj, function (res) {
        var code = res.code,
            response = res.response;

        if (code == 0) {
          if (response.shareItem) {
            (0, _TOAST2.default)('分享成功');
            obj.fn(response);
          }
        } else {
          throw new Error('[' + name + '] ' + _config.appError);
        }
      });
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.objError);
  }
};
exports.default = SHARE_IMG;
//# sourceMappingURL=SHARE_IMG.js.map