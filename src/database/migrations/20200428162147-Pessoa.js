'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return  queryInterface.createTable('Pessoa',{

      IdPessoa:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        autoIncrementIdentity:true,
        primaryKey:true
      },
      NoPessoa:{
        type:Sequelize.STRING(60),
        allowNull:false,
        len:{
          args:[1,60],
          msg:"O nome da pessoa deve ter entre 8 e 60 caracteres, favor verificar."
        }
      },
      CPF:{
        type:Sequelize.STRING(11),
        allowNull:false,
        unique:true,
        len:{
          args:[11,11],
          msg:"O CPF, deve ser um CPF válido, sendo inserido apenas por números. Favor verificar."
        }
      },

      Email:{
        type:Sequelize.STRING(80),
        allowNull:false,
        unique:true,
        len:{
          args:[10,80],
          msg:"O email, deve ser um email válido com no máximo de 80 caracteres. Favor verificar"
        }
      },
    
      Sexo:{
        type:Sequelize.SMALLINT,
        allowNull:false
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
   
    return queryInterface.dropTable('Pessoa');
    
        /*
    Papiro, banco modelado e desenvolvido by Tery
    */
 
  }
};
