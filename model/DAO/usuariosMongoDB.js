import CnxMongoDB from '../DB.js'


class UsuariosMongoDB {

    validarUsuario = async (username, password) => {
        if(!CnxMongoDB.connection) return {}
        try {
            let usuario = await CnxMongoDB.db.collection("usuarios").findOne({username, password})
            return usuario
        }
        catch(error) {
            return {error: error.message}
        }
    } 
}

export default UsuariosMongoDB