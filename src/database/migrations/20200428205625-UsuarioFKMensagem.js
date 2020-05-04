'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
return queryInterface.addColumn('Mensagem','CdUsuario',{
  type: Sequelize.INTEGER,
  allowNull:false,
  references:{
    model:'Usuario',
    key:'IdUsuario',
  
  },

  onUpdate:'CASCADE'

})
   
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(

      'Mensagem',
      'CdUsuario'
    );
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
  }
};
