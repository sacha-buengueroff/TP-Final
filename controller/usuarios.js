import ApiUsuarios from '../api/usuarios.js'

class ControladorUsuarios {
    
    constructor() {
        this.apiUsuarios = new ApiUsuarios()
    }
    getUsuarios = async (req,res) => { 
        const { id } = req.params
        res.json(await this.apiUsuarios.obtenerUsuarios(id))
    }
    
    postUsuario = async (req,res) => {
        const usuario = req.body 
        res.json(await this.apiUsuarios.guardarUsuario(usuarios))
    }
}


export default ControladorUsuarios