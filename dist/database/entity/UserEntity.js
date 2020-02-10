"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _typeorm = require("typeorm");

var _v = _interopRequireDefault(require("uuid/v4"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

var User = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)(), _dec3 = (0, _typeorm.Column)({
  type: 'varchar',
  nullable: false
}), _dec4 = (0, _typeorm.Column)({
  type: 'varchar',
  nullable: false,
  unique: true
}), _dec5 = (0, _typeorm.Column)({
  type: 'varchar',
  nullable: false,
  unique: true
}), _dec6 = (0, _typeorm.Column)({
  name: 'password_digest',
  type: 'varchar',
  nullable: false
}), _dec7 = (0, _typeorm.Column)('boolean'), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_BaseEntity) {
  (0, _inherits2["default"])(User, _BaseEntity);

  function User() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, User);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(User)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _initializerDefineProperty2["default"])(_this, "id", _descriptor, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])(_this, "name", _descriptor2, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])(_this, "username", _descriptor3, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])(_this, "email", _descriptor4, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])(_this, "passwordDigest", _descriptor5, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])(_this, "isVerified", _descriptor6, (0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return User;
}(_typeorm.BaseEntity), _temp), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return (0, _v["default"])();
  }
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "name", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "username", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "email", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "passwordDigest", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "isVerified", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
})), _class2)) || _class);
exports.User = User;