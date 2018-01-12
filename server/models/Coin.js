import mongoose from "mongoose";

const schema = new mongoose.Schema({
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
    },
});

export default mongoose.model("Coin", schema);