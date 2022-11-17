import express from 'express'
import ControladorUsuarios from '../controller/usuarios.js'


export class RouterUsuarios {
    
    constructor() {
        this.router = express.Router()
        this.controladorUsuarios = new ControladorUsuarios()
    }

    start() {
        /* GET Usuarios */
        this.router.get('/:id?', this.controladorUsuarios.getUsuarios)
        /* POST Usuarios */
        this.router.post('/', this.controladorUsuarios.postUsuario)
        
        return this.router
    }
}