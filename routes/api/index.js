const express = require("express");
const router = express.Router();
const homeController = require("../../controller/homeController");

router.get("/users", homeController.home);

module.exports = router;
