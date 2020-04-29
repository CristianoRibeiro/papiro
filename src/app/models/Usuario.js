import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        Usuario: Sequelize.STRING,
        SenhaHash: Sequelize.STRING

      },
      {
        sequelize,
      }
    );
  }

}

export default Usuario;

// module.exports= (sequelize,DataTypes)=>{

//   const Usuario =sequelize.define('Usuario',{

//       IdUsuario:{
//           type:DataTypes.UUID,
//           primaryKey:true,
//           defaultValue:DataTypes.UUIDV4,
//           allowNull:false
//       },
//       Usuario:{
//           type:sequelize.STRING(45),
//           allowNull:false,
//           validate:{
//               len:{
//                   args:[1,45],
//                   msg:"O nome de usuário deve ter entre 1 e 45 caracteres. Favor verificar!"
//               }
//             }
        
//       },
//       SenhaHash:{
//           type:Sequelize.STRING(),
//           allowNull:false,
//           unique:true,

//         },
  
//         Pontuacao:{
//           type:Sequelize.INTEGER,
//           allowNull:false,
//           defaultValue:0
//         },
      
//         IsAtivo:{
//           type:Sequelize.BOOLEAN,
//           defaultValue:true,
//           allowNull:false
//         },

//   });

//   Usuario.associate=Models=>{

//       Usuario.belongsTo(Models.Pessoa);
//       Usuario.belongsTo(Models.TipoUsuario);
//       Usuario.hasMany(Models.Mensagem);
//       Usuario.hasMany(Models.Recompensa);
//       Usuario.hasMany(Models.Aviso);

//   };
      
//   return Usuario;
  
// }


