export const alerta = (form, classe, mensagem) => {
  const linha = document.createElement('section');
  linha.innerHTML = `<div class="${classe}">${mensagem}</div>`;
  form.appendChild(linha);
};
