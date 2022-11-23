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

  describe("GET", async () => {
    it("Debería retornar una receta en caso de enviar un id valido", async () => {
      let id = "636ed70260d1feb9c3509f47";

      let response = await request.get(`/recetas/${id}`);
      expect(response.status).to.eql(200);

      expect(response.body).to.include.keys(
        "categoria",
        "descripcion",
        "momento",
        "titulo",
        "ingredientes"
      );
    });

    it("Debería retornar error en caso de enviar un id invalido", async () => {
      let id = "123";

      let response = await request.get(`/recetas/${id}`);
      expect(response.status).to.eql(200);

      expect(response.body).to.include.keys("error");
    });

    it("Debería retornar todas las recetas en caso de no enviar un parametro", async () => {
      let response = await request.get("/recetas");
      expect(response.status).to.eql(200);

      let recetas = response.body;
      recetas.forEach((receta) => {
        expect(receta).to.include.keys(
          "categoria",
          "descripcion",
          "momento",
          "titulo",
          "ingredientes"
        );
      });
    });
  });

  describe("POST", () => {
    it("Debería retornar una receta al agregarla", async () => {
      const receta = {
        titulo: "Hojaldres de queso y setas",
        ingredientes: [
          { nombre: "Masa de hojaldre", cantidad: "1 unidades" },
          { nombre: "Champiñon", cantidad: "100g" },
          { nombre: "Diente de ajo", cantidad: "1 unidad" },
          { nombre: "Queso mozarella", cantidad: "50g" },
          { nombre: "Queso cheddar", cantidad: "50g" },
        ],
        descripcion:
          "Cocinar los champiñones en una sartén con un diente de ajo picado. Estirar la masa de hojaldre y colocar los ingredientes en el centro. Doblar la masa para cubrir los ingredientes. Hornear a 180 ºC hasta que esté dorado el hojaldre.",
        categoria: "Brunch",
        momento: "Brunch",
      };
      let response = await request.post("/recetas").send(receta);
      expect(response.status).to.eql(200);
      expect(response.body).to.include.keys(
        "categoria",
        "descripcion",
        "momento",
        "titulo",
        "ingredientes"
      );
    });

    it("Debería retornar succes en caso de enviar la receta por mail", async () => {
      let data = {
        titulo: "Hojaldres de queso y setas",
        ingredientes: [
          { nombre: "Masa de hojaldre", cantidad: "1 unidades" },
          { nombre: "Champiñon", cantidad: "100g" },
          { nombre: "Diente de ajo", cantidad: "1 unidad" },
          { nombre: "Queso mozarella", cantidad: "50g" },
          { nombre: "Queso cheddar", cantidad: "50g" },
        ],
        descripcion:
          "Cocinar los champiñones en una sartén con un diente de ajo picado. Estirar la masa de hojaldre y colocar los ingredientes en el centro. Doblar la masa para cubrir los ingredientes. Hornear a 180 ºC hasta que esté dorado el hojaldre.",
        categoria: "Brunch",
        momento: "Brunch",
      };

      let response = await request
        .post("/recetas/enviarReceta/sachabuengue@gmail.com")
        .send(data);
      expect(response.status).to.eql(200);

      expect(response.body).to.include.keys("succes");
    });

    it("Debería retornar error en caso de no poder enviar el mail porque recibe una receta incorrecta", async () => {
      let data = {
        titulo: "Hojaldres de queso y setas",
        noIngredientes: [
          { nombre: "Masa de hojaldre", cantidad: "1 unidades" },
          { nombre: "Champiñon", cantidad: "100g" },
          { nombre: "Diente de ajo", cantidad: "1 unidad" },
          { nombre: "Queso mozarella", cantidad: "50g" },
          { nombre: "Queso cheddar", cantidad: "50g" },
        ],
        descripcion:
          "Cocinar los champiñones en una sartén con un diente de ajo picado. Estirar la masa de hojaldre y colocar los ingredientes en el centro. Doblar la masa para cubrir los ingredientes. Hornear a 180 ºC hasta que esté dorado el hojaldre.",
        categoria: "Brunch",
        momento: "Brunch",
      };

      let response = await request
        .post("/recetas/enviarReceta/sachabuengue@gmail.com")
        .send(data);
      expect(response.status).to.eql(200);

      expect(response.body).to.include.keys("error");
    });

    it("Debería retornar error en caso de no poder enviar el mail porque recibe un mail incorrecto", async () => {
      let data = {
        titulo: "Hojaldres de queso y setas",
        noIngredientes: [
          { nombre: "Masa de hojaldre", cantidad: "1 unidades" },
          { nombre: "Champiñon", cantidad: "100g" },
          { nombre: "Diente de ajo", cantidad: "1 unidad" },
          { nombre: "Queso mozarella", cantidad: "50g" },
          { nombre: "Queso cheddar", cantidad: "50g" },
        ],
        descripcion:
          "Cocinar los champiñones en una sartén con un diente de ajo picado. Estirar la masa de hojaldre y colocar los ingredientes en el centro. Doblar la masa para cubrir los ingredientes. Hornear a 180 ºC hasta que esté dorado el hojaldre.",
        categoria: "Brunch",
        momento: "Brunch",
      };

      let response = await request
        .post("/recetas/enviarReceta/sachabuenguegmail.com")
        .send(data);
      expect(response.status).to.eql(200);

      expect(response.body).to.include.keys("error");
    });
  });

  describe("PUT", () => {
    it("Debería retornar error en caso de intentar modificar una receta inexistente", async () => {
      let data = {
        titulo: "Hojaldres de queso y setas",
        noIngredientes: [
          { nombre: "Masa de hojaldre", cantidad: "1 unidades" },
          { nombre: "Champiñon", cantidad: "100g" },
          { nombre: "Diente de ajo", cantidad: "1 unidad" },
          { nombre: "Queso mozarella", cantidad: "50g" },
          { nombre: "Queso cheddar", cantidad: "50g" },
        ],
        descripcion:
          "Cocinar los champiñones en una sartén con un diente de ajo picado. Estirar la masa de hojaldre y colocar los ingredientes en el centro. Doblar la masa para cubrir los ingredientes. Hornear a 180 ºC hasta que esté dorado el hojaldre.",
        categoria: "Brunch",
        momento: "Brunch",
      };

      let response = await request.put("/recetas/123").send(data);
      expect(response.status).to.eql(200);
      expect(response.body).to.include.keys("error");
    });
  });

  describe("DELETE", () => {
    it("Debería retornar error en caso de intentar eliminar una receta inexistente", async () => {
      let response = await request.put("/recetas/123")
      expect(response.status).to.eql(200);
      expect(response.body).to.include.keys("error");
    });
  });
});
