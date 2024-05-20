// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

const prompt = require("prompt-sync")();

function calcularSalarioLiquido(salarioBruto) {
  const deducaoINSS = salarioBruto * 0.12;
  const salarioLiquido = salarioBruto - deducaoINSS;
  return { deducaoINSS, salarioLiquido };
}

function main() {
  console.log("Bem-vindo ao programa de emissão de contracheques!");

  const funcionarios = [];

  for (let i = 0; i < 3; i++) {
    console.log(`Digite os dados do ${i + 1}º funcionário:`);
    const matricula = prompt("Matrícula: ");
    const nome = prompt("Nome: ");
    const salarioBruto = parseFloat(prompt("Salário bruto: "));

    const { deducaoINSS, salarioLiquido } =
      calcularSalarioLiquido(salarioBruto);

    console.log("\nContracheque:");
    console.log("Matrícula:", matricula);
    console.log("Nome:", nome);
    console.log("Salário bruto:", salarioBruto.toFixed(2));
    console.log("Dedução INSS:", deducaoINSS.toFixed(2));
    console.log("Salário líquido:", salarioLiquido.toFixed(2));

    console.log("---------------------------------------------");

    funcionarios.push({
      matricula,
      nome,
      salarioBruto,
      deducaoINSS,
      salarioLiquido,
    });
  }
}

main();
