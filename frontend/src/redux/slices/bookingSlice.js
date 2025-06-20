import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookings: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchBookingsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchBookingsSuccess(state, action) {
      state.loading = false;
      state.bookings = action.payload;
    },
    fetchBookingsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addBooking(state, action) {
      state.bookings.push(action.payload);
    },
    removeBooking(state, action) {
      state.bookings = state.bookings.filter(booking => booking.id !== action.payload);
    },
  },
});

export const {
  fetchBookingsStart,
  fetchBookingsSuccess,
  fetchBookingsFailure,
  addBooking,
  removeBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;