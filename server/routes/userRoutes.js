const express = require('express');
const { signIn, signUp } = require('../controllers/userControllers');
const { verifySignUp } = require('../middleware'); // middleware for validation

const router = express.Router();

router.post('/signup', [verifySignUp.checkDuplicateUsernameOrEmail], signUp);

router.post('/signin', signIn);

module.exports = router;
