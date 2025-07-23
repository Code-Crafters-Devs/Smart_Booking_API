import React from 'react';

const AvailabilityCalendar = () => {
    // Placeholder for availability data
    const availabilityData = [
        { date: '2023-10-01', available: true },
        { date: '2023-10-02', available: false },
        { date: '2023-10-03', available: true },
        // Add more dates as needed
    ];

    return (
        <div className="availability-calendar">
            <h2>Provider Availability</h2>
            <ul>
                {availabilityData.map((item, index) => (
                    <li key={index} className={item.available ? 'available' : 'unavailable'}>
                        {item.date}: {item.available ? 'Available' : 'Unavailable'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AvailabilityCalendar;