import Coin from "../models/Coin";

export function list(request, response) {
    Coin.find({}).exec()
    .then(coins => {
        return response.json(coins);
    });
}

export function show(request, response) {
    Coin.findById(request.params.id).exec()
    .then(coin => {
        return response.json(coin);
    });
}

export function create(request, response) {
    const coin = new Coin({
        symbol: request.body.symbol,
        name: request.body.name,
        price: request.body.price,
        change: request.body.change,
    });
    coin.save()
    .then(coins => {
        return response.json(coins);
    });
}

export function update(request, response) {
    return response.json(Coin[0].name = request.params.id);
}

export function remove(request, response) {
    Coin.findByIdAndRemove(request.params.id).exec()
    .then(coins => {
        return response.json(coins);
    });
}

