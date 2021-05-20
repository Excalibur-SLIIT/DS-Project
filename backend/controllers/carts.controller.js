const mongo = require("mongoose");
const carts = require("../models/carts");

const get = async (req,res) => {
    await carts.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
}

const getById = async (req,res) => {
    await carts.findOne({id : req.params.id})
    .then(admin => res.json(admin))
    .catch(err => res.json(err))
}

const create = async (req,res) => {
    const newCartItem = new carts({
        buyerId: req.body.buyerId,
        item: req.body.item,
        quantity: req.body.quantity
    });
    await newCartItem.save()
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
};

const update = async (req,res) => {
    await carts.findOneAndUpdate({_id: req.params.id},req.body).
    then(result => item.findOne({_id: req.params.id}).then(result => res.json(result)))
    .catch(err => res.json(err));
} 


const remove = async (req,res) => {
    await carts.findOneAndRemove({_id: req.params.id})
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err).send());
};

// need to add to history and reduce quantity in seller collection
const checkout = async (req,res) => {
    await carts.find();
};

module.exports = {get, getById, create, update, remove};