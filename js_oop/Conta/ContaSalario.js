import {Conta} from './Conta.js';

export class ContaSalario extends Conta {
  constructor(cliente) {
    super(0, cliente, 1);
  }

  sacar(valorSacado) {
    return this._sacar(valorSacado, 1.01);
  }
}
