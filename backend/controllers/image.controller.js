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

router.route("/").post(upload.single("image"),(req,res) => {
    res.send(path.join(__dirname,req.file.path));
});


module.exports = { upload, router };