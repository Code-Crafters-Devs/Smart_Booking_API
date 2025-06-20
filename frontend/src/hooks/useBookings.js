import { useState, useEffect } from 'react';
import { fetchBookings, createBooking, deleteBooking } from '../services/booking';

const useBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadBookings = async () => {
            try {
                const data = await fetchBookings();
                setBookings(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadBookings();
    }, []);

    const addBooking = async (bookingData) => {
        try {
            const newBooking = await createBooking(bookingData);
            setBookings((prevBookings) => [...prevBookings, newBooking]);
        } catch (err) {
            setError(err);
        }
    };

    const removeBooking = async (bookingId) => {
        try {
            await deleteBooking(bookingId);
            setBookings((prevBookings) => prevBookings.filter(booking => booking.id !== bookingId));
        } catch (err) {
            setError(err);
        }
    };

    return { bookings, loading, error, addBooking, removeBooking };
};

export default useBookings;