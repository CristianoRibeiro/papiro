module.exports= (sequelize,DataTypes)=>{

    const Setor=sequelize.define('Setor',{

        IdSetor:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false
            
        },
        DsSetor:{
            type:sequelize.STRING,
            allowNull:false,
            validate:{
                len:{
                    args:[1,60],
                    msg:"A descrição de Setor deve ter entre 1 e 60 caracteres. Favor verificar!"
                }
              }
          
        },

    });

    Setor.associate=Models=>{

        Setor.belongsTo(Models.Filial);

    };
        
    return Setor;

}



