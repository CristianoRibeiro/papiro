import User from '../Models/User';


class UserController{

async store(req,res){
    const userAlredyExist= await User.findOne({where:{email:req.body.email  }});
    if(userAlredyExist) {
        return res.status(400).json({error:"E-mail já cadastrado para outro usuário, favor verificar!"});
    }
    const user= User.create(req.body);
    return res.json(user);
    };
}

export default new UserController();