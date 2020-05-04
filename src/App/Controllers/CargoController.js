import Cargo from '../Models/Cargo';

class CargoController{

async store(req,res){
   
    const cargo= Cargo.create(req.body);

    return res.json(cargo);

}
}

export default new CargoController();  