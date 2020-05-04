import Usuario from '../Models/Usuario';

class UsuarioController{

async store(req,res){
   
    const usuario= Usuario.create(req.body);

    return res.json(usuario);

}
}

export default new UsuarioController();  