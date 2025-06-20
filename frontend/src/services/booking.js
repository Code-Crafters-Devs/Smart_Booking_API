import api from './api';

export const createBooking = async (bookingData) => {
    try {
        const response = await api.post('/bookings', bookingData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating booking: ' + error.message);
    }
};

export const getBookings = async () => {
    try {
        const response = await api.get('/bookings');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching bookings: ' + error.message);
    }
};

export const updateBooking = async (bookingId, bookingData) => {
    try {
        const response = await api.put(`/bookings/${bookingId}`, bookingData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating booking: ' + error.message);
    }
};

export const deleteBooking = async (bookingId) => {
    try {
        await api.delete(`/bookings/${bookingId}`);
    } catch (error) {
        throw new Error('Error deleting booking: ' + error.message);
    }
};