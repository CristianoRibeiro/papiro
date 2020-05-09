'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return  queryInterface.createTable('ConquistasUsuario',{

      IdConquistasUsuario:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        autoIncrementIdentity:true,
        primaryKey:true
      },
      CodUsuario:{
        
          type: Sequelize.INTEGER,
          allowNull:false,
          references:{
            model:'Usuario',
            key:'IdUsuario',
          
          },
 
      },
      CodConquista:{
        
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Conquista',
          key:'IdConquista',
        
        },

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
    }
    )
  
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('ConquistasUsuario');
    
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
 
  }
};
