import {cadastrarClientes} from '../../api/cliente.js';
import {validaCPF} from '../valida/validaCPF.js';
import {alerta} from '../alerta/componente-alerta.js';

export const eventoEnvia = (form) => form.addEventListener('submit', event => {
  event.preventDefault();

  const nome = event.target.querySelector('[data-nome]').value;
  const cpf = event.target.querySelector('[data-cpf]').value;

  if (validaCPF(cpf)) {
    cadastrarClientes(nome, cpf).then(() =>
        alerta(form, 'alert alert-success', 'CLIENTE CRIADO COM SUCESSO !'),
    ).catch(() =>
        alerta(form, 'alert alert-warning', 'O CLIENTE NÃO PODE SER CRIADO !'),
    );
  } else {
    alert('O CPF não é válido');
  }
});

