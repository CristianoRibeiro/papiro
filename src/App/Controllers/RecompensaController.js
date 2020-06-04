import Recompensa from '../Models/Recompensa';

class RecompensaController{

async store(req,res){
   
    const recompesa= Recompensa.create(req.body);

    return res.json(recompesa);

}

async ObterAs3MaioresRecompensasAtivas(req,res){

const recompensas=await Recompensa.findAll({
    limit:5,
 where:{'DtConclusao':null},
 order:[['ValorPontuacao','DESC']]
})

return res.json(recompensas);

}
}

export default new RecompensaController();  