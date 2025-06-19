const express = require('express');
const router = express.Router();
const nlpController = require('../controllers/nlpController');

// Define routes for natural language processing tasks
router.post('/analyze', nlpController.analyzeInput);
router.post('/generate-response', nlpController.generateResponse);

module.exports = router;