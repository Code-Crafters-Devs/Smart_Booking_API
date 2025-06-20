export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGOUT = 'LOGOUT';

export const BOOKING_REQUEST = 'BOOKING_REQUEST';
export const BOOKING_SUCCESS = 'BOOKING_SUCCESS';
export const BOOKING_FAILURE = 'BOOKING_FAILURE';

export const fetchLogin = (credentials) => {
    return {
        type: LOGIN_REQUEST,
        payload: credentials,
    };
};

export const fetchRegister = (userData) => {
    return {
        type: REGISTER_REQUEST,
        payload: userData,
    };
};

export const fetchLogout = () => {
    return {
        type: LOGOUT,
    };
};

export const fetchBooking = (bookingData) => {
    return {
        type: BOOKING_REQUEST,
        payload: bookingData,
    };
};