"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserEntity = require("./UserEntity");

Object.keys(_UserEntity).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UserEntity[key];
    }
  });
});

var _BusinessEntity = require("./BusinessEntity");

Object.keys(_BusinessEntity).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BusinessEntity[key];
    }
  });
});