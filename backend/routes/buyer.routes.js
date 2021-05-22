const router = require("express").Router();
const controller = require("../controllers/buyer.controller");
const authBuyer =  require("../middleware/auth");

router.route("/").get(controller.get);

router.route("/:id").get(controller.getById);

router.route("/auth").post(authBuyer,controller.getBuyerDetails);

router.route("/").post(controller.create);

router.route("/:id").put(controller.update);

router.route("/:id").delete(controller.remove);

router.route("/login").post(controller.login);

module.exports = router;
