const mongo = require("mongoose");

const Item = new mongo.Schema({
    // sellerId: {
    //     type: Number,
    //     require: true
    // },
    brand: {
        type: String,
        require: true
    },
    colour: {
        type: String,
        require: true
    },
    os: {
        type: String,
        require: true
    },
    processor: {
        type: String,
        require: true
    },
    memory: {
        type: String,
        require: true
    },
    graphics: {
        type: String,
        require: true
    },
    storage: {
        type: String,
        require: true
    },
    wifi: {
        type: Boolean,
        require: true
    },
    power: {
        type: String,
        require: true
    },
    battery: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        require: true
    }
}, {
    timestamps: true
});

module.exports = mongo.model("Item", Item);