'use strict';

var _getUrlParam = require('../getUrlParam');

var _getUrlParam2 = _interopRequireDefault(_getUrlParam);

var _format = require('../format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * js sdk url
 */
var sdk_url = 'https://8.yingyinglicai.com/lyfe/common/kit/lib/1.13.12/sensorsdata.min.js';
var heatmap_url = 'https://8.yingyinglicai.com/lyfe/common/kit/lib/1.13.12/heatmap.min.js';

var config = {
  option: {
    web_url: 'https://sensorsdata.yingyinglicai.com/',
    sdk_url: sdk_url,
    heatmap_url: heatmap_url,
    name: 'sensors',
    use_app_track: true,
    use_client_time: true,
    show_log: false,
    heatmap: {
      clickmap: 'default',
      scroll_notice_map: 'default',
      isTrackLink: false,
      loadTimeout: 3000,
      scroll_delay_time: 4000
    }
  },

  /**
   * in app or not in app
   * if in app sync distinct_id
   * old sdk
   * discarded
   */
  isInApp: function isInApp() {
    if (navigator.userAgent.indexOf('lyWb') > -1) {
      return true;
    } else {
      return false;
    }
  },

  /**
   * create script
   * append js sdk
   */
  init: function init(para) {
    var p = para.sdk_url,
        n = para.name,
        w = window,
        d = document,
        s = 'script',
        x = null,
        y = null;
    w['sensorsDataAnalytic201505'] = n;
    w[n] = w[n] || function (a) {
      return function () {
        (w[n]._q = w[n]._q || []).push([a, arguments]);
      };
    };
    var ifs = ['track', 'quick', 'register', 'registerPage', 'registerOnce', 'trackSignup', 'trackAbtest', 'setProfile', 'setOnceProfile', 'appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify', 'login', 'logout', 'trackLink', 'clearAllRegister', 'getAppStatus'];
    for (var i = 0; i < ifs.length; i++) {
      w[n][ifs[i]] = w[n].call(null, ifs[i]);
    }
    if (!w[n]._t) {
      x = d.createElement(s), y = d.getElementsByTagName(s)[0];
      x.async = 1;
      x.src = p;
      x.setAttribute('charset', 'UTF-8');
      y.parentNode.insertBefore(x, y);
      w[n].para = para;
    }
  },

  /**
   * diy shence event
   */
  diy: function diy(options) {
    var eventQueue = [];
    var isReady = false;
    var isBind = false;
    if (options.bizType) {
      window[options.name].registerPage({
        bizType: options.bizType
      });
    }

    function ready(fn) {
      if (isReady) {
        fn.call(window);
      } else {
        eventQueue.push(fn);
      }
      bindReady();
    }

    function bindReady() {
      if (isReady) return;
      if (isBind) return;
      isBind = true;
      if (window.addEventListener) {
        document.addEventListener('DOMContentLoaded', execFn, false);
      } else if (window.attachEvent) {
        doScroll();
      }
    }

    function doScroll() {
      try {
        document.documentElement.doScroll('left');
      } catch (error) {
        return setTimeout(doScroll, 20);
      }
      execFn();
    }

    function execFn() {
      if (!isReady) {
        isReady = true;
        for (var index = 0; index < eventQueue.length; index++) {
          eventQueue[index].call(window);
        }
        eventQueue = [];
      }
    }

    // dom ready do some things
    ready(function () {
      var start = new Date();

      function addEvent(el, name, fn) {
        if (el.addEventListener) return el.addEventListener(name, fn, false);
        return el.attachEvent('on' + name, fn);
      }

      // page retention time
      var leave = function leave() {
        var end = new Date();
        var duration = (end * 1 - start * 1) / 1000;
        sensors.track('WebEnd', {
          pageStayTime: duration,
          pageUrl: window.location.href,
          createTime: (0, _format2.default)(new Date(), 'YYYY-MM-DD hh:mm:ss')
        });
      };

      window.onbeforeunload = function () {
        leave();
      };

      addEvent(window, 'pagehide', leave);

      // click hotspots
      addEvent(document.body, 'click', function (e) {
        var obj = e.toElement;
        obj.getAttribute('shence') === "true" || obj.getAttribute('shence') === true ? sensors.quick('trackHeatMap', obj) : void 0;
      });

      // source path of your website
      var source = (0, _getUrlParam2.default)('web_url_source') || '未知';
      if (config.isInApp()) {
        sensors.quick('autoTrack', {
          source: source
        });
      } else {
        sensors.quick('autoTrack');
      }

      // error report
      // window.onerror = function (msg) {
      //     sensors.track('WebError', {
      //         error: msg,
      //     });
      // }
    });
  }
};
module.exports = config;
//# sourceMappingURL=config.js.map