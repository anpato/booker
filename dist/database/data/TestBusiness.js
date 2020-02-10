"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _default = [{
  _id: new _mongoose.Types.ObjectId('5e17d52abefd53d9697375d5'),
  name: 'New Cutzz',
  address: {
    address_line: '1234 Wallaby way',
    zip_code: '123456',
    city: 'Union',
    state: 'NJ',
    cc: 'US'
  },
  employees: [],
  hours: [{
    day: 'Monday',
    open_time: '9:00 AM',
    close_time: '5:00 PM'
  }],
  phone_number: '123-123-1234'
}];
exports["default"] = _default;