const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser } = require('../middleware/validation');
const authMiddleware = require('../middleware/auth');

// Route to get user profile
router.get('/profile', authMiddleware, userController.getUserProfile);

// Route to update user profile
router.put('/profile', authMiddleware, validateUser, userController.updateUserProfile);

// Route to get all users (admin only)
router.get('/', authMiddleware, userController.getAllUsers);

// Route to delete a user (admin only)
router.delete('/:id', authMiddleware, userController.deleteUser);

module.exports = router;