const conexao = require('../infraestrutura/conexao.js');

class Atendimento {
  adiciona(atendimento) {
    const sql = `
        INSERT INTO Atendimento
        SET ?
    `;
    conexao.query(sql, atendimento, (erro, resultados) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log(resultados);
      }
    });
  }
}

module.exports = new Atendimento;
