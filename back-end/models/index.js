const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const models = {};
models.User = require('./User')(sequelize, Sequelize.DataTypes);
models.Guest = require('./Guest')(sequelize, Sequelize.DataTypes);
models.Role = require('./Role')(sequelize, Sequelize.DataTypes);
models.Administrator = require('./Administrator')(sequelize, Sequelize.DataTypes);
// Add associations if needed
module.exports = models;
