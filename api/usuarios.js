import UsuariosFactoryDAO from '../model/DAO/UsuariosFactory.js'
import config from '../config.js'
import nodemailer from 'nodemailer'

class ApiUsuarios {
    
    constructor() {
        this.usuariosModel = UsuariosFactoryDAO.get(config.MODO_PERSISTENCIA)
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: config.MAIL,
            pass: config.MAIL_PASS
            }
        })
    }   

    validarUsuario = async (username, password) => {
        let result = await this.usuariosModel.validarUsuario(username, password)
        if (result != null) {
            result = {"permiso": "concedido"}
        }
        else {
            result = {"permiso": "denegado"}
        }
        return result
    } 

    enviarMailConfirmacion = async email => {
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
                    <h2>Hola, bienvenidx! </h2>
                    <p>Estamos felices de que te hayas suscripto a Hello Kitchen. </p>
                    </body>
                    </html>` 
        }

        return this.transporter.sendMail(mailOptions)
    }
}

export default ApiUsuarios