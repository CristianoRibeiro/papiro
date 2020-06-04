import Sequelize, { Model } from 'sequelize';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        IdUsuario:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true,autoIncrementIdentity:true},
        Usuario: Sequelize.STRING,
        senhaHash: Sequelize.STRING,
        Senha:Sequelize.VIRTUAL,
        IsAtivo:Sequelize.BOOLEAN,

      },
      {
        sequelize,
      }
    );

    return this;

  }

  static associate(models) {
    this.hasMany(models.Recompensa);
    this.hasMany(models.Mensagem);
    this.belongsTo(models.TipoUsuario,{foreignKey:'CdTipoUsuario',as:'TipoUsuario'});
    this.belongsTo(models.Pessoa,{foreignKey:'CdPessoa',as:'Pessoa'});
    // this.belongsTo(models.Conquista,{through:'ConquistasUsuario', foreignKey:'CodUsuario',as:"Conquistas" });
 

  }

}

export default Usuario;