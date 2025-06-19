const axios = require('axios');

const HOTELBEDS_API_URL = 'https://api.hotelbeds.com/hotel-api/1.0/';
const API_KEY = process.env.HOTELBEDS_API_KEY; // Ensure to set this in your environment variables
const API_SECRET = process.env.HOTELBEDS_API_SECRET; // Ensure to set this in your environment variables

const hotelbedsService = {
    async searchHotels(params) {
        try {
            const response = await axios.get(`${HOTELBEDS_API_URL}hotels`, {
                headers: {
                    'Api-Key': API_KEY,
                    'X-Security-Token': API_SECRET,
                },
                params,
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error searching hotels: ${error.message}`);
        }
    },

    async getHotelDetails(hotelId) {
        try {
            const response = await axios.get(`${HOTELBEDS_API_URL}hotels/${hotelId}`, {
                headers: {
                    'Api-Key': API_KEY,
                    'X-Security-Token': API_SECRET,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching hotel details: ${error.message}`);
        }
    },

    async bookHotel(bookingData) {
        try {
            const response = await axios.post(`${HOTELBEDS_API_URL}bookings`, bookingData, {
                headers: {
                    'Api-Key': API_KEY,
                    'X-Security-Token': API_SECRET,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error booking hotel: ${error.message}`);
        }
    },
};

module.exports = hotelbedsService;