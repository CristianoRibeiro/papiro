'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.bulkInsert('Aviso',
  
 [
  {
    TituloAviso:'Confraternização',
    Aviso:'Confirme sua presença na confraternização que acontecerá no dia xx/xx/xxxx no local N. Para confirmar clique no link abaixo: Link',
    CdUsuario:'1',
    IsAtivo:true,
    createdAt:new Date(),
    updatedAt:new Date()

  },
  {
    TituloAviso:'TCC',
    Aviso:'Temos de terminar o TCC urgentemente!',
    CdUsuario:'3',
    IsAtivo:true,
    createdAt:new Date(),
    updatedAt:new Date()

  },
  {
    TituloAviso:'Aviso-Teste',
    Aviso:'	Olá, eu sou um aviso Ativo',
    CdUsuario:'2',
    IsAtivo:true,
    createdAt:new Date(),
    updatedAt:new Date()

  },
  {
    TituloAviso:'Confraternização',
    Aviso:'Confirme sua presença na confraternização que acontecerá no dia xx/xx/xxxx no local N. Para confirmar clique no link abaixo: Link',
    CdUsuario:'1',
    IsAtivo:true,
    createdAt:new Date(),
    updatedAt:new Date()

  },
  {
    TituloAviso:'Another Ativo',
    Aviso:'Olá, eu sou outro aviso Ativo',
    CdUsuario:'5',
    IsAtivo:true,
    createdAt:new Date(),
    updatedAt:new Date()

  }


],{} ),

  down: (queryInterface,) =>  queryInterface.bulkDelete('Aviso',null,{}),

   /*
    Estrutura de banco, Migrations e Seeders by Tery
    */

};
