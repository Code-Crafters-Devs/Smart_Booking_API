const Booking = require('../models/Booking');
const User = require('../models/User');
const Room = require('../models/Room');

// Create a new booking
const createBooking = async (userId, roomId, bookingDetails) => {
    try {
        const user = await User.findById(userId);
        const room = await Room.findById(roomId);

        if (!user || !room) {
            throw new Error('User or Room not found');
        }

        const booking = new Booking({
            user: userId,
            room: roomId,
            ...bookingDetails,
        });

        await booking.save();
        return booking;
    } catch (error) {
        throw new Error(`Error creating booking: ${error.message}`);
    }
};

// Update an existing booking
const updateBooking = async (bookingId, updateDetails) => {
    try {
        const booking = await Booking.findByIdAndUpdate(bookingId, updateDetails, { new: true });

        if (!booking) {
            throw new Error('Booking not found');
        }

        return booking;
    } catch (error) {
        throw new Error(`Error updating booking: ${error.message}`);
    }
};

// Retrieve a booking by ID
const getBookingById = async (bookingId) => {
    try {
        const booking = await Booking.findById(bookingId).populate('user room');

        if (!booking) {
            throw new Error('Booking not found');
        }

        return booking;
    } catch (error) {
        throw new Error(`Error retrieving booking: ${error.message}`);
    }
};

// Delete a booking
const deleteBooking = async (bookingId) => {
    try {
        const booking = await Booking.findByIdAndDelete(bookingId);

        if (!booking) {
            throw new Error('Booking not found');
        }

        return booking;
    } catch (error) {
        throw new Error(`Error deleting booking: ${error.message}`);
    }
};

module.exports = {
    createBooking,
    updateBooking,
    getBookingById,
    deleteBooking,
};