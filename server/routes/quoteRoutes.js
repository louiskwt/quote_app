const express = require('express');

const { getAllQuotes, getSingleQuote, createQuote, updateQuote, deleteQuote, findClient } = require('../controllers/quoteControllers');
const { authJwt } = require('../middleware');

const router = express.Router();

// Get quote
// Private
router.get('/', [authJwt.verifyToken], getAllQuotes);

// Get single quote
// Private
router.get('/:id', [authJwt.verifyToken], getSingleQuote);

// Create Quote
// Private
router.post('/', [authJwt.verifyToken], createQuote);

// Update Route
// private
router.put('/:id', [authJwt.verifyToken], updateQuote);

// delete Quote
// private
router.delete('/:id', [authJwt.verifyToken], deleteQuote);

// find route
router.get('/find/:query', [authJwt.verifyToken], findClient);


module.exports = router