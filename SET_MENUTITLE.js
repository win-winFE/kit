'use strict';
// 设置 原生导航栏 为一个可下拉选择
// {
// //   selected: '...', //默认选中列表中的位置
// //     items:[{         //列表数据
// //   name:'第一行',
// //   code:'01'
// // },
// //   {
// //     name:'第二行',
// //     code:'02'
// //   }
// // ]
// // }
// {
//   code:0,
//     response:{
//   name:'第一行',
//     code:'01'
// }
// }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'SET_MENUTITLE';
var SET_MENUTITLE = function SET_MENUTITLE(obj) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('webview', 'setMenuTitle', obj, function (res) {
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
exports.default = SET_MENUTITLE;
//# sourceMappingURL=SET_MENUTITLE.js.map