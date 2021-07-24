// classe abstrata - só funciona para ser herdada.

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Não se pode instânciar um objeto do tipo CONTA diretamente, pois é uma classe abstrata.");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente)
            this._cliente = novoValor;
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    // método abstrato.
    sacar(valor) {
        throw new Error("O método sacar da classe CONTA é abstrato!")
    }

    _sacar(valor, taxa) {

        const valorSacado = taxa * valor;

        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            console.log(`Após o saque o saldo é de R$ ${this._saldo}`);
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
        console.log(`Após o depósito o saldo é de R$ ${this._saldo}`);
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`O valor sacado foi de R$ ${valorSacado}`)
    }
}