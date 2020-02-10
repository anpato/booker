"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Database = _interopRequireDefault(require("../Database"));

var _typeorm = require("typeorm");

var _entity = require("../entity");

var _CreateSeeds = require("./CreateSeeds");

var _TestEmployees = _interopRequireDefault(require("../data/TestEmployees"));

var _TestBusiness = _interopRequireDefault(require("../data/TestBusiness"));

var mutations = _interopRequireWildcard(require("../../utils/mutations"));

var resolvers = _interopRequireWildcard(require("../../utils/resolvers"));

var _chalk = _interopRequireDefault(require("chalk"));

// Should only be used for testing http requests in api folder
// const SeedTests = async () => {
//   const Files = { employees: TestEmployees, businesses: TestBusiness }
//   await mutations.InsertBusinessesMutation(Files.businesses)
//   await mutations.InsertEmployeeMutation(Files.employees)
// }
var InsertData =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(businesses, employees, addresses) {
    var connection, businessData, employeeData;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _typeorm.createConnection)();

          case 3:
            connection = _context3.sent;
            console.info(_chalk["default"].green('Inserting JSON Files'));
            _context3.next = 7;
            return mutations.InsertBusinessesMutation(businesses);

          case 7:
            businessData = _context3.sent;
            _context3.next = 10;
            return mutations.InsertEmployeeMutation(employees);

          case 10:
            employeeData = _context3.sent;
            _context3.next = 13;
            return mutations.InsertAddressesMutation(addresses);

          case 13:
            console.info(_chalk["default"].green('Creating Associations'));
            _context3.next = 16;
            return businesses.forEach(
            /*#__PURE__*/
            function () {
              var _ref2 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee(business) {
                var newBusiness;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _entity.Business.create(business);

                      case 2:
                        newBusiness = _context.sent;
                        _context.next = 5;
                        return connection.manager.save(newBusiness);

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x4) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 16:
            return _context3.abrupt("return", employeeData.reduce(
            /*#__PURE__*/
            function () {
              var _ref3 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee2(promise, employee, index) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return mutations.AddBusinessIdToEmployee(employee._id, businessData[index]._id);

                      case 2:
                        return _context2.abrupt("return", promise);

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x5, _x6, _x7) {
                return _ref3.apply(this, arguments);
              };
            }(), Promise.resolve()));

          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](0);
            throw _context3.t0;

          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 19]]);
  }));

  return function InsertData(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var main =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4() {
    var _ref5, businesses, employees, addresses;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _CreateSeeds.CreateSeedFiles)();

          case 2:
            _ref5 = _context4.sent;
            businesses = _ref5.businesses;
            employees = _ref5.employees;
            addresses = _ref5.addresses;
            _context4.next = 8;
            return InsertData(businesses, employees, addresses);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function main() {
    return _ref4.apply(this, arguments);
  };
}();

var run =
/*#__PURE__*/
function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5() {
    var database;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            database = new _Database["default"]();
            database.ConnectDB();
            _context5.prev = 2;
            _context5.next = 5;
            return main();

          case 5:
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](2);
            throw _context5.t0;

          case 10:
            _context5.prev = 10;
            process.exit();
            return _context5.finish(10);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 7, 10, 13]]);
  }));

  return function run() {
    return _ref6.apply(this, arguments);
  };
}();

run();