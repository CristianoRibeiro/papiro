import Recompensa from '../Models/Recompensa';

class RecompensaController{

async store(req,res){
   
    const recompesa= Recompensa.create(req.body);

    return res.json(recompesa);

}
}

export default new RecompensaController();  