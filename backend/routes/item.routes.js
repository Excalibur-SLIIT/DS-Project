const router = require("express").Router();
const controller = require("../controllers/item.controller");
const authSeller =  require("../middleware/auth");

router.route("/").get(controller.get);

router.route("/search/:id").get(controller.searchByName);

router.route("/seller/:id").get(controller.getItemsBySellerId);

router.route("/:id").get(controller.getById);

router.route("/",authSeller).post(authSeller,controller.create);

router.route("/:id").put(controller.update);

router.route("/:id").delete(controller.remove);

module.exports = router;
