import {Conta} from './Conta.js';

export class ContaPoupanca extends Conta {
  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia);
  }

  sacar(valorSacado) {
    return this._sacar(valorSacado, 1.02);
  }
}
