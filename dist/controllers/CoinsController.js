"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.list = list;
exports.show = show;
exports.create = create;
exports.update = update;
exports.remove = remove;

var _Coin = require("../models/Coin");

var _Coin2 = _interopRequireDefault(_Coin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list(request, response) {
    _Coin2.default.find({}).exec().then(function (coins) {
        return response.json(coins);
    });
}

function show(request, response) {
    _Coin2.default.findById(request.params.id).exec().then(function (coin) {
        return response.json(coin);
    });
}

function create(request, response) {
    var coin = new _Coin2.default({
        symbol: request.body.symbol,
        name: request.body.name,
        price: request.body.price,
        change: request.body.change
    });
    coin.save().then(function (coins) {
        return response.json(coins);
    });
}

function update(request, response) {
    return response.json(_Coin2.default[0].name = request.params.id);
}

function remove(request, response) {
    _Coin2.default.findByIdAndRemove(request.params.id).exec().then(function (coins) {
        return response.json(coins);
    });
}