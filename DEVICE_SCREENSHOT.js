'use strict';
/**
 * @api SCREEN_SHOT() SCREEN_SHOT
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {boolean} type=false 刷新方式
 * @apiDescription app 容器强制刷新
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * SCREEN_SHOT(({screenShot})=>{
 *    console.log(screenShot) // base64图片
 * })
 * @apiParamExample {string} 返回值
 * {
 *       resultCode:0,
 *       screenShot:'' // base64图片
 *  }
 //  **/
// {
//   scaleWithMinPix: false //最终图片缩小方式，true-按最低像素值缩小;false-按等比缩小.默认true
//   scaleValue: 0,		   //图片缩小值.如果 scaleWithMinPix 为true时，scalevalue或最低像素值;false时，为等比缩小值. scalevalue或0.7倍
//     quality: 0.6		   //图片质量（0-1）默认0.6
// }
// {
//   code:0,
//     response:{
//   resultCode:0,
//     screenShot:'' ///base64图片
// }
// }

/**
 * todo DEVICE
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'DEVICE_SCREENSHOT';
var DEVICE_SCREENSHOT = function DEVICE_SCREENSHOT() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {};

  if (typeof fn === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('webview', 'screenShot', {
        scaleWithMinPix: false,
        scaleValue: 0,
        quality: 0.6
      }, function (res) {
        var code = res.code,
            response = res.response;

        if (code == 0) {
          var result = response;
          result.screenShot = 'data:image/jpg;base64,' + result.screenShot;
          fn(result);
        } else {
          throw new Error('[' + name + '] ' + _config.appError);
        }
      });
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.fnError);
  }
};
exports.default = DEVICE_SCREENSHOT;
//# sourceMappingURL=DEVICE_SCREENSHOT.js.map