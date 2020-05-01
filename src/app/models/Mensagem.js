import Sequelize, { Model } from 'sequelize';

class Mensagem extends Model {
  static init(sequelize) {
    super.init(
      {
        DsMensagem: Sequelize.STRING,
        UP:Sequelize.INTEGER,
        CdMsgPai:Sequelize.INTEGER
      },
      {
        sequelize,
      }
    );

  }

  static associate(models) {
    this.belongsTo(models.Usuario,{foreignKey:'CodUsuario',as:'Usuario'});

  }
}

export default Mensagem;


