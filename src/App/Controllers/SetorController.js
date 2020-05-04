import Setor from '../Models/Setor';

class SetorController{

async store(req,res){
   
    const setor= Setor.create(req.body);

    return res.json(setor);

}
}

export default new SetorController();  