const router = require("express").Router();
const controller = require("../controllers/seller.controller");
const authSeller = require("../middleware/auth");

router.route("/").get(controller.get);

router.route("/:id").get(controller.getById);

router.route("/").post(controller.create);

router.route("/:id").put(controller.update);

router.route("/:id").delete(controller.remove);

router.route("/login").post(controller.login);

router.route("/auth").post(authSeller, controller.getSellerDetails);

module.exports = router;
