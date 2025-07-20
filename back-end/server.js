const express = require('express');
require('dotenv').config();
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const initUser = require('./models/User');

const app = express();
app.use(express.json());

// Initialize models
const User = initUser(sequelize);
app.set('models', { User });

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Start server
if (process.env.NODE_ENV !== 'test') {
  sequelize.sync()
    .then(() => {
      app.listen(process.env.PORT || 3000, () => {
        console.log(`Server running on port ${process.env.PORT || 3000}`);
      });
    })
    .catch(err => {
      console.error('Database sync failed:', err);
    });
}

module.exports = app;