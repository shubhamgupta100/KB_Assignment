const express = require("express");
const env = require("dotenv").config();
const port = process.env.PORT;
const db = require("./config/mongoose");
const app = express();

app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) {
    console.log(`Error on creating the server : ${err}`);
  }
  console.log(`Server is running on port :${port} `);
});
