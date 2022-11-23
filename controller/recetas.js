import ApiRecetas from '../api/recetas.js'

class ControladorRecetas {
    
    constructor() {
        this.apiRecetas = new ApiRecetas()
    }
    getRecetas = async (req,res) => { 
        const { id } = req.params
        res.json(await this.apiRecetas.obtenerRecetas(id))
    }
    
    postReceta = async (req,res) => {
        const receta = req.body 
        res.json(await this.apiRecetas.guardarReceta(receta))
    }
    
    putReceta = async (req, res) => { 
        const { id } = req.params
        const receta = req.body
        res.json(await this.apiRecetas.actualizarReceta(receta, id))
    }
    
    deleteReceta = async (req, res) => { 
        const { id } = req.params
        res.json(await this.apiRecetas.eliminarReceta(id))
    }

    enviarReceta = async (req,res) => {
        const receta = req.body
        const { email } = req.params
        try {
            await this.apiRecetas.enviarReceta(email, receta)
            res.json({succes: "Email sent"})
        }
        catch (error) {
            res.json({error})
        }
    }
}


export default ControladorRecetas