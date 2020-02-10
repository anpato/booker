"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pusher = void 0;

var _pusher = _interopRequireDefault(require("pusher"));

var _env = require("../env");

var pusher = new _pusher["default"]({
  appId: _env.PUSHER_APP_ID,
  key: _env.PUSHER_KEY,
  secret: _env.PUSHER_SECRET,
  cluster: _env.PUSHER_CLUSTER,
  useTLS: true
});
exports.pusher = pusher;