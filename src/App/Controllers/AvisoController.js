import Aviso from '../Models/Aviso';

class AvisoController{

async store(req,res){
   
    const aviso= Aviso.create(req.body);

    return res.json(aviso);

}
}

export default new AvisoController();  