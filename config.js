import dotenv from 'dotenv'

dotenv.config()

const PORT = 8080
const STRCNX = process.env.STRCNX || 'mongodb://127.0.0.1'
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MONGO'
const BASE = process.env.BASE || 'test'
const MAIL = process.env.MAIL
const MAIL_PASS = process.env.MAIL_PASS

export default {
    PORT,
    STRCNX,
    MODO_PERSISTENCIA,
    BASE,
    MAIL,
    MAIL_PASS
}
