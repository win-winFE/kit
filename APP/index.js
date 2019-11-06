'use strict';
/**
 * @apiDefine APPNpm
 * @apiParamExample {string} npm 引入
 * import {APP} from '@yylc/kit';
 * import {JUMP_TO} from APP;
 **/

/**
 * @apiDefine APPJs
 * @apiParamExample {string} js 引入
 * // 版本号仅供参考
 * // 测试环境
 * <script src="https://fe.yingyinglicai.com/lyfe/h5-common/kit/test/1.0.0/APP.js"></script>
 * // 正式环境
 * <script src="https://fe.yingyinglicai.com/lyfe/h5-common/kit/prod/1.0.0/APP.js"></script>
 * var {JUMP_TO} = APP;
 **/

var _AB_GROUP = require('../AB_GROUP');

var _AB_GROUP2 = _interopRequireDefault(_AB_GROUP);

var _ACTION_SHEET = require('../ACTION_SHEET');

var _ACTION_SHEET2 = _interopRequireDefault(_ACTION_SHEET);

var _ALERT = require('../ALERT');

var _ALERT2 = _interopRequireDefault(_ALERT);

var _AUTH = require('../AUTH');

var _AUTH2 = _interopRequireDefault(_AUTH);

var _BROWSER = require('../BROWSER');

var _BROWSER2 = _interopRequireDefault(_BROWSER);

var _CALLBACK_BACK = require('../CALLBACK_BACK');

var _CALLBACK_BACK2 = _interopRequireDefault(_CALLBACK_BACK);

var _CALLBACK_CG = require('../CALLBACK_CG');

var _CALLBACK_CG2 = _interopRequireDefault(_CALLBACK_CG);

var _CALLBACK_LOGIN = require('../CALLBACK_LOGIN');

var _CALLBACK_LOGIN2 = _interopRequireDefault(_CALLBACK_LOGIN);

var _CALLBACK_RESULT = require('../CALLBACK_RESULT');

var _CALLBACK_RESULT2 = _interopRequireDefault(_CALLBACK_RESULT);

var _CUSTOMER_CLOSE = require('../CUSTOMER_CLOSE');

var _CUSTOMER_CLOSE2 = _interopRequireDefault(_CUSTOMER_CLOSE);

var _CUSTOMER_EVENT_SEL = require('../CUSTOMER_EVENT_SEL');

var _CUSTOMER_EVENT_SEL2 = _interopRequireDefault(_CUSTOMER_EVENT_SEL);

var _CUSTOMER_EVENT_TEXT = require('../CUSTOMER_EVENT_TEXT');

var _CUSTOMER_EVENT_TEXT2 = _interopRequireDefault(_CUSTOMER_EVENT_TEXT);

var _CUSTOMER_EVENT_UPLOAD = require('../CUSTOMER_EVENT_UPLOAD');

var _CUSTOMER_EVENT_UPLOAD2 = _interopRequireDefault(_CUSTOMER_EVENT_UPLOAD);

var _CUSTOMER_EVENT_UPLOAD_RESULT = require('../CUSTOMER_EVENT_UPLOAD_RESULT');

var _CUSTOMER_EVENT_UPLOAD_RESULT2 = _interopRequireDefault(_CUSTOMER_EVENT_UPLOAD_RESULT);

var _CUSTOMER_HIDEBOX = require('../CUSTOMER_HIDEBOX');

var _CUSTOMER_HIDEBOX2 = _interopRequireDefault(_CUSTOMER_HIDEBOX);

var _CUSTOMER_OPEN = require('../CUSTOMER_OPEN');

var _CUSTOMER_OPEN2 = _interopRequireDefault(_CUSTOMER_OPEN);

var _CUSTOMER_SHOWBOX = require('../CUSTOMER_SHOWBOX');

var _CUSTOMER_SHOWBOX2 = _interopRequireDefault(_CUSTOMER_SHOWBOX);

var _CUSTOMER_SHOWPIC = require('../CUSTOMER_SHOWPIC');

var _CUSTOMER_SHOWPIC2 = _interopRequireDefault(_CUSTOMER_SHOWPIC);

var _CUSTOMER_UPLOAD = require('../CUSTOMER_UPLOAD');

var _CUSTOMER_UPLOAD2 = _interopRequireDefault(_CUSTOMER_UPLOAD);

var _DEVICE_COPY = require('../DEVICE_COPY');

var _DEVICE_COPY2 = _interopRequireDefault(_DEVICE_COPY);

var _DEVICE_INFO = require('../DEVICE_INFO');

var _DEVICE_INFO2 = _interopRequireDefault(_DEVICE_INFO);

var _DEVICE_INSTALL = require('../DEVICE_INSTALL');

var _DEVICE_INSTALL2 = _interopRequireDefault(_DEVICE_INSTALL);

var _DEVICE_NETWORK = require('../DEVICE_NETWORK');

var _DEVICE_NETWORK2 = _interopRequireDefault(_DEVICE_NETWORK);

var _DEVICE_PASTE = require('../DEVICE_PASTE');

var _DEVICE_PASTE2 = _interopRequireDefault(_DEVICE_PASTE);

var _DEVICE_PHOTO = require('../DEVICE_PHOTO');

var _DEVICE_PHOTO2 = _interopRequireDefault(_DEVICE_PHOTO);

var _DEVICE_SCREENSHOT = require('../DEVICE_SCREENSHOT');

var _DEVICE_SCREENSHOT2 = _interopRequireDefault(_DEVICE_SCREENSHOT);

var _DEVICE_SHAKE = require('../DEVICE_SHAKE');

var _DEVICE_SHAKE2 = _interopRequireDefault(_DEVICE_SHAKE);

var _DEVICE_VIBRATE = require('../DEVICE_VIBRATE');

var _DEVICE_VIBRATE2 = _interopRequireDefault(_DEVICE_VIBRATE);

var _GET_FLOOR = require('../GET_FLOOR');

var _GET_FLOOR2 = _interopRequireDefault(_GET_FLOOR);

var _LOCATION = require('../LOCATION');

var _LOCATION2 = _interopRequireDefault(_LOCATION);

var _STORAGE_GET = require('../STORAGE_GET');

var _STORAGE_GET2 = _interopRequireDefault(_STORAGE_GET);

var _HIDE_FLOOR = require('../HIDE_FLOOR');

var _HIDE_FLOOR2 = _interopRequireDefault(_HIDE_FLOOR);

var _LOADING_HIDE = require('../LOADING_HIDE');

var _LOADING_HIDE2 = _interopRequireDefault(_LOADING_HIDE);

var _HIDE_RIGHTMENU = require('../HIDE_RIGHTMENU');

var _HIDE_RIGHTMENU2 = _interopRequireDefault(_HIDE_RIGHTMENU);

var _IS_LOGIN = require('../IS_LOGIN');

var _IS_LOGIN2 = _interopRequireDefault(_IS_LOGIN);

var _JUMP_ADDRESS = require('../JUMP_ADDRESS');

var _JUMP_ADDRESS2 = _interopRequireDefault(_JUMP_ADDRESS);

var _JUMP_BACK = require('../JUMP_BACK');

var _JUMP_BACK2 = _interopRequireDefault(_JUMP_BACK);

var _JUMP_CLOSE = require('../JUMP_CLOSE');

var _JUMP_CLOSE2 = _interopRequireDefault(_JUMP_CLOSE);

var _JUMP_IN = require('../JUMP_IN');

var _JUMP_IN2 = _interopRequireDefault(_JUMP_IN);

var _JUMP_NATIVE = require('../JUMP_NATIVE');

var _JUMP_NATIVE2 = _interopRequireDefault(_JUMP_NATIVE);

var _JUMP_ORDER = require('../JUMP_ORDER');

var _JUMP_ORDER2 = _interopRequireDefault(_JUMP_ORDER);

var _JUMP_OUT = require('../JUMP_OUT');

var _JUMP_OUT2 = _interopRequireDefault(_JUMP_OUT);

var _JUMP_PRODUCT = require('../JUMP_PRODUCT');

var _JUMP_PRODUCT2 = _interopRequireDefault(_JUMP_PRODUCT);

var _JUMP_SETTING = require('../JUMP_SETTING');

var _JUMP_SETTING2 = _interopRequireDefault(_JUMP_SETTING);

var _JUMP_TO = require('../JUMP_TO');

var _JUMP_TO2 = _interopRequireDefault(_JUMP_TO);

var _LOGGER = require('../LOGGER');

var _LOGGER2 = _interopRequireDefault(_LOGGER);

var _LOGIN = require('../LOGIN');

var _LOGIN2 = _interopRequireDefault(_LOGIN);

var _LOGOUT = require('../LOGOUT');

var _LOGOUT2 = _interopRequireDefault(_LOGOUT);

var _PAGE_HIDE = require('../PAGE_HIDE');

var _PAGE_HIDE2 = _interopRequireDefault(_PAGE_HIDE);

var _PAGE_SHOW = require('../PAGE_SHOW');

var _PAGE_SHOW2 = _interopRequireDefault(_PAGE_SHOW);

var _PAGE_UNLOAD = require('../PAGE_UNLOAD');

var _PAGE_UNLOAD2 = _interopRequireDefault(_PAGE_UNLOAD);

var _PAY = require('../PAY');

var _PAY2 = _interopRequireDefault(_PAY);

var _REFRESH = require('../REFRESH');

var _REFRESH2 = _interopRequireDefault(_REFRESH);

var _SET_BACK = require('../SET_BACK');

var _SET_BACK2 = _interopRequireDefault(_SET_BACK);

var _SET_DRAGBACK = require('../SET_DRAGBACK');

var _SET_DRAGBACK2 = _interopRequireDefault(_SET_DRAGBACK);

var _SET_FLOOR = require('../SET_FLOOR');

var _SET_FLOOR2 = _interopRequireDefault(_SET_FLOOR);

var _LOADING_SHOW = require('../LOADING_SHOW');

var _LOADING_SHOW2 = _interopRequireDefault(_LOADING_SHOW);

var _SET_MENUTITLE = require('../SET_MENUTITLE');

var _SET_MENUTITLE2 = _interopRequireDefault(_SET_MENUTITLE);

var _SET_REFRESH = require('../SET_REFRESH');

var _SET_REFRESH2 = _interopRequireDefault(_SET_REFRESH);

var _SET_RIGHTMENU = require('../SET_RIGHTMENU');

var _SET_RIGHTMENU2 = _interopRequireDefault(_SET_RIGHTMENU);

var _STORAGE_SAVE = require('../STORAGE_SAVE');

var _STORAGE_SAVE2 = _interopRequireDefault(_STORAGE_SAVE);

var _SET_TITLE = require('../SET_TITLE');

var _SET_TITLE2 = _interopRequireDefault(_SET_TITLE);

var _TOAST = require('../TOAST');

var _TOAST2 = _interopRequireDefault(_TOAST);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP = {
  AB_GROUP: _AB_GROUP2.default,
  ACTION_SHEET: _ACTION_SHEET2.default,
  ALERT: _ALERT2.default,
  AUTH: _AUTH2.default,
  BROWSER: _BROWSER2.default,

  CALLBACK_BACK: _CALLBACK_BACK2.default,
  CALLBACK_CG: _CALLBACK_CG2.default,
  CALLBACK_LOGIN: _CALLBACK_LOGIN2.default,
  CALLBACK_RESULT: _CALLBACK_RESULT2.default,

  CUSTOMER_CLOSE: _CUSTOMER_CLOSE2.default,
  CUSTOMER_EVENT_SEL: _CUSTOMER_EVENT_SEL2.default,
  CUSTOMER_EVENT_TEXT: _CUSTOMER_EVENT_TEXT2.default,
  CUSTOMER_EVENT_UPLOAD: _CUSTOMER_EVENT_UPLOAD2.default,
  CUSTOMER_EVENT_UPLOAD_RESULT: _CUSTOMER_EVENT_UPLOAD_RESULT2.default,
  CUSTOMER_HIDEBOX: _CUSTOMER_HIDEBOX2.default,
  CUSTOMER_OPEN: _CUSTOMER_OPEN2.default,
  CUSTOMER_SHOWBOX: _CUSTOMER_SHOWBOX2.default,
  CUSTOMER_SHOWPIC: _CUSTOMER_SHOWPIC2.default,
  CUSTOMER_UPLOAD: _CUSTOMER_UPLOAD2.default,

  DEVICE_COPY: _DEVICE_COPY2.default,
  DEVICE_INFO: _DEVICE_INFO2.default,
  DEVICE_INSTALL: _DEVICE_INSTALL2.default,
  DEVICE_NETWORK: _DEVICE_NETWORK2.default,
  DEVICE_PASTE: _DEVICE_PASTE2.default,
  DEVICE_PHOTO: _DEVICE_PHOTO2.default,
  DEVICE_SCREENSHOT: _DEVICE_SCREENSHOT2.default,
  DEVICE_SHAKE: _DEVICE_SHAKE2.default,
  DEVICE_VIBRATE: _DEVICE_VIBRATE2.default,

  GET_FLOOR: _GET_FLOOR2.default,
  GET_LOCATION: _LOCATION2.default,
  GET_STORAGE: _STORAGE_GET2.default,
  HIDE_FLOOR: _HIDE_FLOOR2.default,
  LOADING_HIDE: _LOADING_HIDE2.default,
  HIDE_RIGHTMENU: _HIDE_RIGHTMENU2.default,
  IS_LOGIN: _IS_LOGIN2.default,

  JUMP_ADDRESS: _JUMP_ADDRESS2.default,
  JUMP_BACK: _JUMP_BACK2.default,
  JUMP_CLOSE: _JUMP_CLOSE2.default,
  JUMP_IN: _JUMP_IN2.default,
  JUMP_NATIVE: _JUMP_NATIVE2.default,
  JUMP_ORDER: _JUMP_ORDER2.default,
  JUMP_OUT: _JUMP_OUT2.default,
  JUMP_PRODUCT: _JUMP_PRODUCT2.default,
  JUMP_SETTING: _JUMP_SETTING2.default,
  JUMP_TO: _JUMP_TO2.default,

  LOGGER: _LOGGER2.default,
  LOGIN: _LOGIN2.default,
  LOGOUT: _LOGOUT2.default,
  PAGE_HIDE: _PAGE_HIDE2.default,
  PAGE_SHOW: _PAGE_SHOW2.default,
  PAGE_UNLOAD: _PAGE_UNLOAD2.default,
  PAY: _PAY2.default,
  REFRESH: _REFRESH2.default,
  SET_BACK: _SET_BACK2.default,

  SET_DRAGBACK: _SET_DRAGBACK2.default,
  SET_FLOOR: _SET_FLOOR2.default,
  LOADING_SHOW: _LOADING_SHOW2.default,
  SET_MENUTITLE: _SET_MENUTITLE2.default,
  SET_REFRESH: _SET_REFRESH2.default,
  SET_RIGHTMENU: _SET_RIGHTMENU2.default,
  SET_STORAGE: _STORAGE_SAVE2.default,
  SET_TITLE: _SET_TITLE2.default,
  TOAST: _TOAST2.default
};
var pkg = require('../../src/package.json');
window.APP = APP;
window.APP.version = pkg.version;
//# sourceMappingURL=index.js.map