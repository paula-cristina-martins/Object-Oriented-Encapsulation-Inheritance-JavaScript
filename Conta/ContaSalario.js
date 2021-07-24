import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
    }

    sacar(valor) {
        // taxa variável conta salário.
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}