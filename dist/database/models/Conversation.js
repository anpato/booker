"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConversationModel = void 0;

var _mongoose = require("mongoose");

var ConversationModel = new _mongoose.Schema({
  message_id: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'messages'
  }
}, {
  timeStamps: true
});
exports.ConversationModel = ConversationModel;