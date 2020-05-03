import Filial from '../Models/Filial';

class FilialController{

async store(req,res){
   
    const filial= Filial.create(req.body);

    return res.json(filial);

}
}

export default new FilialController();  