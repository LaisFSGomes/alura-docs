import { criaHashESalSenha } from "../utils/criaHashESalSenha.js";
import { usuariosColecao } from "./dbConnect.js";
function encontrarUsuario(nome) {
  const usuario = usuariosColecao.findOne({
    nome,
  });
  return usuario;
}

function cadastrarUsuario({ nome, senha }) {
  const { hashSenha, salSenha } = criaHashESalSenha(senha);

  return usuariosColecao.insertOne({ nome, hashSenha, salSenha });
}

export { cadastrarUsuario, encontrarUsuario };
