import UPUsuario from '../Models/UPUsuario';

class UPUsuarioController{
  
  async store(req, res) {
        const up = UPUsuario.create(req.body);
        return res.json({data: up});

    }

}


export default UPUsuarioController;