module.exports= (sequelize,DataTypes)=>{

    const Cargo=sequelize.define('Cargo',{

        Id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false
        },
        DsCargo:{
            type:sequelize.STRING,
            allowNull:false,
            validate:{
                len:{
                    args:[1,60],
                    msg:"A descrição de cargo deve ter entre 1 e 60 caracteres. Favor verificar!"
                }
              }
          
        }
    });
        
    return Cargo;

}



