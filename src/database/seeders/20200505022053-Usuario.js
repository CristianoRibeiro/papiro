'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.bulkInsert('Usuario',
  
 [
  {
    username:'Luis.Alves',
    senhaHash:'12345',
    CdTipoUsuario:'1',
    CdPessoa:'1',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    username:'Cristiano.Ribeiro',
    senhaHash:'12345',
    CdTipoUsuario:'1',
    CdPessoa:'2',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    username:'Cisco.Danúbio',
    senhaHash:'12345',
    CdTipoUsuario:'4',
    CdPessoa:'3',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    username:'Joana.Prado',
    senhaHash:'12345',
    CdTipoUsuario:'4',
    CdPessoa:'4',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    username:'Paulo.Braga',
    senhaHash:'12345',
    CdTipoUsuario:'4',
    CdPessoa:'5',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    username:'Jessica.Alboquerque',
    senhaHash:'12345',
    CdTipoUsuario:'4',
    CdPessoa:'6',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    username:'Ricardo.Fictício',
    senhaHash:'12345',
    CdTipoUsuario:'4',
    CdPessoa:'7',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    username:'Caio.Fictício',
    senhaHash:'12345',
    CdTipoUsuario:'4',
    CdPessoa:'8',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
  username:'Renaldo.Fictício',
  senhaHash:'12345',
  CdTipoUsuario:'4',
  CdPessoa:'9',
  createdAt:new Date(),
  updatedAt:new Date(),
  },
  {username:'Rafael.Fictício',
    senhaHash:'12345',
    CdTipoUsuario:'4',
    CdPessoa:'10',
    createdAt:new Date(),
    updatedAt:new Date(),
    },
    {
      username:'Vinícius.Fictício',
      senhaHash:'12345',
      CdTipoUsuario:'4',
      CdPessoa:'11',
      createdAt:new Date(),
      updatedAt:new Date(),
  },
  {
    username:'Mr.Gerente',
    senhaHash:'12345',
    CdTipoUsuario:'3',
    CdPessoa:'12',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    username:'Ms.Gerente',
    senhaHash:'12345',
    CdTipoUsuario:'3',
    CdPessoa:'13',
    createdAt:new Date(),
    updatedAt:new Date(),
},
{
  username:'Marta.Fictícia',
  senhaHash:'12345',
  CdTipoUsuario:'2',
  CdPessoa:'14',
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  username:'Cristiane.Fictícia',
  senhaHash:'12345',
  CdTipoUsuario:'2',
  CdPessoa:'15',
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  username:'João.Fictícia',
  senhaHash:'12345',
  CdTipoUsuario:'2',
  CdPessoa:'14',
  createdAt:new Date(),
  updatedAt:new Date(),
},

],{} ),

  down: (queryInterface,) =>  queryInterface.bulkDelete('Usuario',null,{}),

   /*
    Estrutura de banco, Migrations e Seeders by Tery
    */

};
