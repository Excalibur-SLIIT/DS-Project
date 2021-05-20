const router = require("express").Router();
const controller = require("../controllers/checkout.controller");

router.post("/email",controller.mail);

module.exports = router;