const express = require('express');
const { getAllQuotes, getSingleQuote, createQuote } = require('../controllers/quoteControllers');

const router = express.Router();

// Get quote
router.get('/', getAllQuotes);

// Get single quote
router.get('/:id', getSingleQuote);

// Create Quote
router.post('/', createQuote);


module.exports = router