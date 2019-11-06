'use strict';
// 底部 弹出相应的选择框
// {
//     title:'提示',
//     buttons:["按钮1",'按钮2'],   //如果button为空 默认显示一个 且不通知js点击了按钮
//     style:0 //Alert框的样式,0为当前app自定义样式,1为系统样式. （iOS：2.1.2+）
//  }
// {
//   code:0,
//     response:{
//   buttonIndex: 0 //点了哪个按钮 buttons数组下标
// }
// }

/**
 * todo TOOLS
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'ACTION_SHEET';
var ACTION_SHEET = function ACTION_SHEET(title, buttons) {
  var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('tools', 'actionSheet', { title: title, buttons: buttons }, function (res) {
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
exports.default = ACTION_SHEET;
//# sourceMappingURL=ACTION_SHEET.js.map