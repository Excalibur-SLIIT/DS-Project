const mongo = require("mongoose");

const Seller = new mongo.Schema({
    id: {
        type: Number,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    mobile: {
        type: Number,

    },
    address: {
        type: String,
        require: true
    }
},{
    timestamps: true
});

module.exports = mongo.model("Seller",Seller);