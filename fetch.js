'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fetch = require('isomorphic-fetch');
var checkStatus = function checkStatus(response) {
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error();
  }
};

var get = function get(url, params) {
  var fn1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (_) {};
  var fn2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (_) {};

  var promise = void 0;

  function http_builder_url(url, data) {
    if (typeof url == 'undefined' || url == null || url == '') {
      return '';
    }
    if (typeof data == 'undefined' || data == null || (typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) != 'object') {
      return '';
    }
    url += url.indexOf("?") != -1 ? "" : "?";
    for (var k in data) {
      url += (url.indexOf("=") != -1 ? "&" : "") + k + "=" + encodeURI(data[k]);
    }
    return url;
  }

  if (typeof params === 'function') {
    promise = _fetch(url, {
      method: 'get',
      credentials: 'include'
    });
    return handleFetch(promise, params, fn1);
  }
  url = http_builder_url(url, params);
  promise = _fetch(url, {
    method: 'get',
    credentials: 'same-origin'
  });
  return handleFetch(promise, fn1, fn2);
};

var submit = function submit(url, body) {
  var fn1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (_) {};
  var fn2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (_) {};

  var options = {
    method: 'post',
    credentials: 'include',
    headers: {
      'Accept': 'application/json; charset=UTF-8',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  },
      promise = void 0;
  if (typeof body === 'function') {
    promise = _fetch(url, options);
    return handleFetch(promise, body, fn1);
  }
  options['body'] = body;
  promise = _fetch(url, options);
  return handleFetch(promise, fn1, fn2);
};

var post = function post(url, body) {
  var fn1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (_) {};
  var fn2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (_) {};

  var options = {
    method: 'post',
    credentials: 'include',
    headers: {
      'Accept': 'application/json; charset=UTF-8',
      'Content-Type': 'application/json; charset=UTF-8'
    }
  },
      promise = void 0;
  if (typeof body === 'function') {
    promise = _fetch(url, options);
    return handleFetch(promise, body, fn1);
  }
  options['body'] = (0, _stringify2.default)(body);
  promise = _fetch(url, options);
  return handleFetch(promise, fn1, fn2);
};

var handleFetch = function handleFetch(promise, fn1, fn2) {
  return promise.then(function (response) {
    return checkStatus(response);
  }).then(function (data) {
    fn1(data);
  }).catch(function (err) {
    fn2(err);
  });
};
var fetch = { get: get, post: post, submit: submit };
exports.default = fetch;
//# sourceMappingURL=fetch.js.map