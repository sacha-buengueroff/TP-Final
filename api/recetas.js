import RecetasFactoryDAO from '../model/DAO/recetasFactory.js'
import config from '../config.js'
import nodemailer from 'nodemailer'

class ApiRecetas {
    
    constructor() {
        this.recetasModel = RecetasFactoryDAO.get(config.MODO_PERSISTENCIA)
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: config.MAIL,
            pass: config.MAIL_PASS
            }
        })
    }   

    obtenerRecetas = async id => {
        return id? await this.recetasModel.findReceta(id) : await this.recetasModel.findRecetas()
    }

    guardarReceta = async receta => {
        return await this.recetasModel.saveReceta(receta)
    }  
    
    actualizarReceta = async (receta, id) => {
        return await this.recetasModel.updateReceta(receta, id)
    }
       
    eliminarReceta = async id => {
       return this.recetasModel.deleteReceta(id)
    }

    enviarReceta = async (email,receta) => {
        let ingredientes = ""
        receta.ingredientes.forEach((ingrediente) => {
            ingredientes += `<li>${ingrediente.nombre}: ${ingrediente.cantidad}</li>`
        })
        var mailOptions = {
            from: 'hellokitchenort@gmail.com',
            to: email,
            subject: 'Bienvenix a Hello Kitchen',
            html: `<!DOCTYPE html>
                    <html>
                    <head>
                    <meta charset="utf-8">
                    <meta http-equiv="x-ua-compatible" content="ie=edge">
                    <title>Welcome Email</title>
                    </head>
                    <body>
                    <h2>${receta.titulo}</h2>
                    <ul>${ingredientes}</ul>
                    <p>${receta.descripcion}</p>
                    </body>
                    </html>` 
        }
        return this.transporter.sendMail(mailOptions)
    } 
}

export default ApiRecetas