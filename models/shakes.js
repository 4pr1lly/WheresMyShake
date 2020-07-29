

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shakes = sequelize.define('Shakes', {
    name: DataTypes.STRING
  }, {});
  Shakes.associate = function(models) {
    Shakes.belongsToMany(models.Reviews, {
      through: 'ShakeReview',
      foreignKey: 'shakeId',
      otherKey: 'reviewsId'
    });
  };
  return Shakes;
};