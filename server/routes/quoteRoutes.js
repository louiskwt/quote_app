const express = require('express');
const { getAllQuotes, getSingleQuote, createQuote, deleteQuote } = require('../controllers/quoteControllers');

const router = express.Router();

// Get quote
router.get('/', getAllQuotes);

// Get single quote
router.get('/:id', getSingleQuote);

// Create Quote
router.post('/', createQuote);

// delete Quote
router.delete('/:id', deleteQuote);


module.exports = router