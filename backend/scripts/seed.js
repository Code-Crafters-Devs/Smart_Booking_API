const mongoose = require('mongoose');
const User = require('../src/models/User');
const Guest = require('../src/models/Guest');
const Provider = require('../src/models/Provider');
const Administrator = require('../src/models/Administrator');
const Room = require('../src/models/Room');
const RoomType = require('../src/models/RoomType');
const Amenity = require('../src/models/Amenity');
const Availability = require('../src/models/Availability');
const Booking = require('../src/models/Booking');
const Payment = require('../src/models/Payment');
const Review = require('../src/models/Review');
const Recommendation = require('../src/models/Recommendation');

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await User.deleteMany({});
        await Guest.deleteMany({});
        await Provider.deleteMany({});
        await Administrator.deleteMany({});
        await Room.deleteMany({});
        await RoomType.deleteMany({});
        await Amenity.deleteMany({});
        await Availability.deleteMany({});
        await Booking.deleteMany({});
        await Payment.deleteMany({});
        await Review.deleteMany({});
        await Recommendation.deleteMany({});

        // Add sample data here
        const users = await User.insertMany([
            { name: 'John Doe', email: 'john@example.com', password: 'password123' },
            { name: 'Jane Smith', email: 'jane@example.com', password: 'password123' },
        ]);

        console.log('Sample users created:', users);

        // Add more sample data for other models as needed

    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();