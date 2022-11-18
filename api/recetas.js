import RecetasFactoryDAO from '../model/DAO/recetasFactory.js'
import config from '../config.js'

class ApiRecetas {
    
    constructor() {
        this.recetasModel = RecetasFactoryDAO.get(config.MODO_PERSISTENCIA)
    }   

    obtenerRecetas = async id => {
        return id? await this.recetasModel.findReceta(id) : await this.recetasModel.findRecetas()
    }

    guardarReceta = async receta => {
        return await this.recetasModel.saveReceta(receta)
    }  
    
    actualizarReceta = async (receta, id) => {
        return await this.recetasModel.updateReceta(receta, id)
    }
       
    eliminarReceta = async id => {
       return this.recetasModel.deleteReceta(id)
    }

    darLike = async id => {
        return await this.recetasModel.aumentarLikeReceta(id)
    }
}

export default ApiRecetas