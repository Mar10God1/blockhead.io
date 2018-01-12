"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _mongoose2.default.Schema({
    symbol: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    price: {
        required: false,
        type: String
    },
    change: {
        required: false,
        type: String
    }
});

exports.default = _mongoose2.default.model("Coin", schema);