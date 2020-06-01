'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return  queryInterface.createTable('Mensagem',{

      IdMensagem:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
      },
      Mensagem:{
        type:Sequelize.STRING(400),
        allowNull:false,
        len:{
          args:[1,400],
          msg:"A descrição da recompensa deve ter entre 1 e 400 caracteres, favor verificar."
        }
      },

      Up:{
        type:Sequelize.INTEGER,
        allowNull:false,
        default:0
      },

      CdMsgPai:{
        type:Sequelize.INTEGER,
        allowNull:true
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
   
    return queryInterface.dropTable('Mensagem');
    
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
 
  }
};
