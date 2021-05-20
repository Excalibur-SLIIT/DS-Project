const router = require("express").Router();
const controller = require("../controllers/seller.controller");

router.route("/").get(controller.get);

router.route("/:id").get(controller.getById);

router.route("/").post(controller.create);

router.route("/:id").put(controller.update);

router.route("/:id").delete(controller.remove);

router.route("/login").post(controller.login);

module.exports = router;
