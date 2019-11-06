'use strict';
// 选择照片

// {
//     scaleWithMinPix: true, //是否压缩图片 默认 true
//     scaleValue: 1.1,      //图片缩小值，只有当scaleWithMinPix为false时有效
//     quality: 80,          //图片的质量
//     maxCanPicked: 5,      //图片最多可选取数.默认5张
//     camera: false,        //是否调用摄像头 默认false
//     front: true,          //true后置，false前置 默认 true
//     allowsEditing: false  //允不允许编辑图片 默认false
//  }

//{
//   code:0,
//   response:{
// 	resultCode:0,
//     images:[ //base64后的图片列表
//         ...,
//         ...
//     ]
//   }
// }

/**
 * todo DEVICE
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'DEVICE_PHOTO';
var DEVICE_PHOTO = function DEVICE_PHOTO(_ref) {
  var _ref$camera = _ref.camera,
      camera = _ref$camera === undefined ? false : _ref$camera,
      _ref$callback = _ref.callback,
      callback = _ref$callback === undefined ? function (_) {} : _ref$callback,
      _ref$maxCanPicked = _ref.maxCanPicked,
      maxCanPicked = _ref$maxCanPicked === undefined ? 1 : _ref$maxCanPicked;

  if (typeof callback === 'function') {
    (0, _config.WinJSDec)(function (_) {
      window.WinJSBridge.call('tools', 'pickPhotos', {
        scaleWithMinPix: false,
        scaleValue: 0.8,
        quality: 1,
        maxCanPicked: maxCanPicked,
        camera: camera,
        front: true,
        allowsEditing: true
      }, function (res) {
        var code = res.code,
            response = res.response;

        if (code == 0) {
          var result = [];
          response.images.map(function (value) {
            result.push('data:image/jpg;base64,' + value);
          });
          response.images = result;
          callback(response);
        } else {
          throw new Error('[' + name + '] ' + _config.appError);
        }
      });
    });
  } else {
    throw new TypeError('[' + name + '] ' + _config.numError);
  }
};
exports.default = DEVICE_PHOTO;
//# sourceMappingURL=DEVICE_PHOTO.js.map