"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Server = _interopRequireDefault(require("./Server"));

var _ServerConfig = _interopRequireDefault(require("./config/ServerConfig"));

var _env = require("./env");

var app = new _Server["default"](_env.PORT, _ServerConfig["default"], '/');
app.initialize();