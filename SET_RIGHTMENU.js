'use strict';
/**
 * @api SET_RIGHTMENU(text,_=>{}) SET_RIGHTMENU
 * @apiGroup APP
 * @apiVersion 1.0.0
 * @apiParam {sting} text base64 图片 or 标题
 * @apiDescription 设置 app 右上角标题或图标，并设置该处的点击事件
 * @apiUse APPNpm
 * @apiUse APPJs
 * @apiParamExample {string} 例子
 * // base64 图片
 * var base64Img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABEhJREFUWAntWE1oE0EUntkNCUXU+nOooZ4UhIJ6UqSKVCiIFfxBKIp68BKtEBWpvQi2Cl4qVG2wkoAo+HMoiFgsghQsKCL1pIInvYXQi1ZiiyZ2M36vm2Rn/5LdZmspJJDkvTfvfe/bt29mdoex+mdhK8Brhe/r6wtPTk7tEUIcYEy0CMGinLMo4ULOQM4wxr9wzkeamla9hn++lpzzJnz27KWm2dn8Fc7FcZBd4YUESGeF4I9DofC1oaEbk15irD6+Ccfj8Uguxy8D6CJquMwK6E3nM/AbiETE9UQikfMWo3v5IkxV1bTcM1R0h58kbr6o+HtVjRz2U23PhLu6zm/RNDGKqjbbCfA0evW5oiij+H5Dh6Bv0bk8Gy0UChvw3Y9+PugWy5jakUrd/GzHtVs8Edb7NffBISFNqN729l33Ozs7NTu8YRkeHlbHxt6eAsZVWOcmpTHK06FQZJuXSlclTD2bz/NxhzYYaWxsONHf3//LSFxd6unpWf7z5+9H8MSqYnyoPcJh0VatpxUjxFmiCeZAdjAaXXPYL1nKQDEUC4IJOSPlKE5m2WyTK1a42ApfcRvl1WCEEmI9LdjQfBgQr2Qy358hRKo0n0FrbKzUGhUrTOushWyG2qBWsnRdhEFYEOcmKNkol55T15x+XQkDMEybgjmI986nDcwYhqZj8V7DQiuLOE65ZZssuxIubrfSDsbTtBrIwUHIOiZPl7DQyysod0m3/rsSRqDUW3Tl7Hm1pcsK7kUnTMKWfa255TFXwuinFpMjNgVZD1KmDceMZ84tj4VKSlfXhX2aVkiB6NxOhp3J9KEdzGQIUCFsTTP2HeRui8XiRQY8rapK7O7dWy8pZbnCMlknLqXt1mmsVltlbNGsc9OzlAmXKuuWfGiob9ptrFZ7dWzj+UUiXGva/xNfJ7zQda5XuF5hSwWWcksYDyCWi4Jaaczu7dfS3d0tP287hBv5yxWm7c+ZmL41OqAEZspmc03uYOb85WeJ4l693j1w4UY4V3YKYbzA4OntTTKZ2O2UsVxhp8H/ZQPZk3IunA6Ny7osLzrhM2fOdYJQu0yK89BTWZflRSUci104hEfJBzIhzKN3yeTAR7PN0Mo9bJjmL+EMozmfZ/24pW2Egvez8XCY9eCsIS2j4hRpE06DeoXQjoKw/Ob+V1HYadnXKsvO1jFfOpHFuQIqI1ZbAqdUlZ0EsUYhlM3o1w6Mb7b4kIoHdh5PpQbvOIyVTYFVmCrrQJYSrcLLxAs9o7ESlBlAwKEKBngsmbx9T7Y7yYH1cKkNnJJUtvF3aIPtXsgSTmAVrkzKNvoHFR3FevswmRw0vTHbPC2GwAjTBEOfHrPgl9QpkHuFW/8Zr/CfVq5sGJ/vgUxghGk1wKTba+9j/gMn7VutK0XpSvz+q34D3PwnJiayra3bnxQKbB1u91p8p1HVF5EIOxIUWbfcdXu9AkupAv8AG3iS1tnYwP8AAAAASUVORK5CYII=';
 * SET_RIGHTMENU(base64Img,_=>{
 *  JUMP_TO('http://www.baidu.com')
 * })
 * // 标题
 * SET_RIGHTMENU('跳转',_=>{
 *  JUMP_TO('http://www.baidu.com')
 * })
 * @apiParamExample {string} 返回值
 * 无
 **/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./APP/config');

var name = 'SET_RIGHTMENU';
var SET_RIGHTMENU = function SET_RIGHTMENU(text) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {};

  var rds = new Date() * 1;
  var random = '___callback___' + rds;
  window[random] = function (_) {
    fn && fn();
  };
  var options = {
    onclick: random + '()'
  };
  if (/^data:image.*/.test(text)) {
    options['icon'] = text.replace(/^data:image\/(gif|GIF|png|jpg|JPG|JPEG|jpeg|PNG);base64,/, '');
  } else {
    options['title'] = text;
  }
  (0, _config.WinJSDec)(function (_) {
    window.WinJSBridge.call('webview', 'showOptionMenu', options);
  });
};
exports.default = SET_RIGHTMENU;
//# sourceMappingURL=SET_RIGHTMENU.js.map