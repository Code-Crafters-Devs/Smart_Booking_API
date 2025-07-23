import React from 'react';
import Booking from './pages/Booking.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Booking />
    </BrowserRouter>
  );
}

export default App;
