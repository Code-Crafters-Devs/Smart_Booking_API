import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Booking from './pages/Booking';
import Provider from './pages/Provider';
import Admin from './pages/Admin';
import LandingPage from './pages/LandingPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App = () => {
    return (
        <AuthProvider>
            <BookingProvider>
                <Router>
                    <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route render={() => (
                            <>
                                <Header />
                                <Switch>
                                    <Route path="/login" component={Login} />
                                    <Route path="/register" component={Register} />
                                    <Route path="/profile" component={Profile} />
                                    <Route path="/booking" component={Booking} />
                                    <Route path="/provider" component={Provider} />
                                    <Route path="/admin" component={Admin} />
                                    <Route path="/home" component={Home} />
                                </Switch>
                                <Footer />
                            </>
                        )} />
                    </Switch>
                </Router>
            </BookingProvider>
        </AuthProvider>
    );
};

export default App;