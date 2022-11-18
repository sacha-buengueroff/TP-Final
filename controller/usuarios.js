import ApiUsuarios from '../api/usuarios.js'

class ControladorUsuarios {
    
    constructor() {
        this.apiUsuarios = new ApiUsuarios()
    }

    validarUsuario = async (req,res) => { 
        const { username, password } = req.body
        res.json(await this.apiUsuarios.validarUsuario(username, password))
    }

    enviarMailConfirmacion = async (req,res) => {
        const {email} = req.body
        try {
            await this.apiUsuarios.enviarMailConfirmacion(email)
            res.json({succes: "Email sent"})
        }
        catch (error) {
            res.json({error})
        }
    }
}


export default ControladorUsuarios