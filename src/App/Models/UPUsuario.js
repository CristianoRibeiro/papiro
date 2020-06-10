import Sequelize, { Model } from 'sequelize';


class UPUsuario extends Model {
    static init(sequelize) {
      super.init(
        {
            IdUPUsuario:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true,autoIncrementIdentity:true}
  
        },

        {
          sequelize,
        }
      );
      return this;
  
    }
  
    static associate(models) {
      this.belongsToMany(models.Usuario, { foreignKey: 'CdUsuario', as: 'Usuario' });
      this.belongsToMany(models.Mensagem, { foreignKey: 'CdMensagem', as: 'Mensagem' });
    }
  
  }
  
  export default UPUsuario;


