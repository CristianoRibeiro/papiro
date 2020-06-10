import { Router} from 'express';

import FilialController from './App/Controllers/FilialController';
import Cargo from  './App/Controllers/CargoController';
import Setor from './App/Controllers/SetorController';
import TipoUsuario from './App/Controllers/TipoUsuarioController';
import Session from './App/Controllers/SessionController';

import Usuario from './App/Controllers/UsuarioController';
import Pessoa from './App/Controllers/PessoaController';
import Mensagem from './App/Controllers/MensagemController';
import Recompensa from './App/Controllers/RecompensaController';
import Aviso from './App/Controllers/AvisoController';
import Conquista from './App/Controllers/ConquistaController';


const routes=new Router();

routes.get('/', (req,res)=>{

return res.send("Hello bitche");

})


routes.post('/sessions',Session.store)


routes.post('/Usuario',Usuario.store)

routes.get('/User/Username/Id',Usuario.ObterUsuarioNomePorId)


routes.post('/TipoUsuario/teste',TipoUsuario.store)
routes.post('/Pessoa/teste',Pessoa.store)


routes.get('/Mensagem/ObterTop3Mensagens',Mensagem.ObterTop3Mensagens)
routes.post('/Mensagem/teste', Mensagem.store)

routes.get('/Aviso/ObterAvisosAtivos',Aviso.ObterAvisosAtivos)
routes.get('/Aviso/',Aviso.ObterTodosAvisos)
routes.post('/Aviso/Cadastrar', Aviso.store)

routes.post('/Recompensa/teste', Recompensa.store)
routes.get('/Recompensa/ObterTop3Recompensas', Recompensa.ObterAs3MaioresRecompensasAtivas)
routes.get('/Recompensa/ListarRecompensas',Recompensa.ObterRecompensasAtivas)
routes.get('/Recompensa/UltimaRecompensaConcluida',Recompensa.UltimaRecompensaConcluida)

routes.post('/Conquista/ConsultarConquistaPorFiltro/',Conquista.ConsultarConquistaPorFiltro)


routes.post('/Filial/teste', FilialController.store)

routes.post('/Cargo/teste',Cargo.store)

routes.post('/Setor/teste',Setor.store)



export default routes;  