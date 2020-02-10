"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _v = _interopRequireDefault(require("uuid/v4"));

var _default = [{
  _id: (0, _v["default"])('5e190adc92477d5902490532'),
  name: 'Sage Rippin',
  profile_img: 'https://s3.amazonaws.com/uifaces/faces/twitter/adamnac/128.jpg',
  email: 'Bonnie83@yahoo.com',
  business_id: (0, _v["default"])('5e17d52abefd53d9697375d5'),
  isAdmin: true
}, {
  _id: (0, _v["default"])('5e190af15f2306f25ccc3dcf'),
  name: 'Ivory Mitchell',
  profile_img: 'https://s3.amazonaws.com/uifaces/faces/twitter/madysondesigns/128.jpg',
  email: 'Rachael35@hotmail.com',
  business_id: (0, _v["default"])('5e17d52abefd53d9697375d5'),
  isAdmin: false
}, {
  _id: (0, _v["default"])('5e190afb3e57e9a30a5bab62'),
  name: 'Giles Johnson',
  profile_img: 'https://s3.amazonaws.com/uifaces/faces/twitter/alagoon/128.jpg',
  email: 'Eino.OKeefe72@hotmail.com',
  business_id: (0, _v["default"])('5e17d52abefd53d9697375d5'),
  isAdmin: false
}, {
  _id: (0, _v["default"])('5e190b02e5772f475367dda5'),
  name: 'Miss Minerva Mante',
  profile_img: 'https://s3.amazonaws.com/uifaces/faces/twitter/leehambley/128.jpg',
  email: 'Henriette_Parisian@hotmail.com',
  business_id: (0, _v["default"])('5e17d52abefd53d9697375d5'),
  isAdmin: false
}];
exports["default"] = _default;