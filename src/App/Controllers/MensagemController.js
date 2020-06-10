import { Op } from 'sequelize';

import Mensagem from '../Models/Mensagem';
import Usuario from '../Models/Usuario';
import UPUsuario from '../Models/UPUsuario';

class MensagemController{

async index(req, res){
    // const { page = 1 } = req.query;

    const mensagens = await Mensagem.findAll({
      where: {CdMsgPai: null},
      order: [
        ['createdAt', 'DESC'],
      ],
    //   attributes: ['id', 'date', 'past', 'cancelable'],
    //   limit: 5,
    //   offset: (page - 1) * 5,
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


async comentarios(req, res) {

    const id = parseInt(req.query.id);
    console.log(id)

    const comentario = await Mensagem.findAll({
        where: {
            CdMsgPai:id
        },
        order: [
          ['createdAt', 'DESC'],
        ],
        include: [
        {
            model: Usuario,
            as: 'Usuario',
            attributes: ['IdUsuario', 'username'],
        
        },
        ],
        
      });

    return res.json(comentario);

}


async upUsuario(req, res) {
        const up = await UPUsuario.create(
          req.body
        );
        console.log(up);
        return res.json({data: up});
   
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