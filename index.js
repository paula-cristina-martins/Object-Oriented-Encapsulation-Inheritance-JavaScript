import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

// CLIENTES cadastrados.
const cliente_1 = new Cliente("Paula Cristina Martins", 12345678945, "MG-01.123.456", "123456");
const cliente_2 = new Cliente("João da Silva Souza", 98765432199, "MG-99.555.465", "987654");

// CONTAS cadastradas.
const conta_corrente_1 = new ContaCorrente(0, cliente_1, 1101);
const conta_corrente_2 = new ContaCorrente(0, cliente_2, 2202);

// FUNCIONÁRIOS.
const diretor = new Diretor("Ana", 5000, 12345674100);
diretor.cadastrarSenha("123456");
const sistema_diretor = SistemaAutenticacao.login(diretor, "123456");

const gerente = new Gerente("João", 2500, 12314725836);
gerente.cadastrarSenha("000");
const sistema_gerente = SistemaAutenticacao.login(gerente, "456");

// Login funcionários.
if (sistema_gerente == true) {
  console.log(`\nGerente(a) ${gerente._nome}, login efetuado com sucesso!`);
  console.log(
    `\nO número de contas correntes ativas é de: ${ContaCorrente.numeroContas} conta(s).`
  );
} else {
  console.log(`\nGerente(a): ${gerente._nome}, login / senha incorretos!`);
}

if (sistema_diretor == true) {
  console.log(`\nDiretor(a) ${diretor._nome}, login efetuado com sucesso!`);
  console.log(
    `\nO número de contas correntes ativas é de: ${ContaCorrente.numeroContas} conta(s).\n`
  );
} else {
  console.log(`\nDiretor(a): ${diretor._nome}, login / senha incorretos!\n`);
}

// dados dos clientes.
console.log(
  `Nome do Cliente........: ${conta_corrente_1._cliente.nome}\n` +
  `CPF do Cliente.........: ${conta_corrente_1._cliente._cpf}\n` +
  `Agência do Cliente.....: ${conta_corrente_1._agencia}\n`
);
console.log(
  `Nome do Cliente........: ${conta_corrente_2._cliente.nome}\n` +
  `CPF do Cliente.........: ${conta_corrente_2._cliente._cpf}\n` +
  `Agência do Cliente.....: ${conta_corrente_2._agencia}\n`
);

console.log("\n-> Depósito:");
conta_corrente_1.depositar(5000);
conta_corrente_2.depositar(1000);

console.log("\n-> Saque: ");
conta_corrente_1.sacar(2000);
conta_corrente_2.sacar(100);

console.log("\n-> Transferência: ");
let transferir = 250;
conta_corrente_1.transferir(transferir, conta_corrente_2);

// CONTA POUPANÇA.
const conta_poupanca = new ContaPoupanca(50, cliente_1, 1001);
console.log("\n", conta_poupanca, "\n");

const conta_salario = new ContaSalario(cliente_1);
conta_salario.depositar(100);
conta_salario.sacar(10);
