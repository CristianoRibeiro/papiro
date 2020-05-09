'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return  queryInterface.createTable('Setor',{

      IdSetor:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        autoIncrementIdentity:true,
        primaryKey:true
      },
      DsSetor:{
        type:Sequelize.STRING(60),
        allowNull:false,
        len:{
          args:[1,60],
          msg:"O nome do Setor deve ter entre 1 e 60 caracteres, favor verificar."
        }
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
   
    return queryInterface.dropTable('Setor');
    
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
 
  }
};
