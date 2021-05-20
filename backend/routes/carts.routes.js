const router = require("express").Router();
const controller = require("../controllers/carts.controller");

router.route("/").get(controller.get);

router.route("/:id").get(controller.getById);

router.route("/").post(controller.create);

router.route("/:id").put(controller.update);

router.route("/:id").delete(controller.remove);

module.exports = router;
