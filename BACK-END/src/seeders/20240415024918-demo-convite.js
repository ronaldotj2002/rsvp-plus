'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('convites', [
        {
          codigo: '777777',
          usado: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: '555555',
          usado: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: '444444',
          usado: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: '333333',
          usado: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: '222222',
          usado: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: '111111',
          usado: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('convites', null, {});
     
  }
};
