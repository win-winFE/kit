'use strict';

/**
 * todo SHARE
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _BROWSER = require('./BROWSER');

var _BROWSER2 = _interopRequireDefault(_BROWSER);

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _getUrlParam = require('./getUrlParam');

var _getUrlParam2 = _interopRequireDefault(_getUrlParam);

var _config = require('./share/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function regularUrl() {
  if ((0, _getUrlParam2.default)('from')) {
    var array = location.search.replace('?', '').split('&');
    var result = [];
    array.map(function (item) {
      if (item.indexOf('from') === -1 && item.indexOf('isappinstalled') === -1) {
        result.push(item);
      }
    });
    location.href = location.href.split('?')[0] + '?' + result.join('&');
  }
}

var name = 'SHARE_WEIXIN';
var SHARE_WEIXIN = function SHARE_WEIXIN(shareData) {
  var channel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://gift.yingyinglicai.com/activity/weixin/signature.do';

  if (_BROWSER2.default.isWeixin) {
    regularUrl();
    var script = document.createElement('script');
    script.setAttribute('src', 'https://8.yingyinglicai.com/lyfe/common/kit/lib/weixin-1.0.0.js');
    script.async = "async";
    script.setAttribute("charset", "UTF-8");
    script.type = "text/javascript";
    script.onload = script.onreadystatechange = function () {
      var url = window.location.href;
      _fetch2.default.get(channel, { url: encodeURI(encodeURI(url)) }, function (res) {
        if ('data' in res) {
          var data = res.data;

          wxConfig(data);
        } else {
          var signature = res.signature;

          wxConfig(signature);
        }
      });
    };
    document.getElementsByTagName("head")[0].appendChild(script);
    script.onerror = function () {
      throw new Error(_config.wxLoadError);
    };
  }
  var wxConfig = function wxConfig(config) {
    var appid = config.appid,
        timestamp = config.timestamp,
        noncestr = config.noncestr,
        signature = config.signature;

    if (!wx) {
      throw new Error(_config.wxLoadError);
    }
    wx.config({
      debug: false,
      appId: appid,
      timestamp: timestamp,
      nonceStr: noncestr,
      signature: signature,
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
    });
    wx.ready(function (_) {
      if (!shareData) {
        if ((0, _typeof3.default)(GOKU.shareObj) === 'object') {
          shareData = GOKU.shareObj;
        } else {
          throw new Error(_config.shareDataError);
        }
      }
      var _shareData = shareData,
          title = _shareData.title,
          icon = _shareData.icon,
          shareDesc = _shareData.shareDesc,
          jumpUrl = _shareData.jumpUrl;

      if (jumpUrl === '') {
        jumpUrl = location.href;
      }
      wx.onMenuShareAppMessage({
        title: title,
        desc: (0, _config.shareType)(shareData).friendContent != '' ? (0, _config.shareType)(shareData).friendContent : shareDesc,
        link: jumpUrl,
        imgUrl: icon
      });
      wx.onMenuShareTimeline({
        title: title,
        link: jumpUrl,
        imgUrl: icon
      });
      wx.onMenuShareQQ({
        title: title,
        desc: (0, _config.shareType)(shareData).qqContent != '' ? (0, _config.shareType)(shareData).qqContent : shareDesc,
        link: jumpUrl,
        imgUrl: icon
      });
      wx.onMenuShareWeibo({
        title: title,
        desc: (0, _config.shareType)(shareData).sinaContent != '' ? (0, _config.shareType)(shareData).sinaContent : shareDesc,
        link: jumpUrl,
        imgUrl: icon
      });
    });
    wx.error(function (e) {
      console.error('错误信息：' + e.errMsg + ',jsApiList:' + (0, _stringify2.default)(e.jsApiList));
    });
  };
};
exports.default = SHARE_WEIXIN;
//# sourceMappingURL=SHARE_WEIXIN.js.map