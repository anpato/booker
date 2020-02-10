"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageModel = void 0;

var _mongoose = require("mongoose");

var MessageModel = new _mongoose.Schema({
  recipient_id: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  sender_id: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'employees'
  }
}, {
  timeStamps: true
});
exports.MessageModel = MessageModel;