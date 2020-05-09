'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return  queryInterface.createTable('Conquista',{

      IdConquista:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        autoIncrementIdentity:true,
        primaryKey:true
      },

      NoConquista:{
        type:Sequelize.STRING(100),
        allowNull:false,
        unique:true,
               
      },
      DsConquista:{
        type:Sequelize.STRING(100),
        allowNull:false,
        unique:true,
               
      },
      ValorConquista:{
        type:Sequelize.INTEGER,
        allowNull:false
      },

      DuracaoPrevista:{
        type:Sequelize.DATE,
        allowNull:true
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue:new Date()
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue:new Date()

      },

      IsAtivo:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:'false'
      },

    }
    )
  
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('Conquista');
    
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
 
  }
};
