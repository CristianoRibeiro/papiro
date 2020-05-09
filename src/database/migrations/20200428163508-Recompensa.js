'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return  queryInterface.createTable('Recompensa',{

      IdRecompensa:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        autoIncrementIdentity:true,
        type: Sequelize.INTEGER
      },
      DsRecompensa:{
        type:Sequelize.STRING(400),
        allowNull:false,
        unique:true,
        len:{
          args:[1,400],
          msg:'A descrição da recompensa deve ter entre 1 e 400 caracteres, favor verificar!'
        }
      },

      ValorPontuacao:{
        type:Sequelize.FLOAT,
        allowNull:false,
      },
      CdContemplado:{
        type:Sequelize.INTEGER,
        allowNull:true
      },
      DtConclusao:{
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

      }
    }
    )
  
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('Recompensa');
    
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
 
  }
};
