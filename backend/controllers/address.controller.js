const address = require("../models/address");

const getByBuyerId = (req, res) => {
    address.find({ buyerId: req.params.buyerId }).
        then(result => {
            if (result === null) {
                res.status(404);
                res.json("User not available");
            } else if (String(result.password) === req.body.password) {
                res.status(200);
                res.json("Successfull");
            } else {
                res.status(404);
                res.json("Login unauthorized");
            }
        })
        .catch(err => res.json(err));
}

const get = (req,res) => {
    
} 