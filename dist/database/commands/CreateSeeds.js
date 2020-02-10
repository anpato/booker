"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSeedFiles = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _faker = _interopRequireDefault(require("faker"));

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _v = _interopRequireDefault(require("uuid/v4"));

var createTimes = function createTimes() {
  var times = [];
  var amTimes = [8, 9, 10, 11];
  var pmTimes = [12, 1, 2, 3, 4, 5, 6, 7];

  for (var index = 0; index < 7; index++) {
    var obj = {
      day: _faker["default"].date.weekday(),
      open_time: "".concat(amTimes[Math.floor(Math.random() * amTimes.length)], ":00 AM"),
      close_time: "".concat(pmTimes[Math.floor(Math.random() * amTimes.length)], ":00 PM")
    };
    times.push(obj);
  }

  return times;
};

var createAddress = function createAddress() {
  var addressData = {
    _id: (0, _v["default"])(),
    address_line: _faker["default"].address.streetAddress(),
    zip_code: _faker["default"].address.zipCode(),
    city: _faker["default"].address.city(),
    state: _faker["default"].address.city(),
    cc: _faker["default"].address.countryCode(),
    lat: _faker["default"].address.latitude(),
    lng: _faker["default"].address.longitude()
  };
  return {
    _id: addressData._id,
    data: addressData
  };
};

var createBusinesses = function createBusinesses(lenOfItems) {
  var addresses = [];
  return {
    businesses: (0, _toConsumableArray2["default"])(Array(lenOfItems)).map(function () {
      var address = createAddress();
      addresses.push(address.data);
      return {
        _id: (0, _v["default"])(),
        name: _faker["default"].company.companyName(),
        address_id: address._id,
        hours: createTimes(),
        phone_number: _faker["default"].phone.phoneNumber()
      };
    }),
    addresses: addresses
  };
};

var createEmployee = function createEmployee(lenOfItems) {
  return (0, _toConsumableArray2["default"])(Array(lenOfItems)).map(function () {
    return {
      _id: (0, _v["default"])(),
      name: _faker["default"].name.findName(),
      profile_img: _faker["default"].image.avatar(),
      email: _faker["default"].internet.email(),
      business_id: null,
      isAdmin: _faker["default"].random["boolean"]()
    };
  });
};

var createUsers = function createUsers(lenOfItems) {
  return (0, _toConsumableArray2["default"])(Array(lenOfItems)).map(function () {
    return {
      _id: (0, _v["default"])(),
      name: _faker["default"].name.findName(),
      email: _faker["default"].internet.email(),
      password_digest: _faker["default"].random.uuid(),
      isVerified: _faker["default"].random["boolean"]()
    };
  });
};

var CreateSeedFiles =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var lenOfItems, _createBusinesses, businesses, addresses, employees, users;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.info(_chalk["default"].greenBright('Generating Seed Data'));
            lenOfItems = 4000;
            _createBusinesses = createBusinesses(lenOfItems), businesses = _createBusinesses.businesses, addresses = _createBusinesses.addresses;
            employees = createEmployee(lenOfItems);
            users = createUsers(lenOfItems);
            return _context.abrupt("return", {
              businesses: businesses,
              addresses: addresses,
              employees: employees,
              users: users
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function CreateSeedFiles() {
    return _ref.apply(this, arguments);
  };
}();

exports.CreateSeedFiles = CreateSeedFiles;