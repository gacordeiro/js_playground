const Atendimento = require('../models/atendimentos.js');

module.exports = app => {
  app.get(`/atendimentos`, (req, res) => {
    res.send('Você está na rota de antendimentos realizando um GET.');
  });

  app.post(`/atendimentos`, (req, res) => {
    const atendimento = req.body;
    Atendimento.adiciona(atendimento);
    res.send('Você está na rota de antendimentos realizando um POST.');
  });
};
