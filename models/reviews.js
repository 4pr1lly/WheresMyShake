// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Reviews extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Reviews.init({
//     IceAvailable: DataTypes.BOOLEAN,
//     location: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Reviews',
//   });
//   return Reviews;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    IceAvailable: DataTypes.BOOLEAN,
    location: DataTypes.STRING,
    userId: DataTypes.INTEGER
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