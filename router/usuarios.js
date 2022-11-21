import express from 'express'
import ControladorUsuarios from '../controller/usuarios.js'


export class RouterUsuarios {
    
    constructor() {
        this.router = express.Router()
        this.controladorUsuarios = new ControladorUsuarios()
    }

    start() {
        /* POST Usuarios */
        this.router.post('/', this.controladorUsuarios.validarUsuario)
        /* GET Enviar mail */
        this.router.post('/enviarMail', this.controladorUsuarios.enviarMailConfirmacion)
        
        return this.router
    }
}