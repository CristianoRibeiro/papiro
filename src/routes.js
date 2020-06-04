import { Router} from 'express';

import FilialController from './App/Controllers/FilialController';
import Cargo from  './App/Controllers/CargoController';
import Setor from './App/Controllers/SetorController';
import TipoUsuario from './App/Controllers/TipoUsuarioController';
import Usuario from './App/Controllers/UsuarioController';
import Pessoa from './App/Controllers/PessoaController';
import Mensagem from './App/Controllers/MensagemController';
import Recompensa from './App/Controllers/RecompensaController';
import Aviso from './App/Controllers/AvisoController';


const routes=new Router();

routes.get('/', (req,res)=>{

return res.send("Hello bitche");

})

routes.get('/Mensagem/ObterTop3Mensagens',Mensagem.ObterTop3Mensagens)
routes.get('/User/Username/Id',Usuario.ObterUsuarioNomePorId)
routes.get('/Aviso/ObterAvisosAtivos',Aviso.ObterAvisosAtivos)
routes.get('/Aviso/',Aviso.ObterTodosAvisos)
routes.post('/Aviso/Cadastrar', Aviso.store)
routes.post('/Recompensa/teste', Recompensa.store)
routes.get('/Recompensa/ObterTop3Recompensas', Recompensa.ObterAs3MaioresRecompensasAtivas)
routes.post('/Mensagem/teste', Mensagem.store)
routes.post('/Filial/teste', FilialController.store)
routes.post('/Cargo/teste',Cargo.store)
routes.post('/Setor/teste',Setor.store)
routes.post('/TipoUsuario/teste',TipoUsuario.store)
routes.post('/Pessoa/teste',Pessoa.store)
routes.post('/Usuario/teste',Usuario.store)


export default routes;  