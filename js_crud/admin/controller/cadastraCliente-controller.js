import {clienteService} from '../service/cliente-service.js';
import {errorController} from './error-controller.js';

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault();
  await errorController.guardFromError(async () => {
    const nome = evento.target.querySelector('[data-nome]').value;
    const email = evento.target.querySelector('[data-email]').value;

    console.log(`nome: ${nome}, email: ${email}`);
    await clienteService.criaCliente(nome, email);
    window.location.href = '../telas/cadastro_concluido.html';
  });
});
