'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ShakeReviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reviewId: {
        type: Sequelize.INTEGER,
        allowNull:false 
      },
      shakeId: {
        type: Sequelize.INTEGER,
        allowNull:false 

      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
      },
      {
      uniqueKeys: {
        actions_unique: {
            fields: ['reviewId', 'shakeId']
        }
    }
  });
},
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('ShakeReview');
}
};