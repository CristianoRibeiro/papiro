import Conquista1 from '../Models/Conquista';

import Con from '../Models/ConquistasUsuario'


class ConquistaController{

async store(req,res){
   
    const conquista = Con.create(req.body);
    
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