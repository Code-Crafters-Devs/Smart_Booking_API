import axios from 'axios';

const AMADEUS_API_BASE_URL = 'https://test.api.amadeus.com/v1';
const AMADEUS_API_KEY = process.env.AMADEUS_API_KEY;

const amadeusService = {
    getFlightOffers: async (origin, destination, departureDate) => {
        try {
            const response = await axios.get(`${AMADEUS_API_BASE_URL}/shopping/flight-offers`, {
                params: {
                    origin,
                    destination,
                    departureDate,
                },
                headers: {
                    Authorization: `Bearer ${AMADEUS_API_KEY}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching flight offers: ${error.message}`);
        }
    },

    getHotelOffers: async (cityCode, checkInDate, checkOutDate) => {
        try {
            const response = await axios.get(`${AMADEUS_API_BASE_URL}/shopping/hotel-offers`, {
                params: {
                    cityCode,
                    checkInDate,
                    checkOutDate,
                },
                headers: {
                    Authorization: `Bearer ${AMADEUS_API_KEY}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching hotel offers: ${error.message}`);
        }
    },

    getTravelRecommendations: async (latitude, longitude) => {
        try {
            const response = await axios.get(`${AMADEUS_API_BASE_URL}/travel/recommendations`, {
                params: {
                    latitude,
                    longitude,
                },
                headers: {
                    Authorization: `Bearer ${AMADEUS_API_KEY}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching travel recommendations: ${error.message}`);
        }
    },
};

export default amadeusService;