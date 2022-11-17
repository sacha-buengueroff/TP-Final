import { ObjectId } from "mongodb"
import CnxMongoDB from '../DB.js'


class UsuariosMongoDB {

    saveUsuario = async usuario => {
        if(!CnxMongoDB.connection) return {}
        await CnxMongoDB.db.collection("usuarios").insertOne(usuario)
    }
    
    findUsuario = async id => {
        if(!CnxMongoDB.connection) return {}
        let usuario = await CnxMongoDB.db.collection("usuarios").findOne({_id: ObjectId(id)})
        return usuario
    } 

    findUsuarios = async () => {
        if(!CnxMongoDB.connection) return []
        try {
            let usuarios = await CnxMongoDB.db.collection('usuarios').find({}).toArray()
            return usuarios
        }
        catch (error){
            return []
        }
    }
}

export default UsuariosMongoDB