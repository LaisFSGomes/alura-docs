const conexoesDocumentos = [];

function encontrarConexao(nomeDocumento, nomeUsuario) {
  return conexoesDocumentos.find(
    (conexao) =>
      conexao.nomeDocumento === nomeDocumento &&
      conexao.nomeUsuario === nomeUsuario
  );
}

function adicionarConexao(conexao) {
  conexoesDocumentos.push(conexao);
}

function obterUsuariosDocumento(nomeDocumento) {
  const usuarios = conexoesDocumentos.filter(
    (conexao) => conexao.nomeDocumento === nomeDocumento
  );
  return usuarios.map((usuario) => usuario.nomeUsuario);
}

function removerConexao({ nomeDocumento, nomeUsuario }) {
  const indice = conexoesDocumentos.findIndex(() => {
    return nomeDocumento === nomeDocumento && nomeUsuario === nomeUsuario;
  });
  if (indice !== -1) {
    conexoesDocumentos.splice(indice, 1);
  }
  //   console.log(conexoesDocumentos)
}

export {
  adicionarConexao,
  obterUsuariosDocumento,
  removerConexao,
  encontrarConexao,
};
