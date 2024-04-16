'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
 
      await queryInterface.bulkInsert('convidados', [
        {
          nome: 'Solange Estudante',
          acompanhanteAdulto: 2,
          acompanhanteCrianca: 1,
          codconvite: "777777",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Igor Estudante',
          acompanhanteAdulto: 1,
          acompanhanteCrianca: 2,
          codconvite: "555555",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Aline Estudante',
          acompanhanteAdulto: 1,
          acompanhanteCrianca: 1,
          codconvite: "444444",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Fernando Estudante',
          acompanhanteAdulto: 2,
          acompanhanteCrianca: 1,
          codconvite: "333333",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Ricardo Docente',
          acompanhanteAdulto: 2,
          acompanhanteCrianca: 2,
          codconvite: "222222",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Dine Docente',
          acompanhanteAdulto: 2,
          acompanhanteCrianca: 3,
          codconvite: "111111",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
   
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('convites', null, {});
     
  }
};
