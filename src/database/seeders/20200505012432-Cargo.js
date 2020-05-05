'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.bulkInsert('Cargo',
  
 [
  {
    DsCargo:'Atendente',
    createdAt:new Date(),
    updatedAt:new Date()

  },

  {
    DsCargo:'Escriturario',
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    DsCargo:'Analista Desenvolvedor',
    createdAt:new Date(),
    updatedAt:new Date()

  },
  {
    DsCargo:'Analista de Requisitos',
    createdAt:new Date(),
    updatedAt:new Date()

  },
  {
    DsCargo:'Analista de Testes',
    createdAt:new Date(),
    updatedAt:new Date()

  },
  {
    DsCargo:'Arquiteto de Software',
    createdAt:new Date(),
    updatedAt:new Date()

  },
  {
    DsCargo:'Gerente de Projetos',
    createdAt:new Date(),
    updatedAt:new Date()

  },
  {
    DsCargo:'Diretor',
    createdAt:new Date(),
    updatedAt:new Date()

  },
  {
    DsCargo:'Helpdesk',
    createdAt:new Date(),
    updatedAt:new Date()

  },

],{} ),

  down: (queryInterface,) =>  queryInterface.bulkDelete('Cargo',null,{}),

   /*
    Estrutura de banco, Migrations e Seeders by Tery
    */

};
