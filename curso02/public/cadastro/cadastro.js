import { emitirCadastrarUsuario } from "./socket-front-cadastro.js";

const form = document.querySelector('#form-cadastro');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nome = form["input-usuario"].value;
    const senha = form["input-senha"].value;

    emitirCadastrarUsuario({nome, senha});
});