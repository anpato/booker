"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SALT_ROUNDS = exports.APP_SECRET = exports.PORT = exports.NODE_ENV = exports.DEVELOP_URI = exports.MONGODB_URI = void 0;

require("dotenv/config");

var MONGODB_URI = process.env.MONGODB_URI;
exports.MONGODB_URI = MONGODB_URI;
var DEVELOP_URI = process.env.DEVELOP_URI;
exports.DEVELOP_URI = DEVELOP_URI;
var NODE_ENV = process.env.NODE_ENV;
exports.NODE_ENV = NODE_ENV;
var PORT = process.env.PORT || 3001;
exports.PORT = PORT;
var APP_SECRET = process.env.APP_SECRET;
exports.APP_SECRET = APP_SECRET;
var SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
exports.SALT_ROUNDS = SALT_ROUNDS;