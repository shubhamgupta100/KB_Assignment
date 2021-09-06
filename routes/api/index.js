const express = require("express");
const router = express.Router();
const authController = require("../../controller/authController");
const adminController = require("../../controller/adminController");
const orderController = require("../../controller/orderController");
// User auth
router.post("/users/signup", authController.signup);
router.post("/users/signin", authController.signin);

// User placing order
router.post("/users/order", orderController.order);
// Admin
router.post("/admin/addProduct", adminController.products);
router.get("/admin/productList", adminController.productList);

module.exports = router;
