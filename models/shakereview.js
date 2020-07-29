
'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShakeReview = sequelize.define('ShakeReview', {
    reviewId: DataTypes.INTEGER,
    shakeId: DataTypes.INTEGER
  }, {});
  ShakeReview.associate = function(models) {
  };
  return ShakeReview;
};