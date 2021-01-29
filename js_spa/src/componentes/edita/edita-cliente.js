import {detalhaCliente, editaCliente} from '../../api/cliente.js';
import {validaCPF} from '../valida/validaCPF.js';
import {alerta} from '../alerta/componente-alerta.js';

const eventoForm = (form) => {
  const pegaURL = new URL(window.location);

  const id = pegaURL.searchParams.get('id');

  const inputCPF = form.querySelector('[data-cpf]');
  const inputNome = form.querySelector('[data-nome]');

  detalhaCliente(id).then(dados => {
    inputCPF.value = dados[0].cpf;
    inputNome.value = dados[0].nome;
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!validaCPF(inputCPF.value)) {
      alert('ESSE CPF NÃO EXISTE');
      return;
    }

    editaCliente(id, inputCPF.value, inputNome.value).then(() =>
        alerta(form, 'alert alert-success', 'CLIENTE EDITADO COM SUCESSO !'),
    ).catch(() =>
        alerta(form, 'alert alert-warning', 'O CLIENTE NÃO PODE SER EDITADO !'),
    );
  });
};

export default eventoForm;
