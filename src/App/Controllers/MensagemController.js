import Mensagem from '../Models/Mensagem';

class MensagemController{

async store(req,res){
   
    const mensagem= Mensagem.create(req.body);

    return res.json(mensagem);

}
}

export default new MensagemController();  