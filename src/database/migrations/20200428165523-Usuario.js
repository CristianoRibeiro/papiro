'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return  queryInterface.createTable('Usuario',{

      IdUsuario:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        autoIncrementIdentity:true,
        primaryKey:true
      },
      Usuario:{
        type:Sequelize.STRING(20),
        allowNull:false,
        len:{
          args:[1,20],
          msg:"O nome de usuário deve ter entre 1 e 20 caracteres, favor verificar."
        }
      },
      senhaHash:{
        allowNull:false,
        type:Sequelize.STRING
        },

    
      IsAtivo:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:true
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
   
    return queryInterface.dropTable('Usuario');

        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
 
  }
};
