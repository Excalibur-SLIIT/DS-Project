const router = require("express").Router();
const controller = require("../controllers/carts.controller");
const auth = require("../middleware/auth");

router.route("/").get(controller.get);

router.route("/:id").get(controller.getById);

router.route("/auth").post(auth, controller.getByBuyerId);

router.route("/").post(auth, controller.create);

router.route("/:id").put(controller.update);

router.route("/:id").delete(controller.remove);

module.exports = router;
