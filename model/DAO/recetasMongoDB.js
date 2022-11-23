import { ObjectId } from "mongodb"
import CnxMongoDB from '../DB.js'
import IngredientesMongoDB from "./ingredientesMongoDB.js"


class RecetasMongoDB {
    constructor() {
        this.ingredientesModel = new IngredientesMongoDB()
    }
    
    findReceta = async id => {
        if(!CnxMongoDB.connection) return {}
        try {
            let receta = await CnxMongoDB.db.collection("recetas").findOne({_id: ObjectId(id)})
            return receta
        }
        catch (error) {
            return {error: error.message}
        }
    } 
    
    findRecetas = async () => {
        if(!CnxMongoDB.connection) return []
        try {
            let recetas = await CnxMongoDB.db.collection('recetas').find({}).toArray()
            return recetas
        }
        catch (error){
            return {error: error.message}
        }
    } 
    
    saveReceta = async receta => {
        if(!CnxMongoDB.connection) return {}
        try {
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
        catch (error) {
            return {error: error.message}
        }
    }
    
    updateReceta = async (receta, id) => {
        if(!CnxMongoDB.connection) return {}
        try {
            await CnxMongoDB.db.collection('recetas').updateOne(
                {_id: ObjectId(id)},
                {$set: receta}
            )
            receta.ingredientes.forEach(element => {
                let ingrediente = {nombre: element.nombre}
                if (!(listadoIngredientes.indexOf(ingrediente.nombre) > -1)) {
                    this.ingredientesModel.saveIngrediente(ingrediente)
                }
            })
            let recetaActualizado = await this.findReceta(id)
            return recetaActualizado
        }
        catch(error) {
            return {error: error.message}
        }
    }
    
    deleteReceta = async id => {
        if(!CnxMongoDB.connection) return {}
        try {
            let recetaEliminado = await this.findReceta(id)
            await CnxMongoDB.db.collection("recetas").deleteOne({_id: ObjectId(id)})
            let recetas = await CnxMongoDB.db.collection('recetas').find({}).toArray()
            await this.deleteIngredientesInutilizados(recetaEliminado, recetas) 
            return recetaEliminado
        }
        catch(error) {
            return {error: error.message}
        }
    }

    deleteIngredientesInutilizados = async (recetaEliminado, recetas) => {
        try {
            recetaEliminado.ingredientes.forEach(async (ingrediente) => {
                let i = 0
                let encontrado = false
                while (!encontrado && i < recetas.length) {
                    let receta = recetas[i]
                    let ingredientes = receta.ingredientes.map((ingrediente) => ingrediente.nombre)
                    if (ingredientes.indexOf(ingrediente.nombre) != -1) {
                        encontrado = true
                    }
                    i++
                }
                if (!encontrado) {
                    await CnxMongoDB.db.collection("ingredientes").deleteOne({nombre: ingrediente.nombre})
                }
            })
        }
        catch(error) {
            return {error: error.message}
        }
    }
}

export default RecetasMongoDB