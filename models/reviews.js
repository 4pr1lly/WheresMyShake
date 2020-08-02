

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    IceAvailable: DataTypes.BOOLEAN,
    location: DataTypes.STRING,
    userId: DataTypes.STRING,
    name:DataTypes.STRING,
    username:DataTypes.STRING


    }, {});
    Reviews.associate = function(models) {
      Reviews.belongsTo(models.User, {foreignKey: 'userId'})
      Reviews.belongsToMany(models.Shakes, {
        through: 'ShakeReview',
        foreignKey: 'reviewId',
        otherKey: 'shakeId'
          });
        };
        return Reviews;
      };