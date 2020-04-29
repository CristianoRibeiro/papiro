module.exports= (sequelize,DataTypes)=>{

    const Aviso=sequelize.define('Aviso',{

        IdAviso:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false
        },
        Aviso:{
            type:sequelize.STRING(400),
            allowNull:false,
            validate:{
                len:{
                    args:[1,400],
                    msg:"O aviso deve ter entre 1 e 400 caracteres. Favor verificar!"
                }
              }
          
        },

        IsAtivo:{
            type:sequelize.BOOLEAN,
            allowNull:true,
            defaultValue:true
        }

    });

    Aviso.associate=Models=>{

        Aviso.belongsTo(Models.Usuario);

    };
        
    return Aviso;

}



