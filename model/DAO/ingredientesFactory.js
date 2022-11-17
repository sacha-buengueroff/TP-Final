import IngredientesMongoDB from './ingredientesMongoDB.js'

class IngredientesFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MONGO' :
                console.log("**** Persistiendo Ingredientes en MongoDB ****");
                return new IngredientesMongoDB()
            default :
            console.log("**** Persistiendo Ingredientes en Default (MongoDB) ****");
                return new IngredientesMongoDB()
        }
    }
}

export default IngredientesFactoryDAO