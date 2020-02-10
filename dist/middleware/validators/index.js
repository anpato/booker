"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VerifyIsAdmin = require("./VerifyIsAdmin");

Object.keys(_VerifyIsAdmin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VerifyIsAdmin[key];
    }
  });
});

var _VerifyUser = require("./VerifyUser");

Object.keys(_VerifyUser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VerifyUser[key];
    }
  });
});