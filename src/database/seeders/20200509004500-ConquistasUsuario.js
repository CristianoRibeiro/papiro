'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.bulkInsert('ConquistasUsuario',
  
 [
  {
    CodUsuario:'1',
    CodConquista:'3',

  },
  {
    CodUsuario:'1',
    CodConquista:'2',

  },
  {
    CodUsuario:'1',
    CodConquista:'1',

  },
  {
    CodUsuario:'2',
    CodConquista:'1',

  },
  {
    CodUsuario:'2',
    CodConquista:'2',

  },
  {
    CodUsuario:'3',
    CodConquista:'2',

  },
  {
    CodUsuario:'3',
    CodConquista:'3',

  },
  {
    CodUsuario:'5',
    CodConquista:'2',

  },
  {
    CodUsuario:'4',
    CodConquista:'2',

  },
  {
    CodUsuario:'4',
    CodConquista:'3',

  },
  {
    CodUsuario:'7',
    CodConquista:'3',

  },  {
    CodUsuario:'6',
    CodConquista:'3',

  },  {
    CodUsuario:'8',
    CodConquista:'3',

  },


],{} ),

  down: (queryInterface,) =>  queryInterface.bulkDelete('ConquistasUsuario',null,{}),

   /*
    Estrutura de banco, Migrations e Seeders by Tery
    */

};
