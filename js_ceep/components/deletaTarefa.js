const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('button');
  botaoDeleta.innerText = 'deletar';
  botaoDeleta.addEventListener('click', deletarTarefa);
  return botaoDeleta;
};

const deletarTarefa = (event) => {
  const tarefaDeletada = event.target.parentElement;
  tarefaDeletada.remove();
};

export default BotaoDeleta
