import {clienteService} from '../service/cliente-service.js';
import {errorController} from './error-controller.js';

const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement('tr');
  linhaNovoCliente.innerHTML = `
    <td class="td" data-td>${nome}</td>
    <td class="td" data-td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">
                Editar
            </a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">
                Excluir
            </button></li>
        </ul>
    </td>`;
  linhaNovoCliente.dataset.id = id;
  return linhaNovoCliente;
};

const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', async (evento) =>
    await errorController.guardFromError(async () => {
      if (evento.target.className === 'botao-simples botao-simples--excluir') {
        const linhaCliente = evento.target.closest('[data-id]');
        const id = linhaCliente.dataset.id;
        await clienteService.removeCliente(id);
        linhaCliente.remove();
      }
    }),
);

(async () => await errorController.guardFromError(async () => {
  const data = await clienteService.listaClientes();
  data.forEach(cliente => {
    tabela.appendChild(
        criaNovaLinha(cliente.nome, cliente.email, cliente.id));
  });
}))();


