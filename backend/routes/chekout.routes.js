const router = require("express").Router();
const controller = require("../controllers/checkout.controller");
const authBuyer =  require("../middleware/auth");

router.post("/", authBuyer, controller.checkout);

module.exports = router;