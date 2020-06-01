import Usuario from '../models/Usuario';

class UsuarioController{

async store(req,res){

    const User1=Usuario.create(req.body);
    return res.json(User1);
      
        
    }



}

export default new UsuarioController();


