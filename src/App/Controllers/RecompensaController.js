import Recompensa from '../Models/Recompensa';
import Op from 'Sequelize'

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

async ObterRecompensasAtivas(req,res){
const recompensas=await Recompensa.findAll({

    where:{'DtConclusao':null},
    order:[['ValorPontuacao','DESC'],['createdAt','DESC']]


})
return res.json(recompensas);
}

async UltimaRecompensaConcluida(req,res){

    const ultimocontemplado=await Recompensa.findOne({
        where:{
            'DtConclusao': null
        },
        attributes:[
            'DsRecompensa']
        ,
        order:[['ValorPontuacao','DESC'],['createdAt','DESC']]
    
    })
    
    return res.json(ultimocontemplado.DsRecompensa);

}
}



export default new RecompensaController();  