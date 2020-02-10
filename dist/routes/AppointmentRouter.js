"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _AppointmentController = _interopRequireDefault(require("../controllers/AppointmentController"));

var resolvers = _interopRequireWildcard(require("../utils/resolvers"));

var validators = _interopRequireWildcard(require("../middleware/validators"));

var AppointmentRouter = (0, _express.Router)();
var controller = new _AppointmentController["default"](); // Takes an employee id as query param employee, ex: appoinments/?employee=employee_id

AppointmentRouter.get('/active', controller.FindAllActiveAppointments);
AppointmentRouter.get('/employee/:employee_id', controller.FindAllAppointments);
AppointmentRouter.put('/:appointment_id/employee/:employee_id', resolvers.FindEmployeeAndAppointment, validators.VerifyEmployeeCanEdit, controller.UpdateAppointment);
var _default = AppointmentRouter;
exports["default"] = _default;