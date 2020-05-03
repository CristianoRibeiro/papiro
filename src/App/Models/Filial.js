import Sequelize, { Model } from 'sequelize';

class Filial extends Model {
  static init(sequelize) {
    super.init(
      {
        IdFilial:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true,autoIncrementIdentity:true},
        DsFilial: Sequelize.STRING
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Setor);

  }

}

export default Filial;



