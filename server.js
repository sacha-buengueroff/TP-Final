import express from "express";
import { RouterRecetas } from "./router/recetas.js";
import { RouterIngredientes } from "./router/ingredientes.js";
import { RouterUsuarios } from "./router/usuarios.js";
import CnxMongoDB from "./model/DB.js";
import config from "./config.js";
import cors from "cors";
import { Timestamp } from "mongodb";

class Server {
  constructor(port, persistencia) {
    this.app = express();
    this.port = port;
    this.persistencia = persistencia;
  }

  async start() {
    this.app.use(cors());
    this.app.use(express.static("public"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    /* --------------------------------------------------------------- */
    /*           ZONA DE RUTAS MANEJADAS POR EL ROUTER                 */
    /* --------------------------------------------------------------- */

    this.app.use("/recetas", new RouterRecetas().start());
    this.app.use("/ingredientes", new RouterIngredientes().start());
    this.app.use("/usuarios", new RouterUsuarios().start());

    /* --------------------------------------------------------------- */
    /*                         SERVIDOR LISTEN                         */
    /* --------------------------------------------------------------- */

    if (config.MODO_PERSISTENCIA == "MONGO") {
      await CnxMongoDB.conectar();
    }

    this.server = this.app.listen(this.port, () =>
      console.log(`Servidor express escuchando en el puerto ${this.port}`)
    );
    this.server.on("error", (error) =>
      console.log(`Error en servidor: ${error.message}`)
    );

    return this.app
  }

  async stop() {
    this.server.close()
    await CnxMongoDB.desconectar()
}
}

export default Server
