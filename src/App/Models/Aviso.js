import Sequelize, { Model } from 'sequelize';


class Aviso extends Model {
    static init(sequelize) {
      super.init(
        {
          IdAviso:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true,autoIncrementIdentity:true},
          Aviso: Sequelize.STRING,
          IsAtivo: Sequelize.BOOLEAN,

        },

        {
          sequelize,
        }
      );
      return this;
  
    }
  
    static associate(models) {
      this.belongsTo(models.Usuario, { foreignKey: 'IdUsuario', as: 'Usuario' });
    }
  
  }
  
  export default Aviso;


