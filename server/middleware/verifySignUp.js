const db = require('../models');

const User = db.User;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username check
    User.findOne({
        where: {
            name: req.body.name
        }
    }).then(user => {
        if(user) {
            res.status(400).send({
                message: 'Failed! Username is already in use'
            });
            return;
        }
        // Email
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user) {
                res.status(400).send({
                    message: 'Failed! Email is already in use'
                });
                return;
            }
            next();
        })
    }).catch(error => {
        res.status(400).json({
            message: error.message
        })
    }) 
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail
}

module.exports = verifySignUp;