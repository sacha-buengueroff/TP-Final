import IngredientesFactoryDAO from '../model/DAO/ingredientesFactory.js'
import config from '../config.js'

class ApiIngredientes {
    
    constructor() {
        this.ingredientesModel = IngredientesFactoryDAO.get(config.MODO_PERSISTENCIA)
    }   

    obtenerIngredientes = async id => {
        if (id) {
            return await this.ingredientesModel.findIngrediente(id)

        }
        else {
            let ingredientes = await this.ingredientesModel.findIngredientes()
            ingredientes.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0))
            return ingredientes
        }
    }

    guardarIngrediente = async ingrediente => {
        return await this.ingredientesModel.saveIngrediente(ingrediente)
    }  
}

export default ApiIngredientes