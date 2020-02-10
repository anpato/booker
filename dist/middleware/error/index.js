"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HandleError = exports.ErrorHandler = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var ErrorHandler =
/*#__PURE__*/
function (_Error) {
  (0, _inherits2["default"])(ErrorHandler, _Error);

  function ErrorHandler(statusCode, message) {
    var _this;

    (0, _classCallCheck2["default"])(this, ErrorHandler);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ErrorHandler).call(this));
    _this.statusCode = statusCode;
    _this.message = message;
    return _this;
  }

  return ErrorHandler;
}((0, _wrapNativeSuper2["default"])(Error));

exports.ErrorHandler = ErrorHandler;

var HandleError = function HandleError(err, res) {
  var statusCode = err.statusCode,
      message = err.message;
  return res.status(statusCode).send({
    status: 'error',
    statusCode: statusCode,
    message: message
  });
};

exports.HandleError = HandleError;