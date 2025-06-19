const express = require('express');
const router = express.Router();
const aiService = require('../services/aiService');

// Endpoint for analyzing user input
router.post('/analyze', async (req, res) => {
    try {
        const userInput = req.body.input;
        const analysisResult = await aiService.analyzeInput(userInput);
        res.status(200).json({ result: analysisResult });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while analyzing input.' });
    }
});

// Endpoint for generating responses based on user input
router.post('/respond', async (req, res) => {
    try {
        const userInput = req.body.input;
        const response = await aiService.generateResponse(userInput);
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while generating response.' });
    }
});

module.exports = router;