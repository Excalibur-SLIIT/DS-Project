const mongo = require("mongoose");
const seller = require("../models/seller");

const get = async (req,res) => {
    await seller.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
}

const getById = async (req,res) => {
    await seller.findOne({id : req.params.id})
    .then(admin => res.json(admin))
    .catch(err => res.json(err))
}

const create = async (req,res) => {
    const newUser = new user({
        id: Number(req.body.id),
        username: String(req.body.username),
        password: req.body.password,
        type: req.body.type,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        mobile: req.body.mobile
    });
    await newUser.save()
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
};

const update = async (req,res) => {
    await seller.findOneAndUpdate({id: req.params.id},req.body).
    then(result => seller.findOne({id: req.params.id}).then(result => res.json(result)))
    .catch(err => res.json(err));
} 


const remove = async (req,res) => {
    await seller.findOneAndRemove({id: req.params.id})
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err).send());
};

module.exports = {get, getById, create, update, remove};