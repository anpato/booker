"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _Database = _interopRequireDefault(require("./database/Database"));

var _chalk = _interopRequireDefault(require("chalk"));

var _error = require("./middleware/error");

var Server =
/*#__PURE__*/
function () {
  function Server(port, middleWare, baseroute) {
    (0, _classCallCheck2["default"])(this, Server);
    this.app = (0, _express["default"])();
    this.port = port;
    this.middleWare = middleWare;
    this.baseroute = baseroute;
    this.database = new _Database["default"]();
  }

  (0, _createClass2["default"])(Server, [{
    key: "get",
    value: function get() {
      this.app.get(this.baseroute, function (req, res) {
        return res.json({
          msg: 'Portfolio'
        });
      });
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this = this;

      this.app.listen(this.port, function () {
        return console.info("".concat(_chalk["default"].green('Server Started on '), " port:").concat(_this.port));
      });
    }
  }, {
    key: "init_middleWare",
    value: function init_middleWare() {
      var _this2 = this;

      this.middleWare.forEach(function (middleware) {
        return _this2.app.use(middleware);
      });
    }
  }, {
    key: "init_routes",
    value: function init_routes() {
      this.app.use('/api', _routes["default"]);
    }
  }, {
    key: "connectDB",
    value: function connectDB() {
      var _this3 = this;

      this.database.ConnectDB().once('open', function () {
        _this3.listen();
      });
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.app.disable('x-powered-by');
      this.init_middleWare();
      this.init_routes();
      this.connectDB();
    }
  }]);
  return Server;
}();

var _default = Server;
exports["default"] = _default;