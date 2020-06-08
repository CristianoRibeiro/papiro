import Usuario from '../Models/Usuario';
import bcrypt from 'bcryptjs';

class UsuarioController{

async store(req,res){
   
    
    const userAlredyExist = await Usuario.findOne({where:{username:req.body.username }});
    
    if(userAlredyExist) {
        return res.status(400).json({error:"Usuário já cadastrado para outro usuário, favor verificar!"});
    }

    // return res.json(req.body);
   
    const usuario= Usuario.create(req.body);
    return res.json({message: "Success"});
    

};

async ObterUsuarioNomePorId(req,res){

    const usuario= await Usuario.findOne({where:{IdUsuario:1},attributes:['Usuario', ]})

    return res.json(usuario.Usuario);

}

}

export default new UsuarioController();  