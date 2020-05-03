import Sequelize, { Model } from 'sequelize';

class Setor extends Model {
  static init(sequelize) {
    super.init(
      {
        IdSetor:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true,autoIncrementIdentity:true},
        DsSetor: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Pessoa);
    this.belongsTo(models.Filial,{ foreignKey: 'CodFilial', as: 'Filial' });
  }

}

export default Setor;
