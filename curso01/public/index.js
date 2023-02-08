import { emitirAdicionarDocumento } from "./socket-front-index.js";

const listaDocumentos = document.querySelector("#lista-documentos");
const form = document.querySelector("#form-adiciona-documento");
const inputDocument = document.querySelector("#input-documento");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  emitirAdicionarDocumento(inputDocument.value);
  inputDocument.value = "";
});

function inserirLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML += `
    <a 
        id = "${nomeDocumento}"
        href="documento.html?nome=${nomeDocumento}" 
        class="list-group-item list-group-item-action">
        ${nomeDocumento}
      </a>
    `;
}

function removerLinkDocumento(nomeDocumento) {
  const documento = document.querySelector(`#${nomeDocumento}`);
  listaDocumentos.removeChild(documento);
}
export { inserirLinkDocumento, removerLinkDocumento };
