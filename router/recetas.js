import express from 'express'
import ControladorRecetas from '../controller/recetas.js'


export class RouterRecetas {
    
    constructor() {
        this.router = express.Router()
        this.controladorRecetas = new ControladorRecetas()
    }

    start() {
        /* GET Recetas */
        this.router.get('/:id?', this.controladorRecetas.getRecetas)
        /* POST Recetas */
        this.router.post('/', this.controladorRecetas.postReceta)
        /* PUT Dar like */
        this.router.put('/darLike/:id', this.controladorRecetas.darLike)
        /* PUT Recetas */
        this.router.put('/:id', this.controladorRecetas.putReceta)
        /* DELETE Recetas */
        this.router.delete('/:id', this.controladorRecetas.deleteReceta)
        
        return this.router
    }
}