const Order = require("../models/order");
const Product = require("../models/product");
const mongoose = require("mongoose");
module.exports.order = async function (req, res) {
  Product.findById(req.body.productId)
    .then((prod) => {
      if (!prod) {
        return res.status(404).json({
          msg: "Product not found",
        });
      } else {
        const order = new Order({
          _id: mongoose.Types.ObjectId(),
          quantity: req.body.quantity,
          product: req.body.productId,
          address: req.body.address,
        });
        return order.save();
      }
    })
    .then((result) => {
      console.log(result);
      return res.status(200).json({
        msg: "Order placed",
        createOrder: {
          _id: result._id,
          product: result.product,
          quantity: result.quantity,
          address: result.address,
        },
        request: {
          type: "GET",
          url: "http://localhost:7000/api/users/orders" + result._id,
        },
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
        msg: "Error while placing order",
      });
    });
  //  })
};

module.exports.allOrder = async function (req, res) {
  Order.find()
    .select("product quantity _id address")
    .exec()
    .then((docs) => {
      return res.status(200).json({
        count: docs.length,
        orders: docs.map((doc) => {
          return {
            _id: doc._id,
            product: doc.product,
            quantity: doc.quantity,
            address: doc.address,
            request: {
              type: "GET",
              url: "http://localhost:7000/api/users/orders" + doc._id,
            },
          };
        }),
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
        msg: "Error while placing order",
      });
    });
};
module.exports.particularOrder = async function (req, res) {
  Order.findById(req.params.orderId)
    .exec()
    .then((order) => {
      return res.status(200).json({
        order,
        request: {
          type: "GET",
          url: "http://localhost:7000/api/users/orders",
        },
        msg: "Order fetched",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
        msg: "Error in fetching order",
      });
    });
};
