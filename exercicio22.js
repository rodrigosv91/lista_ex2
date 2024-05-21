// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
// 350,00.

const prompt = require("prompt-sync")();

function main() {
  let totalSalario = 0;
  let totalFilhos = 0;
  let maiorSalario = -Infinity;
  let salarioAte350 = 0;
  let totalPessoas = 0;

  while (true) {
    const salario = parseFloat(
      prompt("Digite o salário da pessoa (ou '0' para encerrar): ")
    );
    if (salario === 0) {
      break;
    }
    const filhos = parseInt(prompt("Digite o número de filhos da pessoa: "));

    totalSalario += salario;
    totalFilhos += filhos;
    if (salario > maiorSalario) {
      maiorSalario = salario;
    }
    if (salario <= 350) {
      salarioAte350++;
    }
    totalPessoas++;
  }

  const mediaSalario = totalSalario / totalPessoas;
  const mediaFilhos = totalFilhos / totalPessoas;
  const percentualSalarioAte350 = (salarioAte350 / totalPessoas) * 100;

  return {
    mediaSalario,
    mediaFilhos,
    maiorSalario,
    percentualSalarioAte350,
  };
}

const estatisticas = main();
console.log(
  "Média de salário da população:",
  estatisticas.mediaSalario.toFixed(2)
);
console.log("Média do número de filhos:", estatisticas.mediaFilhos.toFixed(2));
console.log("Maior salário:", estatisticas.maiorSalario.toFixed(2));
console.log(
  "Percentual de pessoas com salário até R$ 350,00:",
  estatisticas.percentualSalarioAte350.toFixed(2) + "%"
);
