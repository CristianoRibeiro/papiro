import Sequelize, { Model } from 'sequelize';

class TipoUsuario extends Model {
  static init(sequelize) {
    super.init(
      {
        IdTipoUsuario:{
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        DsTipoUsuario: Sequelize.STRING
      },
      {
        sequelize,
      }
    );
    return this;

  }

  static associate(models) {
    this.hasMany(models.TipoUsuario);

  }

}

export default TipoUsuario;




