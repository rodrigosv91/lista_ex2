// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
// elementos da diagonal principal com a média dos elementos da diagonal secundária.

const prompt = require("prompt-sync")();

function lerMatriz(linhas, colunas) {
  const matriz = [];
  for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
      matriz[i][j] = parseFloat(
        prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `)
      );
    }
  }
  return matriz;
}

function calcularMediaDiagonalSecundaria(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][matriz.length - 1 - i];
  }
  return soma / matriz.length;
}

function multiplicarDiagonalPrincipal(matriz, multiplicador) {
  const novaMatriz = matriz.map((linha) => [...linha]); // Clona a matriz original
  for (let i = 0; i < novaMatriz.length; i++) {
    novaMatriz[i][i] *= multiplicador;
  }
  return novaMatriz;
}

const matriz = lerMatriz(3, 3);
const mediaDiagonalSecundaria = calcularMediaDiagonalSecundaria(matriz);
const matrizModificada = multiplicarDiagonalPrincipal(
  matriz,
  mediaDiagonalSecundaria
);

console.log("Matriz Original:");
console.table(matriz);
console.log("Matriz Modificada:");
console.table(matrizModificada);
