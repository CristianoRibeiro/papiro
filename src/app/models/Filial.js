module.exports= (sequelize,DataTypes)=>{

    const Filial=sequelize.define('Filial',{

        IdFilial:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false
        },
        DsFilial:{
            type:sequelize.STRING,
            allowNull:false,
            validate:{
                len:{
                    args:[1,60],
                    msg:"A descrição de filial deve ter entre 1 e 60 caracteres. Favor verificar!"
                }
              }
          
        },

    });

    Filial.associate=Models=>{

        Filial.hasMany(Models.Setor);

    };
        
    return Filial;

}



