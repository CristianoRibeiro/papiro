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
        IsAtivo:Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
      
    );

    this.addHook('beforeSave', async usuario => {
      if (usuario.Senha) {
        usuario.senhaHash = await bcrypt.hash(usuario.senhaHash, 8);
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
    return bcrypt.compare(password, this.password_hash);
  }

}

export default Usuario;