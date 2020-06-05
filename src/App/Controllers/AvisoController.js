import Aviso from '../Models/Aviso';

class AvisoController{

async store(req,res){
   
    const aviso= Aviso.create(req.body);

    return res.json(aviso);

}
    
async ObterTodosAvisos(req,res){
   
    const ListaAviso=await Aviso.findAll();
    return   res.json(ListaAviso);
}

async ObterAvisosAtivos(req,res){
   
    const ListaAvisos=await Aviso.findAll({where:{'IsAtivo':true}, order:[['updatedAt','DESC']]});
    return   res.json(ListaAvisos);
}
}

export default new AvisoController();  