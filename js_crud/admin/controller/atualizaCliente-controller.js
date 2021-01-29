import {clienteService} from '../service/cliente-service.js';
import {errorController} from './error-controller.js';

(async () => {
  const pegaUrl = new URL(window.location);
  const id = pegaUrl.searchParams.get('id');
  const inputNome = document.querySelector('[data-nome]');
  const inputEmail = document.querySelector('[data-email]');

  await errorController.guardFromError(async () => {
    const data = await clienteService.detalhaCliente(id);
    inputNome.value = data.nome;
    inputEmail.value = data.email;
  });

  const formulario = document.querySelector('[data-form]');
  formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    await errorController.guardFromError(async () => {
      await clienteService.atualizaCliente(id, inputNome.value,
          inputEmail.value);
      window.location.href = '../telas/edicao_concluida.html';
    });
  });
})();
