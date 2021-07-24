import { Funcionario } from "./Funcionario.js";

// herança da classe funcionário.
export class Diretor extends Funcionario {

    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)
        // bonificação variável por funcionário.
        this._bonificacao = 2;
    }
}