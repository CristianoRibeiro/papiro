'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.bulkInsert('Recompensa',
  
 [
  {
    DsRecompensa:'*Massagem tailandesa completa*',
    ValorPontuacao:"60",
    createdAt:new Date(),
    updatedAt:new Date()

  },

  {
    DsRecompensa:'Pote de sorvete zéquinhas',
    ValorPontuacao:"30",
    createdAt:new Date(),
    updatedAt:new Date()

  },
  {
    DsRecompensa:'Vale Presente de *R$100*',
    ValorPontuacao:"150",
    createdAt:new Date(),
    updatedAt:new Date()

  },

],{} ),

  down: (queryInterface,) =>  queryInterface.bulkDelete('Recompensa',null,{}),

   /*
    Estrutura de banco, Migrations e Seeders by Tery
    */

};
