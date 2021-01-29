import {Diretor} from './Funcionarios/Diretor.js';
import {Gerente} from './Funcionarios/Gerente.js';
import {SistemaAutenticacao} from './SistemaAutenticacao.js';
import {Cliente} from './Cliente.js';

const diretor = new Diretor("Rodrigo", 10000, 12345678901);
diretor.cadastrarSenha("123456")

const gerente = new Gerente("Ricardo", 5000, 12345678902);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Lais", 11122233344, "456")

const result1 = SistemaAutenticacao.login(diretor, "123456");
const result2 = SistemaAutenticacao.login(gerente, "123");
const result3 = SistemaAutenticacao.login(cliente, "456");

console.log(result1);
console.log(result2);
console.log(result3);

// import {Cliente} from './Cliente.js';
// import {ContaCorrente} from './Conta/ContaCorrente.js';
// import {ContaPoupanca} from './Conta/ContaPoupanca.js';
//
// console.log('contas: ' + ContaCorrente.numeroDeContas);
// const cliente1 = new Cliente('Ricardo', 12345678901);
// const contaCorrente1 = new ContaCorrente(cliente1, 1001);
// contaCorrente1.depositar(1000);
// contaCorrente1.cliente = cliente1;
//
// console.log('contas: ' + ContaCorrente.numeroDeContas);
// const cliente2 = new Cliente('Angelica', 10987654321);
// const contaCorrente2 = new ContaCorrente(cliente2, 2002);
// contaCorrente2.cliente = cliente2;
//
// contaCorrente1.transferir(200, contaCorrente2);
//
// console.log('contas: ' + ContaCorrente.numeroDeContas);
// console.log(contaCorrente1);
// console.log(contaCorrente2);
//
// const contaPoupanca1 = new ContaPoupanca(333, cliente1, 1001);
// console.log(contaPoupanca1);
