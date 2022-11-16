import RecetasMongoDAO from './recetasMongoDB.js'

class RecetasFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MONGO' :
                console.log("**** Persistiendo Recetas  en MongoDB ****");
                return new RecetasMongoDAO()
            default :
            console.log("**** Persistiendo Recetas en Default (Memoria) ****");
                return new RecetasMemDAO()
        }
    }
}

export default RecetasFactoryDAO