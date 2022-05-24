const express = require('express');
const { getQuotes } = require('../controllers/quoteControllers');

const router = express.Router();

// Get quote(s)
router.get('/:id', getQuotes);


module.exports = router