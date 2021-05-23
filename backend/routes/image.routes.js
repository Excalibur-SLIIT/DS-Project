const router = require("express").Router();
const controller = require("../controllers/image.controller");
const authSeller =  require("../middleware/auth");
const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/item-image');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "-" + Date.now());
    }
});

const upload = multer({ storage: storage });

router.route("/").post(upload.single("image"),controller.create);

module.exports = router;