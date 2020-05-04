'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
return queryInterface.addColumn('Usuario','CdPessoa',{
  type: Sequelize.INTEGER,
  allowNull:false,
  references:{
    model:'Pessoa',
    key:'IdPessoa',
  
  },

  onUpdate:'CASCADE'

})
   
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(

      'Usuario',
      'CdPessoa'
    );
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
  }
};
