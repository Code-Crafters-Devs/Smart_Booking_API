const User = require('../models/User');
const authService = require('../services/authService');

// Register a new user
exports.register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ message: 'Error registering user', error });
    }
};

// Login a user
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await authService.login(email, password);
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(401).json({ message: 'Invalid credentials', error });
    }
};

// Logout a user
exports.logout = (req, res) => {
    // Invalidate the user's session or token here
    res.status(200).json({ message: 'Logout successful' });
};