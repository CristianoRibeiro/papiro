'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return  queryInterface.createTable('Setor',{

      IdSetor:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
      },
      DsSetor:{
        type:Sequelize.STRING(60),
        allowNull:false,
        unique:true,
        len:{
          args:[1,60],
          msg:"O nome do Setor deve ter entre 1 e 60 caracteres, favor verificar."
        }
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
   
    return queryInterface.dropTable('Setor');
    
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
 
  }
};
