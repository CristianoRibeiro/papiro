'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return  queryInterface.createTable('Mensagem',{

      IdMensagem:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        autoIncrementIdentity:true,
        type: Sequelize.INTEGER
      },
      DsMensagem:{
        type:Sequelize.STRING(400),
        allowNull:false,
        unique:true,
        len:{
          args:[1,400],
          msg:'A mensagem deve ter entre 1 e 400 caracteres, favor verificar!'
        }
      },

      Up:{
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue:0
      },
      CdMsgPai:{
        type:Sequelize.INTEGER,
        allowNull:true
      },

      createdAt:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false

      }
    }
    )
  
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('Mensagem');
    
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
 
  }
};

