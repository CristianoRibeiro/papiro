module.exports= (sequelize,DataTypes)=>{

    const Mensagem=sequelize.define('Mensagem',{

        IdMensagem:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false
        },
        DsMensagem:{
            type:sequelize.STRING(400),
            allowNull:false,
            validate:{
                len:{
                    args:[1,400],
                    msg:"O aviso deve ter entre 1 e 400 caracteres. Favor verificar!"
                }
              }
          
        },

        UP:{
            type:sequelize.INTEGER,
            allowNull:true,
            defaultValue:0
        },
        CdMsgPai:{
            type:sequelize.INTEGER,
            allowNull:true
            
        }

    });

    Mensagem.associate=Models=>{

        Mensagem.belongsTo(Models.Usuario);

    };
        
    return Mensagem;

}



