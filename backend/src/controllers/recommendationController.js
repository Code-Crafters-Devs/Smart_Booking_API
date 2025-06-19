const RecommendationService = require('../services/recommendationService');

// Generate recommendations based on user preferences
exports.getRecommendations = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming user ID is available in the request
        const recommendations = await RecommendationService.generateRecommendations(userId);
        res.status(200).json(recommendations);
    } catch (error) {
        res.status(500).json({ message: 'Error generating recommendations', error: error.message });
    }
};

// Get a specific recommendation by ID
exports.getRecommendationById = async (req, res) => {
    try {
        const { id } = req.params;
        const recommendation = await RecommendationService.getRecommendationById(id);
        if (!recommendation) {
            return res.status(404).json({ message: 'Recommendation not found' });
        }
        res.status(200).json(recommendation);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recommendation', error: error.message });
    }
};

// Create a new recommendation
exports.createRecommendation = async (req, res) => {
    try {
        const newRecommendation = await RecommendationService.createRecommendation(req.body);
        res.status(201).json(newRecommendation);
    } catch (error) {
        res.status(500).json({ message: 'Error creating recommendation', error: error.message });
    }
};

// Update an existing recommendation
exports.updateRecommendation = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRecommendation = await RecommendationService.updateRecommendation(id, req.body);
        if (!updatedRecommendation) {
            return res.status(404).json({ message: 'Recommendation not found' });
        }
        res.status(200).json(updatedRecommendation);
    } catch (error) {
        res.status(500).json({ message: 'Error updating recommendation', error: error.message });
    }
};

// Delete a recommendation
exports.deleteRecommendation = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await RecommendationService.deleteRecommendation(id);
        if (!result) {
            return res.status(404).json({ message: 'Recommendation not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting recommendation', error: error.message });
    }
};