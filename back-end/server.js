const express = require('express');
require('dotenv').config();
const models = require('./models'); // <-- use index.js loader
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Initialize models
app.set('models', models);

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Start server
if (process.env.NODE_ENV !== 'test') {
  models.User.sequelize.sync()
    .then(() => {
      app.listen(process.env.PORT || 5000, () => {
        console.log(`Server running on port ${process.env.PORT || 5000}`);
      });
    })
    .catch(err => {
      console.error('Database sync failed:', err);
    });
}

module.exports = app;