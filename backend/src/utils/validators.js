module.exports = {
    validateEmail: (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },

    validatePassword: (password) => {
        const minLength = 6;
        return password.length >= minLength;
    },

    validateUsername: (username) => {
        const regex = /^[a-zA-Z0-9_]{3,30}$/;
        return regex.test(username);
    },

    validateBookingDates: (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        return start < end;
    },

    validateRoomType: (roomType) => {
        const validRoomTypes = ['single', 'double', 'suite', 'deluxe'];
        return validRoomTypes.includes(roomType);
    },

    validateReview: (review) => {
        return review.length > 0 && review.length <= 500;
    }
};