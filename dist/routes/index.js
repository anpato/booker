"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _EmployeeRouter = _interopRequireDefault(require("./EmployeeRouter"));

var _BusinessRouter = _interopRequireDefault(require("./BusinessRouter"));

var _AppointmentRouter = _interopRequireDefault(require("./AppointmentRouter"));

var _UserRouter = _interopRequireDefault(require("./UserRouter"));

var _AuthRouter = _interopRequireDefault(require("./AuthRouter"));

var AppRouter = (0, _express.Router)();
AppRouter.use('/employees', _EmployeeRouter["default"]);
AppRouter.use('/businesses', _BusinessRouter["default"]);
AppRouter.use('/appointments', _AppointmentRouter["default"]);
AppRouter.use('/users', _UserRouter["default"]);
AppRouter.use('/auth', _AuthRouter["default"]);
var _default = AppRouter;
exports["default"] = _default;