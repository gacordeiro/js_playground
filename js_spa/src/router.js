import inicializaTabela from './componentes/lista/listagem-cliente.js';
import {inicializaCadastro} from './componentes/cadastro/componente-cadastro.js';
import inicializaFormEdicao from './componentes/edita/form-edicao.js';

const rotas = {
  '/': inicializaTabela,
  '/cadastro': inicializaCadastro,
  '/edita': inicializaFormEdicao,
};

const rootDiv = document.querySelector('[data-container]');

const iniciarRota = () => {
  rootDiv.innerHTML = '';
  rootDiv.appendChild(rotas[window.location.pathname]());
};

const navegacao = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  iniciarRota();
};

window.navegacao = navegacao;
window.onpopstate = () => iniciarRota();

export {navegacao};
