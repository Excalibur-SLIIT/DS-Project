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

const create = async (req,res) => {
    const newAddress = new address({
        buyerId: req.body.buyerId,
        address: req.body.address
    });
    await address.save()
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
}

const update = async (req,res) => {
    await address.findOneAndUpdate({_id: req.body.id})
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
}

const remove = async (req,res) => {
    await address.findOneAndRemove({_id:req.body.id})
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
}