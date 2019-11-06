'use strict';
// 关闭  下拉二楼 营销活动页

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'HIDE_FLOOR';
var HIDE_FLOOR = function HIDE_FLOOR() {
  var boolean = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('events', 'marketingClose', { isSecFloor: boolean });
  });
};
exports.default = HIDE_FLOOR;
//# sourceMappingURL=HIDE_FLOOR.js.map