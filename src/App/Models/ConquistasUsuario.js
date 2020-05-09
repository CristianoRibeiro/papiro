import Sequelize, { Model } from 'sequelize';


class ConquistasUsuario extends Model {
    static init(sequelize) {
      super.init(
        {
          IdConquistasUsuario:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true,autoIncrementIdentity:true}
  
        },

        {
          sequelize,
        }
      );
      return this;
  
    }
  
    static associate(models) {
      this.belongsToMany(models.Usuario, { foreignKey: 'CdUsuario', as: 'Usuario' });
      this.belongsToMany(models.Conquista, { foreignKey: 'CdConquista', as: 'Conquista' });
    }
  
  }
  
  export default ConquistasUsuario;


