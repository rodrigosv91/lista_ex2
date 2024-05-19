// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require("prompt-sync")();

function calcularEstatisticas() {
  let soma = 0;
  let menorValor;
  let quantidadeValores = 0;
  let quantidadePares = 0;

  do {
    const numero = parseFloat(prompt("Digite um número: "));
    soma += numero;
    quantidadeValores++;

    if (quantidadeValores === 1 || numero < menorValor) {
      menorValor = numero;
    }

    if (numero % 2 === 0) {
      quantidadePares++;
    }

    const continuar = prompt("Deseja continuar? (s/n): ").toLowerCase();
    if (continuar !== "s") {
      break;
    }
  } while (true);

  const media = soma / quantidadeValores;

  return { soma, menorValor, media, quantidadePares };
}

function main() {
  console.log("Bem-vindo ao programa de cálculo de estatísticas!");

  const resultado = calcularEstatisticas();

  console.log(`a) O somatório entre todos os valores é: ${resultado.soma}`);
  console.log(`b) O menor valor digitado foi: ${resultado.menorValor}`);
  console.log(`c) A média entre todos os valores é: ${resultado.media}`);
  console.log(
    `d) Quantidade de valores pares digitados: ${resultado.quantidadePares}`
  );
}

main();
