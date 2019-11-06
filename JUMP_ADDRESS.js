'use strict';

//{
//     code: 0,
//     response:{
//         id: '329'  //选择结果
//         dFlag: '329'  //选择结果
//         provinceName: '329'  //选择结果
//         cityName: '329'  //选择结果
//         areaName: '329'  //选择结果
//         address: '329'  //选择结果
//         tel: '329'  //选择结果
//         name: '329'  //选择结果
//     }
//   }
/**
 * todo JUMP
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'JUMP_BACK';
var JUMP_BACK = function JUMP_BACK(id) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('address', 'chooseAddress', { id: id }, function (res) {
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
exports.default = JUMP_BACK;
//# sourceMappingURL=JUMP_ADDRESS.js.map