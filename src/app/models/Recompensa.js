module.exports= (sequelize,DataTypes)=>{

    const Recompensa=sequelize.define('Recompensa',{

        IdRecompensa:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false
        },
        DsRecompensa:{
            type:sequelize.STRING(400),
            allowNull:false,
            validate:{
                len:{
                    args:[1,400],
                    msg:"As recompensas deve ter entre 1 e 400 caracteres. Favor verificar!"
                }
              }
          
        },

        ValorPontuacao:{
            type:sequelize.INTEGER,
            allowNull:false
            
        },
        DtConclusao:{
            type:sequelize.DATE,
            allowNull:true

        }

    });

    Recompensa.associate=Models=>{

        Recompensa.belongsTo(Models.Usuario);

    };
        
    return Recompensa;

}



