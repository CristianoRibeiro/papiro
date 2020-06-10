import Mensagem from '../Models/Mensagem';
import Usuario from '../Models/Usuario';

class MensagemController{

async index(req, res){
    const { page = 1 } = req.query;

    const mensagens = await Mensagem.findAll({
      
      order: [
        ['createdAt', 'DESC'],
      ],
    //   attributes: ['id', 'date', 'past', 'cancelable'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Usuario,
          as: 'Usuario',
          attributes: ['IdUsuario', 'username'],
        
        },
      ],
    });

    return res.json(mensagens);
}


async store(req,res){
   
    const mensagem = Mensagem.create(req.body);

    return res.json({data: mensagem});

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