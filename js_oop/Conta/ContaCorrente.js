import {Conta} from './Conta.js';

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContas++;
  }

  sacar(valorSacado) {
    return this._sacar(valorSacado, 1.1);
  }
}