import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import Usuario from '../Models/Usuario';
import * as Yup from 'yup';



class SessionController {

    async store(req,res){
   
    const{username,password}=req.body;
    
    const usuario = await  Usuario.findOne({where:{username}});

    // return res.json({erro: 'sdsdds'})
    
    if (!usuario){
        return res.status(401).json({"Error":"Usuário não encontrado no sistema, favor verificar"});
    }

  if(!(await usuario.checkPassword(password))){
        return res.status(401).json({"Error":"Senha Incorreta"});
  }

    const { IdUsuario } = usuario;
    return res.json({
        usuario,
        token:jwt.sign({IdUsuario},'e9a62a5c970dc3970af10c39a4965012',{expiresIn: "1d"}),
    });
    

    }


}

export default new SessionController();