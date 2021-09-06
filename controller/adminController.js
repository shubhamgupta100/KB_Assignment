const mongoose = require("mongoose");
const Product = require("../models/product");
module.exports.products = async function (req, res) {
  Product.find({ productName: req.body.productName }, function (err, product) {
    if (err) {
      res.status(500).json({
        error: err,
      });
    }
    // console.log(product);
    if (product == "") {
      const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        productName: req.body.productName,
        categoryName: req.body.categoryName,
      });
      product
        .save()
        .then((product) => {
          console.log(product);
          res.status(200).json({
            product,
            msg: "Product Added",
          });
        })
        .catch((err) => {
          console.log("error : ", err);
          return res.status(500).json({
            error: err,
          });
        });
    } else {
      return res.status(200).json({
        product,
        msg: "Already a product",
      });
    }
  });
};

module.exports.productList = async function (req, res) {
  Product.find({}, (err, products) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    } else {
      console.log(products);
      return res.status(200).json({
        products,
        msg: "Task done",
      });
    }
  });
};
