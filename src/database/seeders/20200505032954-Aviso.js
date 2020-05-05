'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.bulkInsert('Aviso',
  
 [
  {
    Aviso:'Confirme sua presença na confraternização que acontecerá no dia xx/xx/xxxx no local N. Para confirmar clique no link abaixo: Link',
    CdUsuario:'1',
    IsAtivo:true,
    createdAt:new Date(),
    updatedAt:new Date()

  },


],{} ),

  down: (queryInterface,) =>  queryInterface.bulkDelete('Aviso',null,{}),

   /*
    Estrutura de banco, Migrations e Seeders by Tery
    */

};
