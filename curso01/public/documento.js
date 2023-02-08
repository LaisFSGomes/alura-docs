import {
  emitirExcluirDocument,
  emitirTextoEditor,
  selecionarDocumento,
} from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");
const textoEditor = document.querySelector("#editor-texto");
const tituloDocumento = document.querySelector("#titulo-documento");
const botaoExcluir = document.querySelector("#excluir-documento");

tituloDocumento.textContent = nomeDocumento || "Sem título";

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener("keyup", () => {
  emitirTextoEditor({
    texto: textoEditor.value,
    nomeDocumento: nomeDocumento,
  });
});

function atualizaTextoEditor(texto) {
  textoEditor.value = texto;
}

botaoExcluir.addEventListener("click", () => {
  emitirExcluirDocument(nomeDocumento);
});

function alertarERedirecionar(nome) {
  if (nome === nomeDocumento) {
    alert(`Documento ${nome} excluído!`);
    window.location.href = "/";
  }
}
export { atualizaTextoEditor, alertarERedirecionar };
