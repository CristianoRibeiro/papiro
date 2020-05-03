import { Router} from 'express';


import UserController from './App/Controllers/UserController';
import SessionController from './App/Controllers/SessionController';
import FilialController from './App/Controllers/FilialController';


const routes=new Router();

routes.get('/', (req,res)=>{

return res.send("Hello bitche");

})

routes.post('/testeluis', FilialController.store)

routes.post('/users', UserController.store)
routes.post('/sessions',SessionController.store)


export default routes;  