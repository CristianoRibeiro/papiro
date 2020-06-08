import Usuario from '../Models/Usuario';

class UsuarioController{

async store(req,res){
   
    
    const userAlredyExist = await Usuario.findOne({where:{Usuario:req.body.usuario }});
    return res.json(userAlredyExist);
    
    // if(userAlredyExist) {
    //     return res.status(400).json({error:"E-mail já cadastrado para outro usuário, favor verificar!"});
    // }

   
    // const usuario= Usuario.create(req.body);
    // return res.json(usuario);
    

};

async ObterUsuarioNomePorId(req,res){

    const usuario= await Usuario.findOne({where:{IdUsuario:1},attributes:['Usuario', ]})

    return res.json(usuario.Usuario);

}

}

export default new UsuarioController();  