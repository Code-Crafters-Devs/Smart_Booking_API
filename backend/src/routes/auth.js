const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateLogin, validateRegistration } = require('../middleware/validation');

// Login route
router.post('/login', validateLogin, authController.login);

// Registration route
router.post('/register', validateRegistration, authController.register);

module.exports = router;