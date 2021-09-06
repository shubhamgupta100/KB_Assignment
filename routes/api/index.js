const express = require("express");
const router = express.Router();
const homeController = require("../../controller/homeController");

router.post("/users/signup", homeController.signup);
router.post("/users/signin", homeController.signin);

module.exports = router;
