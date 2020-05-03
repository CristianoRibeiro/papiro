'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
return queryInterface.addColumn('Pessoa','CodCargo',{
  type: Sequelize.INTEGER,
  allowNull:false,
  references:{
    model:'Cargo',
    key:'IdCargo',
  
  },

  onUpdate:'CASCADE'

})
   
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(

      'Pessoa',
      'CodCargo'
    );
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
  }
};
