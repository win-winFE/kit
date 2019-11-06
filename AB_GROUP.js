'use strict';
// ab 对照用户

/**
 * todo TOOLS
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'AB_GROUP';
var AB_GROUP = function AB_GROUP(ruleId) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('abtest', 'getGroup', { ruleId: ruleId }, function (res) {
        var code = res.code,
            response = res.response;

        if (code == 0) {
          fn(response);
        } else {
          throw new Error('[' + name + '] ' + _config.appError);
        }
      });
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.fnError);
  }
};
exports.default = AB_GROUP;
//# sourceMappingURL=AB_GROUP.js.map