'use strict';
	module.exports = {
  	up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shakes', [
      {
        working:'Yes-all flavors are available',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        working:'Yes-except Strawberry is not available',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        working:'Yes- except Chocolate is not available',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        working: 'Yes- except Vanilla is not available',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        working: 'No-Machine is not working',
        createdAt: new Date(),
        updatedAt: new Date()
      } 
    ], {});
  	},

  	down: (queryInterface, Sequelize) => {
    	return queryInterface.bulkDelete('Shakes', null, {});
  	}
	};