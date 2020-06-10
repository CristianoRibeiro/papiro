'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.bulkInsert('UPUsuario',
  
 [
  {
    CdMensagem:'1',
    CdUsuario:'3',

  },
  {
    CdMensagem:'1',
    CdUsuario:'2',

  },
  {
    CdMensagem:'1',
    CdUsuario:'1',

  },
  {
    CdMensagem:'2',    
    CdUsuario:'1',

  },
  {
    CdMensagem:'2',
    CdUsuario:'2',

  },
  {
    CdMensagem:'3',
    CdUsuario:'2',

  },
  {
    CdMensagem:'3',
    CdUsuario:'3',

  },
  {
    CdMensagem:'5',
    CdUsuario:'2',

  },
  {
    CdMensagem:'4',
    CdUsuario:'2',

  },
  {
    CdMensagem:'4',
    CdUsuario:'3',

  },
  {
    CdMensagem:'7',
    CdUsuario:'3',

  },  {
    CdMensagem:'6',
    CdUsuario:'3',

  },  {
    CdMensagem:'8',
    CdUsuario:'3',

  },

],{} ),
  down: (queryInterface,) =>  queryInterface.bulkDelete('ConquistasUsuario',null,{}),

   /*
    Estrutura de banco, Migrations e Seeders by Tery
    */

};
