"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _AuthController = _interopRequireDefault(require("../controllers/AuthController"));

var validators = _interopRequireWildcard(require("../middleware/validators"));

var resolvers = _interopRequireWildcard(require("../utils/resolvers"));

var AuthRouter = (0, _express.Router)();
var Auth = new _AuthController["default"]();
AuthRouter.post('/register', Auth.RegisterUser);
AuthRouter.post('/login', resolvers.FindUser, validators.VerifyIsUserValid, Auth.LoginUser);
AuthRouter.put('/verify/user/:user_id/token/:token_id', resolvers.FindUser, resolvers.FindVerificationToken, Auth.VerifyUserAccount, resolvers.RemoveVerificationToken);
var _default = AuthRouter;
exports["default"] = _default;