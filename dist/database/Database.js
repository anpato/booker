"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _mongoose = require("mongoose");

var _config = require("../config");

var _chalk = _interopRequireDefault(require("chalk"));

var Database = function Database() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Database);

  this.CloseConnection = function () {
    console.info("".concat(_chalk["default"].red('Closing connection to:'), "  ").concat(_chalk["default"].bgGreen(_this.db().name)));

    _this.connection.close();
  };

  this.ConnectDB = function () {
    console.info(_chalk["default"].greenBright('Connecting to Database'));

    _this.connect(_this.db().connection, _this.params);

    _this.connection.once('open', function () {
      console.info("".concat(_chalk["default"].blueBright('Connected to:'), "  ").concat(_this.db().name));
    });

    return _this.connection;
  };

  this.DropDB =
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _this.ConnectDB().once('open',
            /*#__PURE__*/
            (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/
            _regenerator["default"].mark(function _callee() {
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.info(_chalk["default"].redBright('Droppping Database'));
                      _context.next = 3;
                      return _this.connection.db.dropDatabase();

                    case 3:
                      console.info(_chalk["default"].redBright('Database Dropped'));

                      _this.CloseConnection();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  this.db = _config.db;
  this.connect = _mongoose.connect;
  this.params = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  };
  this.connection = _mongoose.connection;
};

var _default = Database;
exports["default"] = _default;