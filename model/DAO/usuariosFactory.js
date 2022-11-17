import UsuariosMongoDB from './usuariosMongoDB.js'

class UsuariosFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MONGO' :
                console.log("**** Persistiendo Usuarios en MongoDB ****");
                return new UsuariosMongoDB()
            default :
            console.log("**** Persistiendo Usuarios en Default (MongoDB) ****");
                return new UsuariosMongoDB()
        }
    }
}

export default UsuariosFactoryDAO