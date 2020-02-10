"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Address = exports.VerifcationToken = exports.Employee = exports.Business = exports.Appointment = exports.User = void 0;

var _mongoose = require("mongoose");

var _models = require("./models");

var User = (0, _mongoose.model)('users', _models.UserModel);
exports.User = User;
var Appointment = (0, _mongoose.model)('appointments', _models.AppointmentModel);
exports.Appointment = Appointment;
var Business = (0, _mongoose.model)('businesses', _models.BusinessModel);
exports.Business = Business;
var Employee = (0, _mongoose.model)('employees', _models.EmployeeModel);
exports.Employee = Employee;
var VerifcationToken = (0, _mongoose.model)('verification_tokens', _models.VerificationTokenModel);
exports.VerifcationToken = VerifcationToken;
var Address = (0, _mongoose.model)('addresses', _models.AddressModel);
exports.Address = Address;