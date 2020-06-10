import Conquista1 from '../Models/Conquista';


class ConquistaController{

async store(req,res){
   
    const conquista= Conquista.create(req.body);
    
    return res.json(conquista);

}
    
async ConsultarConquistaPorFiltro(req,res){

    const filtro={
        NoConsulta:req.body.NoConquista,
        ValorConquista:req.body.ValorConquista,
        DataInício:req.body.DataInício,
        Status:req.body.Status
    }   
    const conquitas=await Conquista.findAll();
    return res.json(conquitas);
}

}

export default new ConquistaController();  