const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const models = {};
models.User = require('./User')(sequelize, Sequelize.DataTypes);
models.Guest = require('./Guest')(sequelize, Sequelize.DataTypes);
models.Role = require('./Role')(sequelize, Sequelize.DataTypes);
models.Administrator = require('./Administrator')(sequelize, Sequelize.DataTypes);
models.Provider = require('./Provider')(sequelize, Sequelize.DataTypes);

// Set up associations
Object.values(models).forEach(model => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

module.exports = models;
