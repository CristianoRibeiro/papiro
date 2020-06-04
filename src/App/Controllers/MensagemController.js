import Mensagem from '../Models/Mensagem';

class MensagemController{

async store(req,res){
   
    const mensagem= Mensagem.create(req.body);

    return res.json(mensagem);

}

async ObterTop3Mensagens(req,res){
    
    const mensagens=await Mensagem.findAll({
    limit:3,
     where:{"CdMsgPai":null},
      order:[['Up','DESC']]
    })

    return res.json(mensagens);
}

}



export default new MensagemController();  