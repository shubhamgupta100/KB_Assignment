const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productName: { type: String, required: true },
  categoryName: { type: String, required: true },
});
module.exports = mongoose.model("Product", productSchema);
