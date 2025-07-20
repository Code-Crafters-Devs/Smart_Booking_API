const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create a new connection (don't use the one from database.js for testing)
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: console.log // Enable logging to see what's happening
});

async function testConnection() {
  try {
    console.log('Attempting to connect to database...');
    await sequelize.authenticate();
    console.log('Connection successful!');
    
    console.log('Testing model synchronization...');
    await sequelize.sync({ force: true });
    console.log('Sync completed!');
    
    await sequelize.close();
    process.exit(0);
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

testConnection();