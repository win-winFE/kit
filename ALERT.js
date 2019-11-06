'use strict';
/**
 * @api ALERT(title,message,buttons,fn) ALERT
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {string} title 标题
 * @apiParam {string} message 内容
 * @apiParam {array} buttons 按钮
 * @apiParam {function} function 点击按钮回调
 * @apiDescription app alert 事件
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * ALERT('提示','这里是提示详情文案',['确定','取消'],({buttonIndex})=>{
 *      console.log(buttonIndex)
 * })
 * @apiParamExample {string} 返回值
 * {
 *   buttonIndex: 0 //点了哪个按钮 buttons数组下标
 * }
 **/

/**
 * todo TOOLS
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'ALERT';
var ALERT = function ALERT(obj) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('tools', 'alert', obj, function (res) {
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
exports.default = ALERT;
//# sourceMappingURL=ALERT.js.map