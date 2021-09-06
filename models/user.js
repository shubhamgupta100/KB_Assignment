const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
});
module.exports = mongoose.model("User", userSchema);
