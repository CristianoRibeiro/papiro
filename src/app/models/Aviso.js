import Sequelize, { Model } from 'sequelize';


class Aviso extends Model {
    static init(sequelize) {
      super.init(
        {
          Aviso: Sequelize.STRING,
          IsAtivo: Sequelize.BOOLEAN,

        },

        {
          sequelize,
        }
      );
  
    }
  
    static associate(models) {
      this.belongsTo(models.Usuario, { foreignKey: 'IdUsuario', as: 'Usuario' });
    }
  
  }
  
  export default Aviso;


