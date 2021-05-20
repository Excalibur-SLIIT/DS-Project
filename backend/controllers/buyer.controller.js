const mongo = require("mongoose");
const buyer = require("../models/buyer");
const seller = require("../models/seller");

const get = async (req,res) => {
    await buyer.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
}

const getById = async (req,res) => {
    await buyer.findOne({id : req.params.id})
    .then(admin => res.json(admin))
    .catch(err => res.json(err))
}

const create = async (req,res) => {
    const newUser = new buyer({
        username: String(req.body.username),
        password: req.body.password,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        mobile: Number(req.body.mobile)
    });
    await newUser.save()
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
};

const update = async (req,res) => {
    await buyer.findOneAndUpdate({_id: req.params.id},req.body).
    then(result => seller.findOne({_id: req.params.id}).then(result => res.json(result)))
    .catch(err => res.json(err));
} 


const remove = async (req,res) => {
    await buyer.findOneAndRemove({_id: req.params.id})
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err).send());
};

const login = async (req,res) => {
    await buyer.findOne({"username": req.body.username})
    .then(result => {
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

module.exports = {get, getById, create, update, remove, login};