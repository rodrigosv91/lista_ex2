// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require("prompt-sync")();

function verificarTriangulo(a, b, c) {
  return !!(a < b + c && b < a + c && c < a + b);
}

function main() {
  const ladoA = parseFloat(prompt("Digite o tamanho do lado A: "));
  const ladoB = parseFloat(prompt("Digite o tamanho do lado B: "));
  const ladoC = parseFloat(prompt("Digite o tamanho do lado C: "));

  if (verificarTriangulo(ladoA, ladoB, ladoC)) {
    console.log("É possível formar um triângulo com essas retas.");
  } else {
    console.log("Não é possível formar um triângulo com essas retas.");
  }
}

main();