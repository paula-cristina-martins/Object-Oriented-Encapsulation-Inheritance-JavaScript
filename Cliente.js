export class Cliente {

  constructor(nome, cpf, rg, senha) {
    this.nome = nome;
    this._cpf = cpf;
    this._rg = rg;
    this._senha = senha;
  }

  get cpf() {
    return this._cpf;
  }

  get rg() {
    return this._rg;
  }

  // método de autenticação por senha.
  autenticar()
  {
    return true;
  }
}
