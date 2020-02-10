"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _helmet = _interopRequireDefault(require("helmet"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _error = require("../middleware/error");

var _default = [(0, _helmet["default"])(), (0, _morgan["default"])('dev'), (0, _cors["default"])(), _bodyParser["default"].urlencoded({
  extended: true
}), _bodyParser["default"].json()];
exports["default"] = _default;