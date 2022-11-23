import supertest from "supertest";
import { expect } from "chai";

import Server from "../server.js";
import config from "../config.js";

describe("test usuarios endpoints", () => {
  let server;
  let app;

  let request;
  before(async () => {
    server = new Server(8081, config.MODO_PERSISTENCIA);
    app = await server.start();

    request = supertest(app);
  });

  after(async () => {
    await server.stop();
  });

  describe("POST", () => {
    it("Debería retornar succes en caso de enviar el mail", async () => {
      let data = { email: "sachabuengue@gmail.com" };

      let response = await request.post("/usuarios/enviarMail").send(data);
      expect(response.status).to.eql(200);

      expect(response.body).to.include.keys("succes");
    });

    it("Debería retornar error en caso de no poder enviar el mail", async () => {
      let data = { email: "sachabuenguegmail.com" };

      let response = await request.post("/usuarios/enviarMail").send(data);
      expect(response.status).to.eql(200);

      expect(response.body).to.include.keys("error");
    });

    it("Debería retornar permiso denegado en caso de no poder verificar las credenciales", async () => {
      let data = { username: "sacha", password: "contraseñaFalsa" };

      let response = await request.post("/usuarios").send(data);
      expect(response.status).to.eql(200);

      expect(response.body.permiso).to.eql("denegado");
    });

    it("Debería retornar permiso concedido en caso de poder verificar las credenciales", async () => {
      let data = { username: "sacha", password: "hola123" };

      let response = await request.post("/usuarios").send(data);
      expect(response.status).to.eql(200);

      expect(response.body.permiso).to.eql("concedido");
    });
  });
});
