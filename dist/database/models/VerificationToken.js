"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerificationTokenModel = void 0;

var _mongoose = require("mongoose");

var _v = _interopRequireDefault(require("uuid/v4"));

var VerificationTokenModel = new _mongoose.Schema({
  _id: {
    type: String,
    "default": _v["default"]
  },
  token: {
    type: String
  },
  user_id: {
    type: String,
    ref: 'users'
  },
  expire_at: {
    type: Date,
    "default": Date.now(),
    index: {
      expires: 129600
    }
  }
}, {
  timeStamps: true
});
exports.VerificationTokenModel = VerificationTokenModel;