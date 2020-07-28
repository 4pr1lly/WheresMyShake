'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
          name:'apple',
          color: 'red',
          readyToEat: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name:'pear',
          color: 'green',
          readyToEat: false,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name:'banana',
          color: 'yellow',
          readyToEat: true,
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Fruits', null, {});
    */
  }
};