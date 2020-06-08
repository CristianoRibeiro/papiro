import Sequelize, { Model } from 'sequelize';

class Pessoa extends Model {
  static init(sequelize) {
    super.init(
      {
        IdPessoa:{
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        NoPessoa: Sequelize.STRING,
        CPF:Sequelize.STRING,
        Email:Sequelize.STRING,
        Sexo:Sequelize.TINYINT
        
      },
      {
        sequelize,
      }
    );
    return this;

  }

  static associate(models) {
    this.belongsTo(models.Setor,{foreignKey:'CodSetor',as:'Setor'});
    this.belongsTo(models.Cargo,{foreignKey:'CodCargo',as:'Cargo'});
    this.hasOne(models.Usuario)
  }

}

export default Pessoa;

