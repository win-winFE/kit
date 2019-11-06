'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var shareDataError = 'shareData config is not correct';
var wxLoadError = 'wx load is not correct';
var wxConfigError = 'wx config is not correct';
var shareType = function shareType(obj) {
  var shareItems = [],
      specialContent = {},
      friendContent = '',
      qqContent = '',
      sinaContent = '';
  if (obj || GOKU) {
    var shareObj = obj || GOKU.shareObj;
    if (shareObj) {
      if (shareObj.content instanceof Array) {
        var url = shareObj.jumpUrl ? shareObj.jumpUrl !== '' ? shareObj.jumpUrl : location.href : location.href;
        shareObj.content.map(function (item) {
          switch (item.channel) {
            case "WEIXIN_FRIEND":
              specialContent['wxhy'] = item.content;
              friendContent = item.content;
              shareItems.push("wxhy");
              break;
            case "WEIXIN_FRIEND_CIRCLE":
              specialContent['wxpyq'] = item.content;
              shareItems.push("wxpyq");
              break;
            case "QQ_FRIEND":
              specialContent['qqhy'] = item.content;
              shareItems.push("qqhy");
              break;
            case "QQ_WEIBO":
              specialContent['tcwb'] = item.content + url;
              shareItems.push("tcwb");
              qqContent = item.content;
              break;
            case "SINA_WEIBO":
              specialContent['sinawb'] = item.content + url;
              shareItems.push("sinawb");
              sinaContent = item.content;
              break;
            case "SMS":
              specialContent['sms'] = item.content + url;
              shareItems.push("sms");
              break;
          }
        });
        specialContent['qqhy_url'] = url;
        specialContent['wx_url'] = url;
      } else {
        throw new Error(shareDataError);
      }
    } else {
      throw new Error(shareDataError);
    }
  } else {
    throw new Error(shareDataError);
  }
  return { shareItems: shareItems, specialContent: specialContent, friendContent: friendContent, qqContent: qqContent, sinaContent: sinaContent };
};

exports.shareType = shareType;
exports.shareDataError = shareDataError;
exports.wxLoadError = wxLoadError;
exports.wxConfigError = wxConfigError;
//# sourceMappingURL=config.js.map