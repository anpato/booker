"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _Schema = require("../database/Schema");

var mutations = _interopRequireWildcard(require("../utils/mutations"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var EmployeeController = function EmployeeController() {
  (0, _classCallCheck2["default"])(this, EmployeeController);

  this.AddAppointmentSlotToEmployee = function (req, res) {
    try {
      var _req$body$appointment = req.body.appointment,
          slot = _req$body$appointment.slot,
          day = _req$body$appointment.day;
      var _res$locals = res.locals,
          user = _res$locals.user,
          employee = _res$locals.employee;
      var appointment = mutations.InsertModel(_Schema.Appointment, {
        slot: slot,
        day: new Date(day),
        user: user._id,
        employee_id: employee._id,
        isCanceled: false
      });
      res.send(appointment);
    } catch (error) {
      throw error;
    }
  };

  this.UpdateAppointment =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req, res) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _Schema.Appointment.findOneAndUpdate({
                employee_id: req.params.employee_id
              }, _objectSpread({}, req.body.appointment), {
                "new": true
              }, function (err, doc) {
                if (err) throw err;
                res.send(doc);
              });

            case 3:
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  this.FindEmployeesFromBusinnes =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(req, res) {
      var employess;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _Schema.Employee.find({
                business_id: req.params.business_id
              });

            case 3:
              employess = _context2.sent;
              res.send(employess);
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var _default = EmployeeController;
exports["default"] = _default;