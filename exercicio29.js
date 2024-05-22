// 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.

const prompt = require("prompt-sync")();

function calcularSomaLinha(matriz, linha) {
  let soma = 0;
  for (let j = 0; j < matriz[linha].length; j++) {
    soma += matriz[linha][j];
  }
  return soma;
}

function calcularSomaColuna(matriz, coluna) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][coluna];
  }
  return soma;
}

function calcularSomaDiagonalPrincipal(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][i];
  }
  return soma;
}

function calcularSomaTotal(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      soma += matriz[i][j];
    }
  }
  return soma;
}

// Lendo a matriz 5x5
const matriz = [];
for (let i = 0; i < 5; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = parseFloat(
      prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `)
    );
  }
}

// Calculando as somas
const somaLinha4 = calcularSomaLinha(matriz, 3); // Linha 4 é indexada em 3
const somaColuna2 = calcularSomaColuna(matriz, 1); // Coluna 2 é indexada em 1
const somaDiagonalPrincipal = calcularSomaDiagonalPrincipal(matriz);
const somaTotal = calcularSomaTotal(matriz);

// Escrevendo as somas e a matriz
console.log("Matriz M:");
console.table(matriz);
console.log("a) Soma da linha 4 de M:", somaLinha4);
console.log("b) Soma da coluna 2 de M:", somaColuna2);
console.log("c) Soma da diagonal principal:", somaDiagonalPrincipal);
console.log("d) Soma de todos os elementos da matriz M:", somaTotal);
