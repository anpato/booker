"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _EmployeeController = _interopRequireDefault(require("../controllers/EmployeeController"));

var validators = _interopRequireWildcard(require("../middleware/validators"));

var resolvers = _interopRequireWildcard(require("../utils/resolvers"));

var EmployeeRouter = (0, _express.Router)();
var controller = new _EmployeeController["default"](); // Takes two queries, user & provider
// Provider is employee_id and user is user_id
// ex: /api/employees/?user=user_id&provider=employee_id

EmployeeRouter.post('/', resolvers.FindUserAndEmployee, validators.VerifyIsUserValid, resolvers.CheckIfSlotIsAvailable, controller.AddAppointmentSlotToEmployee);
EmployeeRouter.put('/:employee_id/appointment', resolvers.FindEmployeeAndAppointment, controller.UpdateAppointment);
var _default = EmployeeRouter;
exports["default"] = _default;