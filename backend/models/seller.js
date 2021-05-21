const mongo = require("mongoose");

const Seller = new mongo.Schema({
    username: {
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
    password: {
        type: String,
        require: true
    },
    companyName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }
},{
    timestamps: true
});

module.exports = mongo.model("Seller",Seller);