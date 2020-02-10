"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = void 0;

var _mongoose = require("mongoose");

var _v = _interopRequireDefault(require("uuid/v4"));

var UserModel = new _mongoose.Schema({
  _id: {
    type: String,
    "default": _v["default"]
  },
  name: String,
  username: String,
  email: String,
  password_digest: String,
  isVerified: Boolean
}, {
  timeStamps: true
});
exports.UserModel = UserModel;