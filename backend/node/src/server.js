const app = require('./app');
const { sequelize } = require('./config/database');
const PORT = process.env.PORT || 3000;

// Test database connection and sync models
sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
    return sequelize.sync({ alter: true }); // Use { force: true } to drop and recreate tables
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  });