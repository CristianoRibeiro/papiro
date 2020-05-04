import Pessoa from '../Models/Pessoa';

class PessoaController{

async store(req,res){
   
    const pessoa= Pessoa.create(req.body);

    return res.json(pessoa);

}
}

export default new PessoaController();  