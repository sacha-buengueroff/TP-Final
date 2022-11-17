import RecetasMongoDB from './recetasMongoDB.js'

class RecetasFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MONGO' :
                console.log("**** Persistiendo Recetas  en MongoDB ****");
                return new RecetasMongoDB()
            default :
            console.log("**** Persistiendo Recetas en Default (MongoDB) ****");
                return new RecetasMongoDB()
        }
    }
}

export default RecetasFactoryDAO