import Sequelize, { Model } from 'sequelize';


class Conquista extends Model {
    static init(sequelize) {
      super.init(
        {
          IdConquista:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true,autoIncrementIdentity:true},
          NoConquista:Sequelize.STRING,
          DsConquista: Sequelize.STRING,
          ValorConquista: Sequelize.INTEGER,
          DuracaoPrevista:Sequelize.DATE,
          IsAtivo:Sequelize.BOOLEAN

        },

        {
          sequelize,
        }
      );
      return this;
  
    }

    static associate(models) {
      
      this.belongsTo(models.Usuario,{through:'ConquistasUsuario', foreignKey:'CodConquista',as:"ConquistasdeUsuario" });
  
    }

  }
  
  export default Conquista;


