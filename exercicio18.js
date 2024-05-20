// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro

class RegistroFuncionario {
  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }
}

const prompt = require("prompt-sync")();

function main() {
  console.log("Bem-vindo ao programa de registro de funcionário!");

  const nome = prompt("Digite o nome do funcionário: ");
  const cargo = prompt("Digite o cargo do funcionário: ");
  const salario = parseFloat(prompt("Digite o salário do funcionário: "));

  const funcionario = new RegistroFuncionario(nome, cargo, salario);

  console.log("\nRegistro do funcionário:");
  console.log("Nome:", funcionario.nome);
  console.log("Cargo:", funcionario.cargo);
  console.log("Salário:", funcionario.salario);
}

main();
