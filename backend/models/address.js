const mongo = require("mongoose");

const Address = new mongo.Schema({
    buyerId: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }
});

module.exports = mongo.model("BuyerAddress",Address);