import {Cliente} from '../Cliente.js';

export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor === Conta) {
      throw new Error("Não crie instâncias de Conta, pois essa é uma classe abstrata!");
    }
    this._saldo = saldoInicial;
    this._cliente = cliente
    this._agencia = agencia;
  }

  set cliente(novoCliente) {
    if (novoCliente instanceof Cliente) {
      this._cliente = novoCliente;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
    }
  }

  sacar(valorSacado) {
    throw new Error("sacar tem que ser sobrescrito na classe filha!");
  }

  _sacar(valorSacado, taxa) {
    const  debitoComTaxa = valorSacado * taxa;
    if (this._saldo >= debitoComTaxa) {
      this._saldo -= debitoComTaxa;
      return valorSacado;
    }
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
