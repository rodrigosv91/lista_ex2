// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.

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

// Criando os vetores SL e SC
const vetorSL = [];
const vetorSC = [];
for (let i = 0; i < 5; i++) {
  vetorSL.push(calcularSomaLinha(matriz, i));
  vetorSC.push(calcularSomaColuna(matriz, i));
}

// Escrevendo a matriz e os vetores SL e SC
console.log("Matriz M:");
console.table(matriz);
console.log("Vetor SL:", vetorSL);
console.log("Vetor SC:", vetorSC);
