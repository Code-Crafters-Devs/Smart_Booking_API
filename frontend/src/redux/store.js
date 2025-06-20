import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import bookingReducer from './slices/bookingSlice';
import providerReducer from './slices/providerSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer,
    provider: providerReducer,
  },
});

export default store;