const mongo = require("mongoose");

exports.Item = new mongo.Schema({

    sellerId: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
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
        type: String,
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
    image: {
        type: Object
    }

}, {
    timestamps: true
});

exports.model = mongo.model("Item", exports.Item);