import {deletaCliente, listarClientes} from '../../api/cliente.js';
import '../../assets/css/clientes.css';

const removeCliente = (id) => {
  if (confirm('Deseja deletar o cliente ?')) {
    debugger;
    deletaCliente(id);
    window.location.reload();
  }
};

const criarBotaoExcluir = (id) => {
  const botao = document.createElement('button');
  botao.classList.add('btn', 'btn-danger');
  botao.innerHTML = 'Excluir';
  botao.addEventListener('click', () => removeCliente(id));
  return botao;
};

const criaCorpoTabela = (tabela) => {
  const corpoTabela = document.createElement('tbody');

  const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
      <td>${cpf}</td>
      <td>${nome}</td>
      <button type="button" class="btn btn-info" onclick="navegacao('/edita?id=${id}'); return false;">Editar</button>`;

    linha.appendChild(criarBotaoExcluir(id));
    return linha;
  };

  listarClientes().then(exibe => exibe.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id));
  }));

  tabela.appendChild(corpoTabela);
};

const inicializaTabela = () => {
  const tabela = document.createElement('table');
  tabela.innerHTML = `
    <thead class="thead-dark">
    <tr>
      <th scope="col">CPF</th>
      <th scope="col">Nome</th>
      <th scope="col"></th>
      <th scope="col"><a class="btn btn-primary" onclick="navegacao('/cadastro'); return false;">Novo Cliente</a>
      </th>
    </tr>
  </thead>`;
  tabela.classList.add('table');
  criaCorpoTabela(tabela);
  return tabela;
};

export default inicializaTabela;
