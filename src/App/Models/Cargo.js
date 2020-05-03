import Sequelize, { Model } from 'sequelize';

class Cargo extends Model {
  static init(sequelize) {
    super.init(
      {
        DsCargo: Sequelize.STRING
      },
      {
        sequelize,
      }
    );
    return this;

  }

  static associate(models) {
    this.hasMany(models.Pessoa);
  }

}

export default Cargo;

