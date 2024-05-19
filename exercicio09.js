// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

const prompt = require("prompt-sync")();

function calcularSalariosPorSexo() {
  let totalSalarioHomens = 0;
  let totalSalarioMulheres = 0;

  while (true) {
    const salario = parseFloat(prompt("Digite o salário do funcionário: "));
    const sexo = prompt(
      "Digite o sexo do funcionário (M para masculino ou F para feminino): "
    ).toUpperCase();

    if (sexo === "M") {
      totalSalarioHomens += salario;
    } else if (sexo === "F") {
      totalSalarioMulheres += salario;
    } else {
      console.log("Sexo inválido!");
    }

    const continuar = prompt("Deseja continuar? (s/n): ").toLowerCase();
    if (continuar !== "s") {
      break;
    }
  }

  return { totalSalarioHomens, totalSalarioMulheres };
}

function main() {
  console.log("Bem-vindo ao aplicativo de cálculo de salários por sexo!");

  const resultado = calcularSalariosPorSexo();

  console.log(
    `Total de salários pagos aos homens: R$ ${resultado.totalSalarioHomens.toFixed(
      2
    )}.`
  );
  console.log(
    `Total de salários pagos às mulheres: R$ ${resultado.totalSalarioMulheres.toFixed(
      2
    )}.`
  );
}

main();