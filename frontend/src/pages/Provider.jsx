import React from 'react';
import AvailabilityCalendar from '../components/provider/AvailabilityCalendar';
import ProviderDashboard from '../components/provider/ProviderDashboard';

const Provider = () => {
    return (
        <div>
            <h1>Provider Page</h1>
            <AvailabilityCalendar />
            <ProviderDashboard />
        </div>
    );
};

export default Provider;