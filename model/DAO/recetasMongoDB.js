import { ObjectId } from "mongodb"
import CnxMongoDB from '../DB.js'
import IngredientesMongoDB from "./ingredientesMongoDB.js"


class RecetasMongoDB {
    constructor() {
        this.ingredientesModel = new IngredientesMongoDB()
    }
    
    findReceta = async id => {
        if(!CnxMongoDB.connection) return {}
        let receta = await CnxMongoDB.db.collection("recetas").findOne({_id: ObjectId(id)})
        return receta
    } 
    
    findRecetas = async () => {
        if(!CnxMongoDB.connection) return []
        try {
            let recetas = await CnxMongoDB.db.collection('recetas').find({}).toArray()
            return recetas
        }
        catch {
            return []
        }
    } 
    
    saveReceta = async receta => {
        if(!CnxMongoDB.connection) return {}
        receta.likes = 0
        let listadoIngredientes = await this.ingredientesModel.findIngredientes()
        listadoIngredientes = listadoIngredientes.map((element) => {
            return element.nombre
        })
        receta.ingredientes.forEach(element => {
            let ingrediente = {nombre: element.nombre}
            if (!(listadoIngredientes.indexOf(ingrediente.nombre) > -1)) {
                this.ingredientesModel.saveIngrediente(ingrediente)
            }
        });
        await CnxMongoDB.db.collection("recetas").insertOne(receta)
        return receta
    }
    
    updateReceta = async (receta, id) => {
        if(!CnxMongoDB.connection) return {}
        await CnxMongoDB.db.collection('recetas').updateOne(
            {_id: ObjectId(id)},
            {$set: receta}
        )
        let recetaActualizado = await this.findReceta(id)
        return recetaActualizado
    }
    
    deleteReceta = async id => {
        if(!CnxMongoDB.connection) return {}
    
        let recetaEliminado = await this.findReceta(id)
        await CnxMongoDB.db.collection("recetas").deleteOne({_id: ObjectId(id)})
        return recetaEliminado
    }

    aumentarLikeReceta = async id => {
        if(!CnxMongoDB.connection) return {}
        await CnxMongoDB.db.collection('recetas').updateOne(
            {_id: ObjectId(id)},
            {$inc: {"Likes" : 1}}
        )
        let recetaActualizado = await this.findReceta(id)
        return recetaActualizado
    }
}

export default RecetasMongoDB