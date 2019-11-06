'use strict';
// 重传图片
// {
//    path: 'sd/pic/upload/1273911.jpg' //App存放图片的路径
//  }

/**
 * todo CUSTOMER
 */
import {WinJSDec} from './APP/config';

var name = 'CUSTOMER_CLOSE';
var CUSTOMER_CLOSE = _ => {
  WinJSDec(_ => {
    window.WinJSBridge.call('customerService', 'closeService');
  });
};
export default CUSTOMER_CLOSE;
