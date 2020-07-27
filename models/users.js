'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    users.hasMany(models.Review, {foreignKey: 'userId'} )
    
  };
  return users;
}; 