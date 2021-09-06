const Order = require("../models/order");
const jwt = require("jsonwebtoken");
module.exports.order = async function (req, res) {
  const usertoken = req.headers.authorization;
  const token = usertoken.split(" ");
  const decoded = jwt.verify(token[1], process.env.JWT_KEY);
  const { userId } = decoded;
  const order = new Order({
    customerId: userId,
    address: req.body.address,
  });
  order
    .save()
    .then((order) => {
      console.log(order);
      return res.status(200).json({
        order,
        msg: "Order placed",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
        msg: "Error while placing order",
      });
    });
};
