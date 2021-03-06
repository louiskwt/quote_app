require('dotenv').config();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;


verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if(!token) {
        return res.status(403).json({
            message: "unauthorized"
        });
    }
    jwt.verify(token, secret, (err, decoded) => {
        if(err) {
            return res.status(401).json({
                message: "unauthorized"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

const authJwt = {
    verifyToken
}

module.exports = authJwt;