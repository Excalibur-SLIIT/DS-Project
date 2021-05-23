const multer = require('multer');
const router = require("express").Router();
const path = require("path");

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './public/item-image');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "-" + Date.now());
  }
});

const upload = multer({storage: storage});

const create = (req,res) => {
    res.send(req.file);
};


module.exports = { create };