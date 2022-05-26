const express = require('express');
const { getQuotes, createQuote } = require('../controllers/quoteControllers');

const router = express.Router();

// Get quote(s)
router.get('/:id', getQuotes);

// Create Quote
router.post('/', createQuote);


module.exports = router