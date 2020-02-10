"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppointmentModel = void 0;

var _mongoose = require("mongoose");

var _v = _interopRequireDefault(require("uuid/v4"));

var AppointmentModel = new _mongoose.Schema({
  _id: {
    type: String,
    "default": _v["default"]
  },
  slot: String,
  employee_id: {
    type: String,
    ref: 'employees'
  },
  day: Date,
  user: {
    type: String,
    ref: 'users'
  },
  isCanceled: Boolean
}, {
  timeStamps: true
});
exports.AppointmentModel = AppointmentModel;