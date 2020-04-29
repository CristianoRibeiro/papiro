module.exports= (sequelize,DataTypes)=>{

    const TipoUsuario=sequelize.define('TipoUsuario',{

        IdTipoUsuario:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false
        },
        DsTipoUsuario:{
            type:sequelize.STRING,
            allowNull:false,
            validate:{
                len:{
                    args:[1,50],
                    msg:"A descrição de tipo de usuaário deve ter entre 1 e 50 caracteres. Favor verificar!"
                }
              }
          
        }
    });
        
    TipoUsuario.associate=Models=>{
        TipoUsuario.hasMany(Models.Usuario);

    }
    return TipoUsuario;

}



