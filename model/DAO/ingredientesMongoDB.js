import { ObjectId } from "mongodb"
import CnxMongoDB from '../DB.js'


class IngredientesMongoDB {

    saveIngrediente = async ingrediente => {
        if(!CnxMongoDB.connection) return {}
        await CnxMongoDB.db.collection("ingredientes").insertOne(ingrediente)
    }
    
    findIngrediente = async id => {
        if(!CnxMongoDB.connection) return {}
        let ingrediente = await CnxMongoDB.db.collection("ingredientes").findOne({_id: ObjectId(id)})
        return ingrediente
    } 

    findIngredientes = async () => {
        if(!CnxMongoDB.connection) return []
        try {
            let ingredientes = await CnxMongoDB.db.collection('ingredientes').find({}).toArray()
            ingredientes.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0))
            console.log(ingredientes);
            return ingredientes
        }
        catch (error){
            return []
        }
    }
}

export default IngredientesMongoDB