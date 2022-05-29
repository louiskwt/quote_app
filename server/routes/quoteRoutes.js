const express = require('express');
const { getAllQuotes, getSingleQuote, createQuote, updateQuote, deleteQuote } = require('../controllers/quoteControllers');

const router = express.Router();

// Get quote
router.get('/', getAllQuotes);

// Get single quote
router.get('/:id', getSingleQuote);

// Create Quote
router.post('/', createQuote);

// Update Route
router.put('/:id', updateQuote);

// delete Quote
router.delete('/:id', deleteQuote);


module.exports = router