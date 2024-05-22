// 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
// a) a soma dos elementos acima da diagonal principal;
// b) a soma dos elementos abaixo da diagonal principal;

const prompt = require("prompt-sync")();

function calcularSomaAcimaDiagonal(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (j > i) {
        soma += matriz[i][j];
      }
    }
  }
  return soma;
}

function calcularSomaAbaixoDiagonal(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (j < i) {
        soma += matriz[i][j];
      }
    }
  }
  return soma;
}

// Lendo a matriz 10x10
const matriz = [];
for (let i = 0; i < 10; i++) {
  matriz[i] = [];
  for (let j = 0; j < 10; j++) {
    matriz[i][j] = parseFloat(
      prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `)
    );
  }
}

const somaAcimaDiagonal = calcularSomaAcimaDiagonal(matriz);
const somaAbaixoDiagonal = calcularSomaAbaixoDiagonal(matriz);

console.log(
  "a) Soma dos elementos acima da diagonal principal:",
  somaAcimaDiagonal
);
console.log(
  "b) Soma dos elementos abaixo da diagonal principal:",
  somaAbaixoDiagonal
);
