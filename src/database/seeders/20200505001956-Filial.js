'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.bulkInsert('Filial',
  
 [
  {
    DsFilial:'Brasília',
    createdAt:new Date(),
    updatedAt:new Date()

  },

  {
    DsFilial:'Goiânia',
    createdAt:new Date(),
    updatedAt:new Date()
  }

],{} ),

  down: (queryInterface,) =>  queryInterface.bulkDelete('Filial',null,{}),

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

};
