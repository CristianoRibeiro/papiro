import jwt from 'jsonwebtoken';

import User from '../Models/User';


class SessionController {

    async store(req,res){

    const{email,password}=req.body;
    
    const user = await  User.findOne({where:{email}});

    
    if (!user){
        return res.status(401).json({"Error":"Usuário não encontrado no sistema, favor verificar"});
    }

  if(!(await user.checkPassword(password))){
        return res.status(401).json({"Error":"Senha Incorreta"});
  }
    const {id,name}=user;

    return res.json({
        user:{
            id, 
            name,
            email,
        },
            token:jwt.sign({id},'e9a62a5c970dc3970af10c39a4965012',{expiresIn: "1d"}),
    });
    

    }


}

export default new SessionController();