import React from 'react';
import UserManagement from '../components/admin/UserManagement';
import Reports from '../components/admin/Reports';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const GuestHome = () => {
    return (
        <div>
            <Header />
            <main>
                <h1 className="text-2xl font-bold">Guest Dashboard</h1>
                <UserManagement />
                <Reports />
            </main>
            <Footer />
        </div>
    );
};

export default GuestHome;