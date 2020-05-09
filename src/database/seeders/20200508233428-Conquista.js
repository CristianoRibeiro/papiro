'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.bulkInsert('Conquista',
  
 [
  {
    NoConquista:'Obrigado por participar! Nossa empresa é mais forte com você!',
    DsConquista:'Conseguir 5 Ups em alguma mensagem pela primeira vez.',
    ValorConquista:'5',
    IsAtivo:true

  },
  {
    NoConquista:'Funcionário do mês!',
    DsConquista:'Liderar o ranking de Ups do respectivo mês.',
    ValorConquista:'15',
    IsAtivo:true

  },

  {
    NoConquista:'Obrigado por contribuir!',
    DsConquista:'Completar 6 meses de cadastro no Papiro.',
    ValorConquista:'5',
    IsAtivo:true

  },

  {
    NoConquista:'Amigo, estou aqui!',
    DsConquista:'Dar Up na mensagem de algum colaborador do mesmo setor.',
    ValorConquista:'1',
    IsAtivo:true

  },

],{} ),

  down: (queryInterface,) =>  queryInterface.bulkDelete('Conquista',null,{}),

   /*
    Estrutura de banco, Migrations e Seeders by Tery
    */

};
