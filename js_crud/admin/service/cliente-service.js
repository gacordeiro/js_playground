//*** http version ***
// const listaClientes = () => {
//   return new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();
//     http.open('GET', 'http://localhost:3000/profile');
//     http.onload = () => {
//       const jsonResponse = JSON.parse(http.response);
//       http.status >= 400 ? reject(jsonResponse) : resolve(jsonResponse);
//     };
//     http.send();
//   });
// };

const baseUrl = `http://localhost:3000/profile`;

const listaClientes = async () => {
  const response = await fetch(baseUrl)
  if (response.ok) {
    return response.json();
  }
  throw new Error('Erro ao listar clientes');
}

const detalhaCliente = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Erro ao detalhar cliente');
}

const criaCliente = (nome, email) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nome: nome,
    email: email,
  }),
}).then(response => {
  if (response.ok) {
    return response.body;
  }
  throw new Error('Erro ao criar cliente');
});

const removeCliente = (id) => fetch(`${baseUrl}/${id}`, {
  method: 'DELETE',
}).then(response => {
  if (!response.ok) {
    throw new Error('Erro ao remover cliente');
  }
});

const atualizaCliente = (id, nome, email) => fetch(`${baseUrl}/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nome: nome,
    email: email,
  }),
}).then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Erro ao atualizar cliente');
});


export const clienteService = {
  listaClientes,
  detalhaCliente,
  criaCliente,
  removeCliente,
  atualizaCliente,
};
