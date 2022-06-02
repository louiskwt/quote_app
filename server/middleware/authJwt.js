require('dotenv').config();
const jwt = require("jsonwebtoken");
const db = require('../models');
const secret = process.env.JWT_SECRET;
const User = db.User;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if(!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }
    jwt.verify(token, secret, (err, decoded) => {
        if(err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

const authJwt = {
    verifyToken,
}

module.exports = authJwt;