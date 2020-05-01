import Sequelize, { Model } from 'sequelize';

class Filial extends Model {
  static init(sequelize) {
    super.init(
      {
        DsFilial: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

  }

  static associate(models) {
    this.hasMany(models.Setor);

  }

}

export default Filial;



