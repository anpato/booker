"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddEmployeeIdToBusiness = exports.InsertTestSeed = exports.AddBusinessIdToEmployee = exports.ParseRequestedData = exports.InsertModel = exports.InsertAddressesMutation = exports.InsertEmployeeMutation = exports.InsertBusinessesMutation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Schema = require("../database/Schema");

var _mongoose = require("mongoose");

var InsertBusinessesMutation =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(businesses) {
    var newBusinesses;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Schema.Business.insertMany(businesses);

          case 2:
            newBusinesses = _context.sent;
            return _context.abrupt("return", newBusinesses);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function InsertBusinessesMutation(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.InsertBusinessesMutation = InsertBusinessesMutation;

var InsertEmployeeMutation =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(employees) {
    var newEmployees;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Schema.Employee.insertMany(employees);

          case 2:
            newEmployees = _context2.sent;
            return _context2.abrupt("return", newEmployees);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function InsertEmployeeMutation(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.InsertEmployeeMutation = InsertEmployeeMutation;

var InsertAddressesMutation =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(addresses) {
    var newAddresses;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Schema.Address.insertMany(addresses);

          case 2:
            newAddresses = _context3.sent;
            return _context3.abrupt("return", newAddresses);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function InsertAddressesMutation(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.InsertAddressesMutation = InsertAddressesMutation;

var InsertModel = function InsertModel(model, params) {
  var newModel = new model(params);
  newModel.save();
  return newModel;
};

exports.InsertModel = InsertModel;

var ParseRequestedData = function ParseRequestedData(models, returnType) {
  return models.map(function (model) {
    return model[returnType];
  });
};

exports.ParseRequestedData = ParseRequestedData;

var AddBusinessIdToEmployee =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(employee_id, business_id, next) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Schema.Employee.updateOne({
              _id: employee_id
            }, {
              business_id: business_id
            });

          case 3:
            _context4.next = 8;
            break;

          case 5:
            _context4.prev = 5;
            _context4.t0 = _context4["catch"](0);
            throw _context4.t0;

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 5]]);
  }));

  return function AddBusinessIdToEmployee(_x4, _x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

exports.AddBusinessIdToEmployee = AddBusinessIdToEmployee;

var InsertTestSeed = function InsertTestSeed(employees, businesses) {
  employees.forEach(function (employee) {
    mutations.InsertModel(_Schema.Employee, employee);
  });
  businesses.forEach(function (business) {
    mutations.InsertModel(_Schema.Business, business);
  });
};

exports.InsertTestSeed = InsertTestSeed;

var AddEmployeeIdToBusiness =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(employee) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Schema.Business.updateOne({
              _id: employee.business_id
            }, {
              $set: {
                employees: employee._id
              }
            });

          case 3:
            _context5.next = 8;
            break;

          case 5:
            _context5.prev = 5;
            _context5.t0 = _context5["catch"](0);
            throw _context5.t0;

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 5]]);
  }));

  return function AddEmployeeIdToBusiness(_x7) {
    return _ref5.apply(this, arguments);
  };
}();

exports.AddEmployeeIdToBusiness = AddEmployeeIdToBusiness;