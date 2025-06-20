import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to Our Application</h1>
                <p>This is the home page where you can find the latest updates and features.</p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;