import React from 'react';

const BookingList = ({ bookings }) => {
    return (
        <div className="booking-list">
            <h2 className="text-xl font-bold">Your Bookings</h2>
            {bookings.length === 0 ? (
                <p>No bookings available.</p>
            ) : (
                <ul>
                    {bookings.map((booking) => (
                        <li key={booking.id} className="border-b py-2">
                            <h3 className="font-semibold">{booking.title}</h3>
                            <p>{booking.date}</p>
                            <p>{booking.time}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookingList;