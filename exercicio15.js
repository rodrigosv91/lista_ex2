// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require("prompt-sync")();

function main() {
  console.log("Bem-vindo ao programa de identificação de números pares!");

  const numeros = [];
  const pares = [];

  for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
    numeros.push(numero);
  }

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push({ numero: numeros[i], posicao: i });
    }
  }

  console.log("\nNúmeros pares digitados e suas posições:");

  if (pares.length === 0) {
    console.log("Nenhum número par foi digitado.");
  } else {
    for (let i = 0; i < pares.length; i++) {
      console.log(
        `Número par: ${pares[i].numero}, Posição: ${pares[i].posicao}`
      );
    }
  }
}

main();