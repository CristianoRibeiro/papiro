'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.bulkInsert('TipoUsuario',
  
 [
  {
    DsTipoUsuario:'Administrador',
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    DsTipoUsuario:'Diretor',
    createdAt:new Date(),
    updatedAt:new Date()
  },

  {
    DsTipoUsuario:'Gerência',
    createdAt:new Date(),
    updatedAt:new Date()
  },

  {
    DsTipoUsuario:'Default',
    createdAt:new Date(),
    updatedAt:new Date()
  },

],{} ),

  down: (queryInterface,) =>  queryInterface.bulkDelete('TipoUsuario',null,{}),

   /*
    Estrutura de banco, Migrations e Seeders by Tery
    */

};
