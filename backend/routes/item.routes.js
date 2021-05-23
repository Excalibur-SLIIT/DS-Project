const router = require("express").Router();
const controller = require("../controllers/item.controller");
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

router.route("/").get(controller.get);

router.route("/search/:id").get(controller.searchByName);

router.route("/seller/:id").get(controller.getItemsBySellerId);

router.route("/:id").get(controller.getById);

router.route("/").post(authSeller,controller.create);

router.route("/:id").put(controller.update);

router.route("/:id").delete(controller.remove);

module.exports = router;
