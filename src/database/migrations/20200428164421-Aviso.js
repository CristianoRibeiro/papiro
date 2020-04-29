'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return  queryInterface.createTable('Aviso',{

      IdAviso:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
      },
      Aviso:{
        type:Sequelize.STRING(400),
        allowNull:false,
        len:{
          args:[1,400],
          msg:"A descrição da recompensa deve ter entre 1 e 400 caracteres, favor verificar."
        }
      },

      IsAtivo:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        default:true
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
   
    return queryInterface.dropTable('Aviso');
    
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
 
  }
};
