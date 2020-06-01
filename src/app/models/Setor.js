import Sequelize, { Model } from 'sequelize';

class Setor extends Model {
  static init(sequelize) {
    super.init(
      {
        DsSetor: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

  }

  static associate(models) {
    this.hasMany(models.Pessoa);
    this.belongsTo(models.FIlial,{ foreignKey: 'CodFilial', as: 'Filial' });
  }

}

export default Setor;
