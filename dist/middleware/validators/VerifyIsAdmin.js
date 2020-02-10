"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerifyEmployeeCanEdit = void 0;

var VerifyEmployeeCanEdit = function VerifyEmployeeCanEdit(req, res, next) {
  var _res$locals = res.locals,
      employee = _res$locals.employee,
      appointment = _res$locals.appointment;
  return res.locals.employee.isAdmin || employee._id.toString() === appointment.service_provider.toString() ? next() : res.status(401).json({
    message: 'You must be an administrator in order to perform this task.'
  });
};

exports.VerifyEmployeeCanEdit = VerifyEmployeeCanEdit;