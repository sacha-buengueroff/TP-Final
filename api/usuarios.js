import UsuariosFactoryDAO from '../model/DAO/UsuariosFactory.js'
import config from '../config.js'

class ApiUsuarios {
    
    constructor() {
        this.usuariosModel = UsuariosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }   

    obtenerUsuarios = async id => {
        return id? await this.usuariosModel.findUsuario(id) : await this.usuariosModel.findUsuarios()
    }

    guardarUsuario = async usuario => {
        return await this.usuariosModel.saveUsuario(ingrediente)
    }  
}

export default ApiUsuarios