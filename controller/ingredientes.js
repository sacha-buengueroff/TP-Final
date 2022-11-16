import ApiIngredientes from '../api/ingredientes.js'

class ControladorIngredientes {
    
    constructor() {
        this.apiIngredientes = new ApiIngredientes()
    }
    getIngredientes = async (req,res) => { 
        const { id } = req.params
        res.json(await this.apiIngredientes.obtenerIngredientes(id))
    }
    
    postIngrediente = async (req,res) => {
        const ingrediente = req.body 
        res.json(await this.apiIngredientes.guardarIngrediente(ingrediente))
    }
}


export default ControladorIngredientes