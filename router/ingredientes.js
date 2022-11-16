import express from 'express'
import ControladorIngredientes from '../controller/ingredientes.js'


export class RouterIngredientes {
    
    constructor() {
        this.router = express.Router()
        this.controladorIngredientes = new ControladorIngredientes()
    }

    start() {
        /* GET Ingredientes */
        this.router.get('/:id?', this.controladorIngredientes.getIngredientes)
        /* POST Ingredientes */
        this.router.post('/', this.controladorIngredientes.postIngrediente)
        
        return this.router
    }
}