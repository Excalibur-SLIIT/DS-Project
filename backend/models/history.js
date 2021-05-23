const item = require("./item").Item;
const mongo = require("mongoose");

const History = mongo.Schema({
    buyerId: {
        type: String,
        require: true
    },
    sellerId: {
        type: String,
        require: true
    },
    item: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    deliverable: {
        type: String,
        require: true
    },
    paymentMethod: {
        type: String,
        require: true
    },
    payment: {
        type: Number,
        require: true
    }
});

module.exports = mongo.model("History",History);