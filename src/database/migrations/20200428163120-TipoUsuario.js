'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return  queryInterface.createTable('TipoUsuario',{

      IdTipoUsuario:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        autoIncrementIdentity:true,
        primaryKey:true
      },
      DsTipoUsuario:{
        type:Sequelize.STRING(50),
        allowNull:false,
        unique:true,
        len:{
          args:[1,30],
          msg:"O nome do cargo deve ter entre 1 e 50, favor verificar."
        }
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false

      },
  
    }
    )
  
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('TipoUsuario');
    
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
 
  }
};
