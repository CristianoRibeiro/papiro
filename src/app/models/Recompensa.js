import Sequelize, { Model } from 'sequelize';

class Recompensa extends Model {
  static init(sequelize) {
    super.init(
      {
        DsRecompensa: Sequelize.STRING,
        ValorPontuacao:Sequelize.INTEGER,
        DtConclusao:Sequelize.DATE
        
      },
      {
        sequelize,
      }
    );

  }


}

export default Recompensa;



