import { Conta } from "./Conta.js";

// herança da classe conta.
export class ContaCorrente extends Conta {

    static numeroContas = 0;

    constructor(saldo = 0, cliente, agencia) {
        super(saldo, cliente, agencia); // obter os dados do construtor da classe pai.
        ContaCorrente.numeroContas += 1;
    }

    sacar(valor) {
        // taxa variável conta corrente.
        let taxa = 1.1;
        return super._sacar(valor, taxa);
    }

}
