import Sequelize, { Model } from 'sequelize';

class Recompensa extends Model {
  static init(sequelize) {
    super.init(
      {
        IdRecompensa:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true,autoIncrementIdentity:true},
        DsRecompensa: Sequelize.STRING,
        ValorPontuacao:Sequelize.INTEGER,
        DtConclusao:Sequelize.DATE
        
      },
      {
        sequelize,
      }
    );
    return this;

  }


}

export default Recompensa;



