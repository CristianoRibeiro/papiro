'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.bulkInsert('Usuario',
  
 [
  {
    Usuario:'Luis.Alves',
    senhaHash:'12345',
    CdTipoUsuario:'1',
    CdPessoa:'1',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    Usuario:'Cristiano.Ribeiro',
    senhaHash:'12345',
    CdTipoUsuario:'1',
    CdPessoa:'2',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    Usuario:'Cisco.Danúbio',
    senhaHash:'12345',
    CdTipoUsuario:'4',
    CdPessoa:'3',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    Usuario:'Joana.Prado',
    senhaHash:'12345',
    CdTipoUsuario:'4',
    CdPessoa:'4',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    Usuario:'Paulo.Braga',
    senhaHash:'12345',
    CdTipoUsuario:'4',
    CdPessoa:'5',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    Usuario:'Jessica.Alboquerque',
    senhaHash:'12345',
    CdTipoUsuario:'4',
    CdPessoa:'6',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    Usuario:'Ricardo.Fictício',
    senhaHash:'12345',
    CdTipoUsuario:'4',
    CdPessoa:'7',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    Usuario:'Caio.Fictício',
    senhaHash:'12345',
    CdTipoUsuario:'4',
    CdPessoa:'8',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
  Usuario:'Renaldo.Fictício',
  senhaHash:'12345',
  CdTipoUsuario:'4',
  CdPessoa:'9',
  createdAt:new Date(),
  updatedAt:new Date(),
  },
  {
    Usuario:'Rafael.Fictício',
    senhaHash:'12345',
    CdTipoUsuario:'4',
    CdPessoa:'10',
    createdAt:new Date(),
    updatedAt:new Date(),
    },
    {
      Usuario:'Vinícius.Fictício',
      senhaHash:'12345',
      CdTipoUsuario:'4',
      CdPessoa:'11',
      createdAt:new Date(),
      updatedAt:new Date(),
  },
  {
    Usuario:'Mr.Gerente',
    senhaHash:'12345',
    CdTipoUsuario:'3',
    CdPessoa:'12',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    Usuario:'Ms.Gerente',
    senhaHash:'12345',
    CdTipoUsuario:'3',
    CdPessoa:'13',
    createdAt:new Date(),
    updatedAt:new Date(),
},
{
  Usuario:'Marta.Fictícia',
  senhaHash:'12345',
  CdTipoUsuario:'2',
  CdPessoa:'14',
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  Usuario:'Cristiane.Fictícia',
  senhaHash:'12345',
  CdTipoUsuario:'2',
  CdPessoa:'15',
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  Usuario:'João.Fictícia',
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
