'use strict';
// app 点击按钮分享

/**
 * shareData数据格式如下：
 *
 {
   "shareObj": {
     "content": [
       {
         "channel": "WEIXIN_FRIEND",
         "content": "微信好友文案"
       },
       {
         "channel": "WEIXIN_FRIEND_CIRCLE",
         "content": "朋友圈文案"
       },
       {
         "channel": "QQ_FRIEND",
         "content": "去"
       },
       {
         "channel": "SMS",
         "content": "短信文案"
       }
     ],
     "icon": "http://192.168.2.112/fup/image/shareConfig/icon/201607/20160726112214.jpg",
     "iconBase64": "",
     "id": 31,
     "operator": 9999999,
     "shareDesc": "描述测试",
     "title": "点点养车"
   }
 }
 */
/**
 * todo SHARE
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _config = require('./APP/config');

var _config2 = require('./share/config');

var _SHARE_WEIXIN = require('./SHARE_WEIXIN');

var _SHARE_WEIXIN2 = _interopRequireDefault(_SHARE_WEIXIN);

var _TOAST = require('./TOAST');

var _TOAST2 = _interopRequireDefault(_TOAST);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'SHARE';
var SHARE = function SHARE(shareObj) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {};

  var obj = {};
  if (!shareObj) {
    if (GOKU) {
      if ((0, _typeof3.default)(GOKU.shareObj) === 'object') {
        obj = GOKU.shareObj;
      } else {
        throw new Error(_config2.shareDataError);
      }
    } else {
      throw new Error(_config2.shareDataError);
    }
  } else {
    obj = shareObj;
  }
  var _obj = obj,
      title = _obj.title,
      shareDesc = _obj.shareDesc,
      jumpUrl = _obj.jumpUrl,
      iconBase64 = _obj.iconBase64,
      icon = _obj.icon;

  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('tools', 'share', {
      title: title,
      shareItems: (0, _config2.shareType)(obj).shareItems,
      shareTitle: "分享到",
      content: shareDesc,
      url: jumpUrl || location.href,
      thumbImage: iconBase64,
      thumbImageUrl: icon,
      recipients: '',
      specialContent: (0, _config2.shareType)(obj).specialContent
    }, function (res) {
      var code = res.code,
          response = res.response;

      if (code == 0) {
        if (response.resultCode === 0) {
          (0, _TOAST2.default)('分享成功');
          fn(response);
        } else if (response.resultCode === 1) {
          (0, _TOAST2.default)('分享失败');
        } else if (response.resultCode === 99) {
          //TOAST('分享取消');
        }
      } else {
        throw new Error('[' + name + '] ' + _config.appError);
      }
    });
  });
};

exports.default = SHARE;
//# sourceMappingURL=SHARE.js.map