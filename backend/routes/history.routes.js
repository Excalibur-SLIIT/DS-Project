const router = require("express").Router();
const controller = require("../controllers/history.controller");
const authBuyer =  require("../middleware/auth");

router.route("/").get(controller.get);

router.route("/:id").get(controller.getById);

router.route("/").post(authBuyer,controller.getByBuyerId);

router.route("/:id").delete(controller.remove)

module.exports = router;