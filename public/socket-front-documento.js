import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nomeDocumento) {
  socket.emit("selecionar_documento", nomeDocumento, (texto) => {
    atualizaTextoEditor(texto);
  });
}
function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

function emitirExcluirDocument(nomeDocumento) {
  socket.emit("excluir_documento", nomeDocumento);
}

socket.on("excluir_documento_sucesso", (nome) => {
    alertarERedirecionar(nome);
  });

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocument };
