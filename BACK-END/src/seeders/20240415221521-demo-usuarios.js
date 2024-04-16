'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('usuarios', [
        {
          nome: 'Justino',
          email: 'justino@gmail.com',
          senha: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Ronaldo',
          email: 'ronaldos@gmail.com',
          senha: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Teixeira',
          email: 'teixeiras@gmail.com',
          senha: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
