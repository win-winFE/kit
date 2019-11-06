'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'LOGGER';
var LOGGER = function LOGGER(content) {
  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('tools', 'logger', content);
  });
};
exports.default = LOGGER;
//# sourceMappingURL=LOGGER.js.map