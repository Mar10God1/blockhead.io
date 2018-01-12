"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _CoinsController = require("../Controllers/CoinsController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.get("/coins", _CoinsController.list);
router.get("/coins/:id", _CoinsController.show);
router.post("/coins", _CoinsController.create);
router.put("/coins/:id", _CoinsController.update);
router.delete("/coins/:id", _CoinsController.remove);

exports.default = router;