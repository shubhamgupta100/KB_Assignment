const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
module.exports.signup = async function (req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
    if (!user) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          res.status(500).json({
            error: err,
          });
        } else {
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            phone: req.body.phone,
            password: hash,
          });
          user
            .save()
            .then((result) => {
              res.status(201).json({
                user,
                message: "User Created",
              });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json({
                error: err,
              });
            });
          console.log(user);
        }
      });
    } else {
      console.log(user);
      res.status(200).json({ user, message: "already signed Up" });
    }
  });
};

module.exports.signin = async function (req, res) {
  User.find({ phone: req.body.phone })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        res.status(401).json({
          msg: "Auth failed",
        });
      } else {
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            res.status(401).json({
              msg: "Auth failed",
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                phone: user[0].phone,
                userId: user[0]._id,
              },
              process.env.JWT_KEY,
              {
                expiresIn: "1h",
              }
            );
            console.log("token : ", token);
            return res.status(200).json({
              msg: "Auth successfull",
              token: token,
            });
          }

          res.status(401).json({
            msg: "Auth failed",
          });
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
