'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return  queryInterface.createTable('UPUsuario',{

      IdUPUsuario:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        autoIncrementIdentity:true,
        primaryKey:true
      },
      CdUsuario:{
        
          type: Sequelize.INTEGER,
          allowNull:false,
          references:{
            model:'Usuario',
            key:'IdUsuario',
          
          },
 
      },
      CdMensagem:{
        
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Mensagem',
          key:'IdMensagem',
        
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
   
    return queryInterface.dropTable('UPUsuario');
    
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
 
  }
};
