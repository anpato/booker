"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressModel = void 0;

var _mongoose = require("mongoose");

var _v = _interopRequireDefault(require("uuid/v4"));

var AddressModel = new _mongoose.Schema({
  _id: {
    type: String,
    "default": _v["default"]
  },
  address_line: String,
  zip_code: String,
  city: String,
  state: String,
  cc: String,
  lat: Number,
  lng: Number
}, {
  timeStamps: true
});
exports.AddressModel = AddressModel;