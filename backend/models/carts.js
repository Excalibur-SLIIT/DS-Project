const item = require("./item");
const mongo = require("mongoose");

const cart = new mongo.Schema({
    buyerId: {
        type: String,
        require: true
    },
    itemId:  {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

module.exports = mongo.model("Carts",cart);