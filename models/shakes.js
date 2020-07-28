// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Shakes extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Shakes.init({
//     working: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Shakes',
//   });
//   return Shakes;
// };



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