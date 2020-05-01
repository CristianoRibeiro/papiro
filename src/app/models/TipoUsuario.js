import Sequelize, { Model } from 'sequelize';

class TipoUsuario extends Model {
  static init(sequelize) {
    super.init(
      {
        DsTipoUsuario: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

  }

  static associate(models) {
    this.hasMany(models.TipoUsuario);

  }

}

export default TipoUsuario;




