'use strict';
// 重传图片
// {
//    path: 'sd/pic/upload/1273911.jpg' //App存放图片的路径
//  }


/**
 * todo CUSTOMER
 */
import {WinJSDec, strError} from './APP/config';

var name = 'CUSTOMER_SHOWPIC';
var CUSTOMER_SHOWPIC = path => {
  if (typeof path !== 'string') {
    throw new TypeError(`[${name}] ${strError}`);
  }
  WinJSDec(_ => {
    window.WinJSBridge.call('customerService', 'uploadPic', {path});
  });
};
export default CUSTOMER_SHOWPIC;
