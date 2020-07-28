'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    static associate(models) {
      // define association here
    }
  };
  Reviews.init({
    ShakeWorking: DataTypes.STRING,
    IceWorking: DataTypes.BOOLEAN,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};