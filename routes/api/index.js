const express = require("express");
const router = express.Router();
const authController = require("../../controller/authController");
const adminController = require("../../controller/adminController");

router.post("/users/signup", authController.signup);
router.post("/users/signin", authController.signin);
router.post("/admin/addProduct", adminController.products);
router.get("/admin/productList", adminController.productList);

module.exports = router;
