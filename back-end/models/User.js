module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: { type: DataTypes.STRING(100), allowNull: false },
    last_name: { type: DataTypes.STRING(100), allowNull: false },
    email: { 
      type: DataTypes.STRING(255), 
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password_hash: { type: DataTypes.STRING(255), allowNull: false },
    role_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id'
      }
    }
  }, {
    timestamps: true,
    underscored: true,
    defaultScope: {
      attributes: { exclude: ['password_hash'] }
    }
  });

  User.associate = (models) => {
    User.belongsTo(models.Role, { foreignKey: 'role_id' });
    User.hasOne(models.Provider, { 
      foreignKey: 'user_id',
      as: 'provider'
    });
    User.hasOne(models.Guest, { 
      foreignKey: 'user_id',
      as: 'guest'
    });
    User.hasOne(models.Administrator, { 
      foreignKey: 'user_id',
      as: 'administrator'
    });
  };

  return User;
};