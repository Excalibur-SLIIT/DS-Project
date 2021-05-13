const mongo = require("mongoose");
const item = require("../models/item");

const get = async (req,res) => {
    await item.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
}

const getById = async (req,res) => {
    await item.findOne({id : req.params.id})
    .then(admin => res.json(admin))
    .catch(err => res.json(err))
}

const create = async (req,res) => {
    const newItem = new item({
        brand: req.body.brand,
        colour: req.body.colour,
        os: req.body.os,
        processor: req.body.rrocessor,
        memory: req.body.memory,
        graphics: req.body.graphics,
        storage: req.body.storage,
        wifi: req.body.wifi,
        power: req.body.power,
        battery: req.body.battery,
        price: req.body.price,
        date: new Date()
    });
    await newItem.save()
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
};

const update = async (req,res) => {
    await item.findOneAndUpdate({_id: req.params.id},req.body).
    then(result => item.findOne({_id: req.params.id}).then(result => res.json(result)))
    .catch(err => res.json(err));
} 


const remove = async (req,res) => {
    await item.findOneAndRemove({_id: req.params.id})
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err).send());
};

const searchByName = async () => {
    await item.findOne({name: req.body.name})
    .then(result => res.status(200).json(result))
    .catch();
};

module.exports = {get, getById, create, update, remove};