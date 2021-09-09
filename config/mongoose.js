const mongoose = require("mongoose");

// s
mongoose.connect("mongodb://localhost/KB_assignment");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error on connecting databse"));
db.once("open", function () {
  console.log("Database Connected Successfully!");
});
module.exports = db;
