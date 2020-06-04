import Usuario from '../Models/Usuario';

class UsuarioController{

async store(req,res){
   
    const usuario= Usuario.create(req.body);

    return res.json(usuario);

}

async ObterUsuarioNomePorId(req,res){

    const usuario= await Usuario.findOne({where:{IdUsuario:1},attributes:['Usuario']})

    return res.json(usuario.Usuario);

}

}

export default new UsuarioController();  