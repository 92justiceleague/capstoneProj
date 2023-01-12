let express = require("express");
let router = new express.Router();
let controller = require("../controllers/authController");

router.post("/register", conroller.register)

router.post("/login", controller.login);

module.exports = router;

