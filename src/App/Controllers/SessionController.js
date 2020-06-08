import jwt from 'jsonwebtoken';

import Usuario from '../Models/Usuario';
import * as Yup from 'yup';



class SessionController {

    async store(req,res){
    // const schema = Yup.object().shape({
    //     Usuario: Yup.string()
    //         .required(),
    //     Senha: Yup.string().required(),
    //     });

    //     if (!(await schema.isValid(req.body))) {
    //     return res.status(400).json({ error: 'Validation fails' });
    //     }
    const{username,password}=req.body;
    
    const usuario = await  Usuario.findOne({where:{username}},{
        attributes: ['username'],
    });

    
    if (!usuario){
        return res.status(401).json({"Error":"Usuário não encontrado no sistema, favor verificar"});
    }

  if(!(await usuario.checkPassword(password))){
        return res.status(401).json({"Error":"Senha Incorreta"});
  }
    // const {id,name}=usuario;

    return res.json({
        usuario,
        // usuario:{
        //     id, 
        //     name,
        //     email,
        // },
            token:jwt.sign({id},'e9a62a5c970dc3970af10c39a4965012',{expiresIn: "1d"}),
    });
    

    }


}

export default new SessionController();