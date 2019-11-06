'use strict';
// 监听返回

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'CALLBACK_BACK';
var CALLBACK_BACK = function CALLBACK_BACK() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('webview', 'backListen', { enable: true });
      document.addEventListener('clickback', fn);
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.fnError);
  }
};
exports.default = CALLBACK_BACK;
//# sourceMappingURL=CALLBACK_BACK.js.map