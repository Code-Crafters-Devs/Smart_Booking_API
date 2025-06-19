const express = require('express');
const bookingController = require('../controllers/bookingController');
const { auth } = require('../middleware/auth');
const { validateBooking } = require('../middleware/validation');

const router = express.Router();

// Create a new booking
router.post('/', auth, validateBooking, bookingController.createBooking);

// Retrieve all bookings
router.get('/', auth, bookingController.getAllBookings);

// Retrieve a specific booking by ID
router.get('/:id', auth, bookingController.getBookingById);

// Update a booking by ID
router.put('/:id', auth, validateBooking, bookingController.updateBooking);

// Delete a booking by ID
router.delete('/:id', auth, bookingController.deleteBooking);

module.exports = router;