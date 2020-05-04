import TipoUsuario from '../Models/TipoUsuario';

class TipoUsuarioController{

async store(req,res){
   
    const tipoUsuario= TipoUsuario.create(req.body);

    return res.json(tipoUsuario);

}
}

export default new TipoUsuarioController();  