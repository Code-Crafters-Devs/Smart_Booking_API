module.exports = (sequelize, DataTypes) => {
  const Provider = sequelize.define('Provider', {
    company_name: DataTypes.STRING(100),
    service_type: DataTypes.STRING(100)
  }, {
    underscored: true
  });

  Provider.associate = (models) => {
    Provider.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
    // Add more associations if needed
  };

  return Provider;
};
