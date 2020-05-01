import Sequelize, { Model } from 'sequelize';

class Pessoa extends Model {
  static init(sequelize) {
    super.init(
      {
        NoPessoa: Sequelize.STRING,
        CPF:Sequelize.STRING,
        Email:Sequelize.STRING,
        Sexo:Sequelize.TINYINT
        
      },
      {
        sequelize,
      }
    );

  }

  static associate(models) {
    this.belongsTo(models.Setor,{foreignKey:'CodSetor',as:'Setor'});
    this.belongsTo(models.Cargo,{foreignKey:'CodCargo',as:'Cargo'});
    this.hasOne(models.Usuario)
  }

}

export default Pessoa;

