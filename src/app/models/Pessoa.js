module.exports= (sequelize,DataTypes)=>{

    const Pessoa =sequelize.define('Pessoa',{

        IdPessoa:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false
        },
        NoPessoa:{
            type:sequelize.STRING(60),
            allowNull:false,
            validate:{
                len:{
                    args:[1,60],
                    msg:"O nome da pessoa deve ter entre 1 e 60 caracteres. Favor verificar!"
                }
              }
          
        },
        CPF:{
            type:Sequelize.STRING(11),
            allowNull:false,
            unique:true,
            len:{
              args:[11,11],
              msg:"O CPF, deve ser um CPF válido, sendo inserido apenas por números. Favor verificar."
            }
          },
    
          Email:{
            type:Sequelize.STRING(80),
            allowNull:false,
            unique:true,
            len:{
              args:[10,80],
              msg:"O email, deve ser um email válido com no máximo de 80 caracteres. Favor verificar"
            }
          },
        
          Sexo:{
            allowNull:false
          },

    });

    Pessoa.associate=Models=>{

        Pessoa.belongsTo(Models.Setor);
        Pessoa.belongsTo(Models.Cargo);
        Pessoa.hasOne(Models.Usuario);

    };
        
    return Pessoa;

}



