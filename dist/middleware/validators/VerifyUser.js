"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerifyIsUserValid = void 0;

var _error = require("../error");

var VerifyIsUserValid = function VerifyIsUserValid(req, res, next) {
  return res.locals.user.isVerified ? next() : next(new _error.ErrorHandler(401, 'Account Not Verified'));
};

exports.VerifyIsUserValid = VerifyIsUserValid;