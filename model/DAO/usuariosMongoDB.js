import CnxMongoDB from '../DB.js'


class UsuariosMongoDB {

    validarUsuario = async (username, password) => {
        if(!CnxMongoDB.connection) return {}
        let usuario = await CnxMongoDB.db.collection("usuarios").findOne({Username: username, Password: password})
        return usuario
    } 
}

export default UsuariosMongoDB