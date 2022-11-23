import { ObjectId } from "mongodb";
import CnxMongoDB from "../DB.js";

class IngredientesMongoDB {
  saveIngrediente = async (ingrediente) => {
    if (!CnxMongoDB.connection) return {};
    try {
      await CnxMongoDB.db.collection("ingredientes").insertOne(ingrediente);
    } catch (error) {
      return { error: error.message };
    }
  };

  findIngrediente = async (id) => {
    if (!CnxMongoDB.connection) return {};
    try {
      let ingrediente = await CnxMongoDB.db
        .collection("ingredientes")
        .findOne({ _id: ObjectId(id) });
      return ingrediente;
    } catch (error) {
      return { error: error.message };
    }
  };

  findIngredientes = async () => {
    if (!CnxMongoDB.connection) return [];
    try {
      let ingredientes = await CnxMongoDB.db
        .collection("ingredientes")
        .find({})
        .toArray();
      return ingredientes;
    } catch (error) {
      return { error: error.message };
    }
  };
}

export default IngredientesMongoDB;
