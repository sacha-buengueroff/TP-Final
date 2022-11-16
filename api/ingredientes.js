import IngredientesFactoryDAO from '../model/DAO/ingredientesFactory.js'
import config from '../config.js'

class ApiIngredientes {
    
    constructor() {
        this.ingredientesModel = IngredientesFactoryDAO.get(config.MODO_PERSISTENCIA)
    }   

    obtenerIngredientes = async id => {
        return id? await this.ingredientesModel.findIngrediente(id) : await this.ingredientesModel.findIngredientes()
    }

    guardarIngrediente = async ingrediente => {
        return await this.ingredientesModel.saveIngrediente(ingrediente)
    }  
}

export default ApiIngredientes