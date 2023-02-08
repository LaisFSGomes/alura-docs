import { MongoClient } from "mongodb";
import "dotenv/config.js";

const cliente = new MongoClient(process.env.MONGO_URL);

let documentosColecao;
let usuariosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");
  usuariosColecao = db.collection("usuarios");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log('erro na conexão do banco', erro);
}

export { documentosColecao, usuariosColecao };
