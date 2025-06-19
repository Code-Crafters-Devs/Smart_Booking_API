const Provider = require('../models/Provider');

// Create a new provider
exports.createProvider = async (req, res) => {
    try {
        const providerData = req.body;
        const newProvider = await Provider.create(providerData);
        res.status(201).json(newProvider);
    } catch (error) {
        res.status(500).json({ message: 'Error creating provider', error });
    }
};

// Get all providers
exports.getAllProviders = async (req, res) => {
    try {
        const providers = await Provider.find();
        res.status(200).json(providers);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving providers', error });
    }
};

// Get a provider by ID
exports.getProviderById = async (req, res) => {
    try {
        const provider = await Provider.findById(req.params.id);
        if (!provider) {
            return res.status(404).json({ message: 'Provider not found' });
        }
        res.status(200).json(provider);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving provider', error });
    }
};

// Update a provider by ID
exports.updateProvider = async (req, res) => {
    try {
        const provider = await Provider.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!provider) {
            return res.status(404).json({ message: 'Provider not found' });
        }
        res.status(200).json(provider);
    } catch (error) {
        res.status(500).json({ message: 'Error updating provider', error });
    }
};

// Delete a provider by ID
exports.deleteProvider = async (req, res) => {
    try {
        const provider = await Provider.findByIdAndDelete(req.params.id);
        if (!provider) {
            return res.status(404).json({ message: 'Provider not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting provider', error });
    }
};