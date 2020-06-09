'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
return queryInterface.addColumn('username','CdTipoUsuario',{
  type: Sequelize.INTEGER,
  allowNull:false,
  references:{
    model:'TipoUsuario',
    key:'IdTipoUsuario',
  
  },

  onUpdate:'CASCADE'

})
   
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(

      'username',
      'CdTipoUsuario'
    );
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
  }
};
