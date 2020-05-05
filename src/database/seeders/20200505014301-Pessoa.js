'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.bulkInsert('Pessoa',
  
 [
  {
    NoPessoa:'Luís Henrique Alves',
    CPF:'12345678901',
    Email:'terytery98@gmail.com',
    Sexo:"1",
    createdAt:new Date(),
    updatedAt:new Date(),
    CodSetor:'2',
    CodCargo:'3'
  },
  {
    NoPessoa:'Cristiano Ribeiro',
    CPF:'12345678902',
    Email:'Emailgenerico@gmail.com',
    Sexo:"1",
    createdAt:new Date(),
    updatedAt:new Date(),
    CodSetor:'2',
    CodCargo:'3'
  },
  {
    NoPessoa:'Francisco Danúbio',
    CPF:'12345678903',
    Email:'Emailgenerico2@gmail.com',
    Sexo:"1",
    createdAt:new Date(),
    updatedAt:new Date(),
    CodSetor:'4',
    CodCargo:'9'
  },
  {
    NoPessoa:'Joana Prado',
    CPF:'12345678904',
    Email:'Emailgenerico3@gmail.com',
    Sexo:"2",
    createdAt:new Date(),
    updatedAt:new Date(),
    CodSetor:'1',
    CodCargo:'1'
  },
  {
    NoPessoa:'Paulo Braga',
    CPF:'12345678905',
    Email:'Emailgenerico4@gmail.com',
    Sexo:"1",
    createdAt:new Date(),
    updatedAt:new Date(),
    CodSetor:'1',
    CodCargo:'1'
  },
  {
    NoPessoa:'Jessica Alboquerque',
    CPF:'12345678906',
    Email:'Emailgenerico5@gmail.com',
    Sexo:'2',
    createdAt:new Date(),
    updatedAt:new Date(),
    CodSetor:'1',
    CodCargo:'2'
  },
  {
    NoPessoa:'Ricardo Fictício',
    CPF:'12345678907',
    Email:'Emailgenerico6@gmail.com',
    Sexo:'1',
    createdAt:new Date(),
    updatedAt:new Date(),
    CodSetor:'1',
    CodCargo:'2'
  },
  {
    NoPessoa:'Caio Fictício',
    CPF:'12345678908',
    Email:'Emailgenerico7@gmail.com',
    Sexo:'1',
    createdAt:new Date(),
    updatedAt:new Date(),
    CodSetor:'1',
    CodCargo:'2'
  },
  {
  NoPessoa:'Renaldo Fictício',
    CPF:'12345678909',
    Email:'Emailgenerico8@gmail.com',
    Sexo:'1',
    createdAt:new Date(),
    updatedAt:new Date(),
    CodSetor:'2',
    CodCargo:'4'
  },
  {
    NoPessoa:'Rafael Primeiro Semestre',
      CPF:'12345678900',
      Email:'Emailgenerico9@gmail.com',
      Sexo:'1',
      createdAt:new Date(),
      updatedAt:new Date(),
      CodSetor:'2',
      CodCargo:'4'
    },
    {
    NoPessoa:'Vinícius Fictício',
    CPF:'12345678911',
    Email:'Emailgenerico10@gmail.com',
    Sexo:'1',
    createdAt:new Date(),
    updatedAt:new Date(),
    CodSetor:'2',
    CodCargo:'6'
  },
  {
    NoPessoa:'Mr Gerente',
    CPF:'12345678912',
    Email:'Emailgenerico11@gmail.com',
    Sexo:'1',
    createdAt:new Date(),
    updatedAt:new Date(),
    CodSetor:'2',
    CodCargo:'7'
  },
  {
  NoPessoa:'Ms Gerente',
  CPF:'12345678913',
  Email:'Emailgenerico12@gmail.com',
  Sexo:'2',
  createdAt:new Date(),
  updatedAt:new Date(),
  CodSetor:'2',
  CodCargo:'7'
},
{
  NoPessoa:'Marta Fictícia',
  CPF:'12345678914',
  Email:'Emailgenerico13@gmail.com',
  Sexo:'2',
  createdAt:new Date(),
  updatedAt:new Date(),
  CodSetor:'3',
  CodCargo:'8'
},
{
  NoPessoa:'Cristiane Fictícia',
  CPF:'12345678915',
  Email:'Emailgenerico14@gmail.com',
  Sexo:'2',
  createdAt:new Date(),
  updatedAt:new Date(),
  CodSetor:'3',
  CodCargo:'8'
},
{
  NoPessoa:'João Fictício',
  CPF:'12345678916',
  Email:'Emailgenerico15@gmail.com',
  Sexo:'1',
  createdAt:new Date(),
  updatedAt:new Date(),
  CodSetor:'3',
  CodCargo:'8'
},






],{} ),

  down: (queryInterface,) =>  queryInterface.bulkDelete('Pessoa',null,{}),

   /*
    Estrutura de banco, Migrations e Seeders by Tery
    */

};
