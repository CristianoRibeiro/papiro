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
      username:{
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

      CdTipoUsuario: {
        type: Sequelize.INTEGER,
        references: { model: 'TipoUsuario', key: 'IdTipoUsuario' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },

      CdPessoa: {
        type: Sequelize.INTEGER,
        references: { model: 'Pessoa', key: 'IdPessoa' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
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
