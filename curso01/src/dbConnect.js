import { MongoClient } from "mongodb";
import "dotenv/config.js";

const cliente = new MongoClient(process.env.MONGO_URL);
let documentosColecao;
try {
  await cliente.connect();
  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");
  console.log("Conectado ao banco de dados")
} catch (error) {
  console.log(error);
}
export { documentosColecao };