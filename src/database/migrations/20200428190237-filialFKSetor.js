'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
return queryInterface.addColumn('Setor','CodFilial',{
  type: Sequelize.INTEGER,
  allowNull:false,
  references:{
    model:'Filial',
    key:'IdFilial',
  
  },

  onUpdate:'CASCADE'

})
   
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(

      'Setor',
      'CodFilial'
    );
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
  }
};
