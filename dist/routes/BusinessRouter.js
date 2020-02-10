"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _BusinessController = _interopRequireDefault(require("../controllers/BusinessController"));

var BusinessRouter = (0, _express.Router)();
var controller = new _BusinessController["default"]();
BusinessRouter.get('/', controller.showBusinesses);
BusinessRouter.post('/', controller.createNewBusiness);
BusinessRouter.put('/:business_id/employees', controller.addEmployeesToBusiness);
BusinessRouter.put('/:business_id/details', controller.updateBusiness);
BusinessRouter.get('/:business_id', controller.getBusinessById);
BusinessRouter["delete"]('/:business_id', controller.RemoveBusinessAndEmployees);
var _default = BusinessRouter;
exports["default"] = _default;