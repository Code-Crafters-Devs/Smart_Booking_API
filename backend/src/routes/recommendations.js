const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');

// Route to get recommendations
router.get('/', recommendationController.getRecommendations);

// Route to create a new recommendation
router.post('/', recommendationController.createRecommendation);

// Route to update an existing recommendation
router.put('/:id', recommendationController.updateRecommendation);

// Route to delete a recommendation
router.delete('/:id', recommendationController.deleteRecommendation);

module.exports = router;