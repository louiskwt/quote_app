require("dotenv").config();
const db = require("../models");
const secret = process.env.JWT_SECRET;
const User = db.User;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signUp = (req, res) => {
  // hash the password
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      // Save user to db
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
        .then((user) => {
          res.status(200).json({
            message: `${user.name} has been registered as a user`,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

const signIn = (req, res) => {
  User.findOne({
    where: {
      name: req.body.name.toLowerCase(),
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "沒有這個用戶",
        });
      }
      const pwIsValid = bcrypt
        .compare(req.body.password, user.password)
        .then((result) => result);

      if (!pwIsValid) {
        return res.status(401).json({
          accessToken: null,
          message: "密碼錯誤",
        });
      }
      const token = jwt.sign({ id: user.id }, secret, {
        expiresIn: 86400, // 24hrs
      });
      res.status(200).json({
        id: user.id,
        name: user.name,
        token: token,
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

module.exports = {
  signIn,
  signUp,
};
