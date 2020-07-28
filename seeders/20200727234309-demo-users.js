'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name:'Tony Stark',
        username: 'ironman',
        password: 'prettyawesome'
      },
      {
        name:'Clark Kent',
        username: 'superman',
        password: `canfly`
      },
      {
        name:'Bruce Wayne',
        username: 'batman',
        password: 'hasgadgets'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
