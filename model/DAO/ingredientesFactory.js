import IngredientesMongoDAO from './ingredientesMongoDB.js'

class IngredientesFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MONGO' :
                console.log("**** Persistiendo Ingredientes en MongoDB ****");
                return new IngredientesMongoDAO()
            default :
            console.log("**** Persistiendo Ingredientes en Default (Memoria) ****");
                return new IngredientesMemDAO()
        }
    }
}

export default IngredientesFactoryDAO