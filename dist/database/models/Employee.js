"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmployeeModel = void 0;

var _mongoose = require("mongoose");

var _v = _interopRequireDefault(require("uuid/v4"));

var EmployeeModel = new _mongoose.Schema({
  _id: {
    type: String,
    "default": _v["default"]
  },
  name: String,
  profile_img: String,
  email: String,
  business_id: {
    type: String,
    ref: 'businesses'
  },
  isAdmin: Boolean
}, {
  timeStamps: true
});
exports.EmployeeModel = EmployeeModel;