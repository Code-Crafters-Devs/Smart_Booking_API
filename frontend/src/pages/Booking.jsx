import React from 'react';
import BookingForm from '../components/booking/BookingForm';
import BookingList from '../components/booking/BookingList';

const Booking = () => {
    return (
        <div className="booking-page">
            <h1 className="text-2xl font-bold">Booking Page</h1>
            <BookingForm />
            <BookingList />
        </div>
    );
};

export default Booking;