"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessModel = void 0;

var _mongoose = require("mongoose");

var _v = _interopRequireDefault(require("uuid/v4"));

var BusinessModel = new _mongoose.Schema({
  _id: {
    type: String,
    "default": _v["default"]
  },
  name: String,
  address_id: {
    type: String,
    ref: 'addresses'
  },
  hours: [{
    day: String,
    open_time: String,
    close_time: String
  }],
  phone_number: String
}, {
  timeStamps: true
});
exports.BusinessModel = BusinessModel;