const express = require('express');
const { getAllQuotes, getOneQuote } = require('../controllers/quoteControllers');

const router = express.Router();

// Get all quotes
router.get('/', getAllQuotes);

// Get a single quote
router.get('/:id', getOneQuote);

module.exports = router