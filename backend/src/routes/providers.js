const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');
const { auth } = require('../middleware/auth');

// Route to create a new provider
router.post('/', auth, providerController.createProvider);

// Route to get all providers
router.get('/', providerController.getAllProviders);

// Route to get a provider by ID
router.get('/:id', providerController.getProviderById);

// Route to update a provider by ID
router.put('/:id', auth, providerController.updateProvider);

// Route to delete a provider by ID
router.delete('/:id', auth, providerController.deleteProvider);

module.exports = router;