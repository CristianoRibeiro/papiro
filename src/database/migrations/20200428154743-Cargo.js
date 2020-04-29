'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return  queryInterface.createTable('Cargo',{

      IdCargo:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
      },
      DsCargo:{
        type:Sequelize.STRING(60),
        allowNull:false,
        unique:true,
               
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false

      },

    }
    )
  
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('Cargo');
    
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
 
  }
};
