require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());

// Example route to confirm server is working
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Test DB connection and start server
(async () => {
  try {
    await sequelize.authenticate(); // Test connection
    console.log('✅ Database connection established successfully.');

    await sequelize.sync(); // Sync models (optional here if not ready)
    console.log('✅ All models synced.');

    app.listen(3000, () => {
      console.log('🚀 Server is running on http://localhost:3000');
    });
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    process.exit(1); // Exit if DB connection fails
  }
})();
