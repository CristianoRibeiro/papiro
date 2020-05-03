import Sequelize, { Model } from 'sequelize';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        IdUsuario:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true,autoIncrementIdentity:true},
        Usuario: Sequelize.STRING,
        SenhaHash: Sequelize.STRING,
        Senha:Sequelize.VIRTUAL,
        Pontuacao:Sequelize.FLOAT,
        IsAtivo:Sequelize.BOOLEAN,



      },
      {
        sequelize,
      }
    );

    return this;

  }

  static associate(models) {
    this.hasMany(models.Aviso);
    this.hasMany(models.Recompensa);
    this.hasMany(models.Mensagem);
    this.belongsTo(models.TipoUsuario,{foreignKey:'CdTipoUsuario',as:'TipoUsuario'})
    
  }

}

export default Usuario;