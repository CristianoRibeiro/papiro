'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
return queryInterface.addColumn('Pessoa','CodSetor',{
  type: Sequelize.INTEGER,
  allowNull:false,
  references:{
    model:'Setor',
    key:'IdSetor',
  
  },

  onUpdate:'CASCADE'

})
   
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(

      'Pessoa',
      'CodSetor'
    );
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
  }
};
