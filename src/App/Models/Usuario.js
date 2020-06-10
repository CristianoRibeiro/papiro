import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        IdUsuario:{
          type: Sequelize.UUID,
          primaryKey: true,
          autoIncrement: true // Automatically gets converted to SERIAL for postgres
        },
        username: Sequelize.STRING,
        senhaHash: Sequelize.STRING,
        Senha:Sequelize.VIRTUAL,
        Pontuacao:Sequelize.INTEGER,
        IsAtivo:Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
      
    );

    this.addHook('beforeSave', async Usuario => {
      if (Usuario.Senha) {
        Usuario.senhaHash = await bcrypt.hash(Usuario.Senha, 8);
      }
    });
    return this;

  }

  static associate(models) {
    this.belongsTo(models.TipoUsuario,{foreignKey:'CdTipoUsuario',as:'TipoUsuario'});
    this.belongsTo(models.Pessoa,{foreignKey:'CdPessoa',as:'Pessoa'});
    // this.belongsTo(models.Conquista,{through:'ConquistasUsuario', foreignKey:'CodUsuario',as:"Conquistas" });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.senhaHash);
  }

}

export default Usuario;