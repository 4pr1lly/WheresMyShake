// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class ShakeReview extends Model {
    
//     static associate(models) {
//     }
//   };
//   ShakeReview.init({
//     reviewId: DataTypes.INTEGER,
//     shakeId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'ShakeReview',
//   });
//   return ShakeReview;
// };


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