"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _env = require("../env");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _v = _interopRequireDefault(require("uuid/v4"));

var mutations = _interopRequireWildcard(require("../utils/mutations"));

var _Schema = require("../database/Schema");

var _error = require("../middleware/error");

var AuthController = function AuthController() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, AuthController);

  this.Authenticate = function (req, res, next) {
    try {
      var token = req.headers.authorization.split(' ')[1];

      var data = _this.jwt.verify(token, _env.APP_SECRET);

      res.locals.user = data;
      next();
    } catch (error) {
      res.status(403).send({
        error: 'Unauthorized'
      });
    }
  };

  this.SignToken = function (payload) {
    var token = _this.jwt.sign({
      payload: payload
    }, _env.APP_SECRET);

    return token;
  };

  this.VerifyPassword =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(user, password) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _bcrypt["default"].compare(password, user.password_digest);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  this.HashPassword =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(password) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _bcrypt["default"].hash(password, _env.SALT_ROUNDS);

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  this.VerifyUserAccount =
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(req, res, next) {
      var _id;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _id = res.locals.token.user_id._id;
              _context3.next = 4;
              return _Schema.User.updateOne({
                _id: _id
              }, {
                isVerified: true
              });

            case 4:
              next();
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              next(new _error.ErrorHandler(401, 'Account Not Found'));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();

  this.RegisterUser =
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(req, res, next) {
      var _req$body, username, name, email, password, password_digest, user, token;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _req$body = req.body, username = _req$body.username, name = _req$body.name, email = _req$body.email, password = _req$body.password;
              _context4.next = 4;
              return _this.HashPassword(password);

            case 4:
              password_digest = _context4.sent;
              user = mutations.InsertModel(_Schema.User, {
                name: name,
                username: username,
                email: email,
                password_digest: password_digest,
                isVerified: false
              });
              token = mutations.InsertModel(_Schema.VerifcationToken, {
                token: _this.uuid(),
                user_id: user._id,
                expire_at: Date.now()
              });
              res.send({
                user: user,
                token: token
              });
              _context4.next = 14;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              next(new _error.ErrorHandler(500, 'Could not register account'));
              throw _context4.t0;

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 10]]);
    }));

    return function (_x7, _x8, _x9) {
      return _ref4.apply(this, arguments);
    };
  }();

  this.LoginUser =
  /*#__PURE__*/
  function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(req, res, next) {
      var _res$locals, user, password, payload, token;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _res$locals = res.locals, user = _res$locals.user, password = _res$locals.password;
              _context5.next = 4;
              return _this.VerifyPassword(user, password);

            case 4:
              if (!_context5.sent) {
                _context5.next = 8;
                break;
              }

              payload = {
                _id: user._id,
                username: user.username,
                name: user.name
              };
              token = _this.SignToken(payload);
              return _context5.abrupt("return", res.send({
                user: payload,
                token: token
              }));

            case 8:
              next(new _error.ErrorHandler(401, 'Unauthorized'));
              _context5.next = 14;
              break;

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](0);
              throw _context5.t0;

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 11]]);
    }));

    return function (_x10, _x11, _x12) {
      return _ref5.apply(this, arguments);
    };
  }();

  this.jwt = _jsonwebtoken["default"];
  this.uuid = _v["default"];
};

exports["default"] = AuthController;