"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReturnPaginatedResults = exports.RemoveVerificationToken = exports.RemoveUserFromDb = exports.FindVerificationToken = exports.FindUserAndEmployee = exports.FindUser = exports.FindEmployeeAndAppointment = exports.FindEmployees = exports.FindEmployee = exports.CheckIfSlotIsAvailable = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Schema = require("../database/Schema");

var _error = require("../middleware/error");

var CheckIfSlotIsAvailable =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var ExistingAppointment;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Schema.Appointment.findOne().where({
              day: req.body.appointment.day,
              slot: req.body.appointment.slot,
              service_provider: res.locals.employee._id
            });

          case 3:
            ExistingAppointment = _context.sent;
            return _context.abrupt("return", ExistingAppointment ? res.status(400).json({
              message: 'Slot is no longer available.'
            }) : next());

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function CheckIfSlotIsAvailable(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.CheckIfSlotIsAvailable = CheckIfSlotIsAvailable;

var FindEmployee =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res, next) {
    var employee;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Schema.Employee.findOne(req.params.employee_id);

          case 2:
            employee = _context2.sent;
            if (employee) res.locals.employee = employee;
            return _context2.abrupt("return", employee ? next() : res.status(400).json({
              message: 'Employee not found.'
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function FindEmployee(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.FindEmployee = FindEmployee;

var FindEmployees =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    var employees;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Schema.Employee.find();

          case 2:
            employees = _context3.sent;
            return _context3.abrupt("return", employees);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function FindEmployees() {
    return _ref3.apply(this, arguments);
  };
}();

exports.FindEmployees = FindEmployees;

var FindEmployeeAndAppointment =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(req, res, next) {
    var appointment, employee;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Schema.Appointment.findOne({
              _id: req.params.appointment_id
            });

          case 2:
            appointment = _context4.sent;
            _context4.next = 5;
            return _Schema.Employee.findOne({
              _id: req.params.employee_id
            });

          case 5:
            employee = _context4.sent;
            res.locals = {
              appointment: appointment,
              employee: employee
            };
            next();

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function FindEmployeeAndAppointment(_x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.FindEmployeeAndAppointment = FindEmployeeAndAppointment;

var FindUser =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(req, res, next) {
    var user;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Schema.User.findOne(req.params.user_id ? {
              _id: req.params.user_id
            } : {
              username: req.body.username
            });

          case 2:
            user = _context5.sent;
            res.locals = {
              user: user,
              password: req.body.password
            };

            if (user) {
              next();
            } else {
              next(new _error.ErrorHandler(401, 'Account Not Found'));
            }

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function FindUser(_x10, _x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}();

exports.FindUser = FindUser;

var FindUserAndEmployee =
/*#__PURE__*/
function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(req, res, next) {
    var user, employee;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Schema.User.findOne({
              _id: req.query.user
            });

          case 2:
            user = _context6.sent;
            _context6.next = 5;
            return _Schema.Employee.findOne({
              _id: req.query.employee
            });

          case 5:
            employee = _context6.sent;
            res.locals = {
              user: user,
              employee: employee
            };
            next();

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function FindUserAndEmployee(_x13, _x14, _x15) {
    return _ref6.apply(this, arguments);
  };
}();

exports.FindUserAndEmployee = FindUserAndEmployee;

var FindVerificationToken =
/*#__PURE__*/
function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(req, res, next) {
    var user, token;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            user = res.locals.user;
            _context7.next = 3;
            return _Schema.VerifcationToken.findOne({
              user_id: user._id
            });

          case 3:
            token = _context7.sent;

            if (!user.isVerified) {
              _context7.next = 8;
              break;
            }

            return _context7.abrupt("return", res.status(202).json({
              msg: 'Account already verified'
            }));

          case 8:
            if (!(!token && !user.isVerified)) {
              _context7.next = 13;
              break;
            }

            _context7.next = 11;
            return RemoveUserFromDb(req.params.user_id, res);

          case 11:
            _context7.next = 15;
            break;

          case 13:
            res.locals.token = token;
            next();

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function FindVerificationToken(_x16, _x17, _x18) {
    return _ref7.apply(this, arguments);
  };
}();

exports.FindVerificationToken = FindVerificationToken;

var RemoveUserFromDb =
/*#__PURE__*/
function () {
  var _ref8 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(id, res) {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _Schema.User.deleteOne({
              _id: id
            });

          case 2:
            throw new _error.ErrorHandler(401, 'Token Has Expired');

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function RemoveUserFromDb(_x19, _x20) {
    return _ref8.apply(this, arguments);
  };
}();

exports.RemoveUserFromDb = RemoveUserFromDb;

var RemoveVerificationToken =
/*#__PURE__*/
function () {
  var _ref9 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee9(req, res) {
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _Schema.VerifcationToken.deleteOne({
              _id: res.locals.token._id
            });

          case 2:
            res.send({
              message: 'Account Verified'
            });

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function RemoveVerificationToken(_x21, _x22) {
    return _ref9.apply(this, arguments);
  };
}();

exports.RemoveVerificationToken = RemoveVerificationToken;

var ReturnPaginatedResults = function ReturnPaginatedResults(countData, key, data, res) {
  res.json((0, _defineProperty2["default"])({
    currentPage: countData.currentPage,
    pages: Math.ceil(countData.results / countData.limit),
    results: countData.results
  }, key, data));
};

exports.ReturnPaginatedResults = ReturnPaginatedResults;