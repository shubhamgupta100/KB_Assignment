const Product = require("../models/product");
const mongoose = require("mongoose");
const Cart = require("../models/cart");
module.exports.addCart = async function (req, res) {
  Product.findById(req.body.productId)
    .then((prod) => {
      if (!prod) {
        return res.status(404).json({
          msg: "Product not found",
        });
      } else {
        const cart = new Cart({
          _id: mongoose.Types.ObjectId(),
          product: req.body.productId,
          quantity: req.body.quantity,
        });
        return cart.save();
      }
    })
    .then((result) => {
      console.log(result);
      return res.status(200).json({
        msg: "Item added to cart",
        createCart: {
          _id: result._id,
          product: result.product,
          quantity: result.quantity,
        },
        request: {
          type: "GET",
          url: "http://localhost:7000/api/users/showCarts",
        },
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
        msg: "Error while adding cart",
      });
    });
};

module.exports.showCart = async function (res, res) {
  Cart.find()
    .select("product quantity _id ")
    .exec()
    .then((docs) => {
      return res.status(200).json({
        count: docs.length,
        carts: docs.map((doc) => {
          return {
            _id: doc._id,
            product: doc.product,
            quantity: doc.quantity,
          };
        }),
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
        msg: "Error while fetching cart",
      });
    });
};
