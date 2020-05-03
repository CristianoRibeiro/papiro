import Sequelize from 'sequelize';

import User from '../App/Models/User';
import Aviso from '../App/Models/Aviso';
import Cargo from '../App/Models/Cargo';
import Filial from '../App/Models/Filial';
import Mensagem from '../App/Models/Mensagem';
import Pessoa from '../App/Models/Pessoa';
import Recompensa from '../App/Models/Recompensa';
import Setor from '../App/Models/Setor';
import TipoUsuario from '../App/Models/TipoUsuario';
import Usuario from '../App/Models/Usuario';


import databaseConfig from '../config/database';

const models=[User,Aviso,Cargo,Filial,Mensagem,Pessoa,Recompensa,Setor,TipoUsuario,Usuario];    

class Database{

    constructor(){

        this.init();    

    }   

    init(){

        this.connection=new Sequelize(databaseConfig);
        models
        .map(Model => Model.init(Sequelize=this.connection))
        .map(Model=>Model.associate &&Model.associate(this.connection.models));
        
        
    }




}

export default new Database();