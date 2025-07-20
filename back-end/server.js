const express = require('express');
require('dotenv').config();
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

// Start the server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
  sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
  });
}

module.exports = app; // Export for testing
