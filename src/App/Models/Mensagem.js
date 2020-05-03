import Sequelize, { Model } from 'sequelize';

class Mensagem extends Model {
  static init(sequelize) {
    super.init(
      {
        IdMensagem:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true,autoIncrementIdentity:true},
        DsMensagem: Sequelize.STRING,
        UP:Sequelize.INTEGER,
        CdMsgPai:Sequelize.INTEGER
      },
      {
        sequelize,
      }
    );
    return this;

  }

  static associate(models) {
    this.belongsTo(models.Usuario,{foreignKey:'CodUsuario',as:'Usuario'});

  }
}

export default Mensagem;


