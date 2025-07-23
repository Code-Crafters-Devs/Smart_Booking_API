module.exports = (sequelize, DataTypes) => {
  const Guest = sequelize.define('Guest', {
    phone: DataTypes.STRING(20),
    loyalty_points: { 
      type: DataTypes.INTEGER,
      defaultValue: 0 
    }
  }, {
    underscored: true
  });

  Guest.associate = (models) => {
    Guest.belongsTo(models.User, { 
      foreignKey: 'user_id',
      as: 'user'
    });
    // Guest.hasMany(models.Booking, {
    //   foreignKey: 'guest_id'
    // });
    // Guest.hasMany(models.Review, {
    //   foreignKey: 'guest_id'
    // });
  };

  return Guest;
};