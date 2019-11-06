'use strict';
// {
//   level:1,  //level=1 默认清除缓存 level=2 版本更新清除缓存 level=3 不清缓存
// 0      //进程会话缓存,收到内存警告或进程结束缓存失效
//   1        //存储缓存,缓存时效由storageTime控制,默认7天
//   2    //存储缓存,APP版本更新(覆盖安装)缓存失效
//   3 //存储缓存,APP卸载缓存失效
//     key:'key1',
//   data:'data1'
// }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'STORAGE_SAVE';
var STORAGE_SAVE = function STORAGE_SAVE(key, data) {
  var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('storage', 'save', { level: level, key: key, data: data });
  });
};
exports.default = STORAGE_SAVE;
//# sourceMappingURL=STORAGE_SAVE.js.map