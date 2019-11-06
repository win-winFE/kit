'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BROWSER = require('./BROWSER');

var _BROWSER2 = _interopRequireDefault(_BROWSER);

var _JUMP_TO = require('./JUMP_TO');

var _JUMP_TO2 = _interopRequireDefault(_JUMP_TO);

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var androidApkVersion = "5.1.1";
var iosItunesDownloadUrl = "https://itunes.apple.com/cn/app/id660009164?mt=8";
var yybDownloadUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.bench.yylc";
var channel = '';
(0, _fetch2.default)('https://mobi.yingyinglicai.com:8443/front/andversion.do?vjson=PC&ver=&registerId=' + channel, function (data) {
  var result = {
    "is_succ": true,
    "succ": true,
    "timeout": false,
    "overdue": false,
    "err_msg": "",
    "version": "5.1.1",
    "url": "https://yylc-app.b0.upaiyun.com/download/yylc_5.1.1.apk",
    "msg": "盈盈理财品牌升级为盈盈金科，业务定位扩大为金融科技平台！\n\n【注意】本次更新涉及重要内容，需升级后方可使用哦",
    "update": true,
    "forceUpdate": true,
    "sdkVersion": "14"
  };
});

function getAndroidApkDownloadUrl(version, channel) {
  return "https://yylc-app.b0.upaiyun.com/download/" + channel + "/yylc_" + version + ".apk";
}

function download(channel) {
  if (_BROWSER2.default.isClient) {
    (0, _JUMP_TO2.default)(yybDownloadUrl);
  } else {
    if (!_BROWSER2.default.isWeixin) {
      if (_BROWSER2.default.iPhone || _BROWSER2.default.iPad || _BROWSER2.default.iOS) {
        window.open(iosItunesDownloadUrl);
      } else {
        window.open(getAndroidApkDownloadUrl(version, channel));
      }
    } else {
      window.open(yybDownloadUrl);
    }
  }
}

exports.default = download;
//# sourceMappingURL=download.js.map