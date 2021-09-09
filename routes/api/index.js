const express = require("express");
const router = express.Router();
const authController = require("../../controller/authController");
const adminController = require("../../controller/adminController");
const orderController = require("../../controller/orderController");
const cartController = require("../../controller/cartController");
// User auth
router.post("/users/signup", authController.signup);
router.post("/users/signin", authController.signin);

// User placing order
router.post("/users/order", orderController.order);
router.get("/users/orders", orderController.allOrder);
router.get("/users/orders/:orderId", orderController.particularOrder);

// Admin
router.post("/admin/addProduct", adminController.products);
router.get("/admin/productList", adminController.productList);

//cart
router.post("/users/addCart", cartController.addCart);
router.get("/users/showCarts", cartController.showCart);

module.exports = router;
