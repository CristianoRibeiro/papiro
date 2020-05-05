'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.bulkInsert('Setor',
  
 [
  {
    DsSetor:'Escritório',
    createdAt:new Date(),
    updatedAt:new Date(),
    CodFilial:'1'

  },

  {
    DsSetor:'Desenvolvimento de Software',
    createdAt:new Date(),
    updatedAt:new Date(),
    CodFilial:'1'
  },
  {
    DsSetor:'Diretoria',
    createdAt:new Date(),
    updatedAt:new Date(),
    CodFilial:'2'
  },
  {
    DsSetor:'Atendimento ao Cliente',
    createdAt:new Date(),
    updatedAt:new Date(),
    CodFilial:'2'

  },



],{} ),

  down: (queryInterface,) =>  queryInterface.bulkDelete('Setor',null,{}),

   /*
    Estrutura de banco, Migrations e Seeders by Tery
    */

};
