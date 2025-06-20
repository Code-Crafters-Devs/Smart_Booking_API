import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [bookings, setBookings] = useState([]);

    const addBooking = (booking) => {
        setBookings((prevBookings) => [...prevBookings, booking]);
    };

    const removeBooking = (bookingId) => {
        setBookings((prevBookings) => prevBookings.filter(booking => booking.id !== bookingId));
    };

    return (
        <BookingContext.Provider value={{ bookings, addBooking, removeBooking }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBookingContext = () => {
    return useContext(BookingContext);
};