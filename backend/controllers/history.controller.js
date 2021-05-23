const mongo = require("mongoose");
const history = require("../models/history");

const get = async (req,res) => {
    await history.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
}

const getById = async (req,res) => {
    await history.findOne({id : req.params.id})
    .then(admin => res.json(admin))
    .catch(err => res.json(err))
}

const getByBuyerId = async (req,res) => {
    await history.findOne({buyerId : req.user.id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}

const create = async (req,res) => {
    const newItem = new history({
        buyerId: req.body.buyerId,
        item: req.body.item,
        quantity: req.body.quantity,
        date: new Date(),
        status: req.body.status,
        deliverable: req.body.deliverable
    });
    await newItem.save()
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
};

const update = async (req,res) => {
    await history.findOneAndUpdate({_id: req.params.id},req.body).
    then(result => item.findOne({_id: req.params.id}).then(result => res.json(result)))
    .catch(err => res.json(err));
} 


const remove = async (req,res) => {
    await history.findOneAndRemove({_id: req.params.id})
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err).send());
};

const searchByName = async (req,res) => {
    await history.find({"item.name": req.body.name})
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
};

module.exports = {get, getById, create, update, remove, getByBuyerId};