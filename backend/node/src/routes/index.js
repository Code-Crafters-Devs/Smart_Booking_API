const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const bookingController = require('../controllers/booking.controller');
const { authenticate, authorize } = require('../middlewares/auth.middleware');

// Authentication routes
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// Booking routes
router.post('/bookings', authenticate, bookingController.createBooking);
router.get('/bookings', authenticate, bookingController.getUserBookings);

// Protected admin routes
// router.get('/admin/bookings', authenticate, authorize(['admin']), adminController.getAllBookings);

module.exports = router;