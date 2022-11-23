import supertest from "supertest";
import { expect } from "chai";

import Server from "../server.js";
import config from "../config.js";

describe("test recetas endpoints", () => {
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

  describe("GET", () => {
    it("Debería retornar un ingrediente en caso de enviar un id valido", async () => {
      let id = "636ed6c83a5d7a99f04bbf17";

      let response = await request.get(`/ingredientes/${id}`);
      expect(response.status).to.eql(200);

      expect(response.body).to.include.keys(
        "nombre"
      );
    });

    it("Debería retornar error en caso de enviar un id invalido", async () => {
      let id = "12345";

      let response = await request.get(`/ingredientes/${id}`);
      expect(response.status).to.eql(200);

      expect(response.body).to.include.keys("error");
    });
  });
});
