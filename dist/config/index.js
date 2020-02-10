"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _env = require("../env");

var db = function db() {
  switch (_env.NODE_ENV) {
    case 'production':
      return {
        name: 'Booker Production',
        connection: _env.MONGODB_URI
      };

    default:
      return {
        name: 'Booker Development',
        connection: _env.DEVELOP_URI
      };
  }
};

exports.db = db;