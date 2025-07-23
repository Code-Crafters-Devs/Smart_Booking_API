module.exports = (sequelize, DataTypes) => {
  const Administrator = sequelize.define('Administrator', {
    department: DataTypes.STRING(50),
    access_level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      validate: {
        min: 1,
        max: 3
      }
    }
  }, {
    underscored: true
  });

  Administrator.associate = (models) => {
    Administrator.belongsTo(models.User, { 
      foreignKey: 'user_id',
      as: 'user'
    });
  };

  return Administrator;
};