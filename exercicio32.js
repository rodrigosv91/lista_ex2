// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
// cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
// matriz lida e a modificada.

const prompt = require("prompt-sync")();

function gerarMatrizAleatoria(linhas, colunas, min, max) {
  const matriz = [];
  for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
      matriz[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  return matriz;
}

function encontrarMaiorEmModulo(linha) {
  let maior = Math.abs(linha[0]);
  for (let i = 1; i < linha.length; i++) {
    if (Math.abs(linha[i]) > maior) {
      maior = Math.abs(linha[i]);
    }
  }
  return maior;
}

function modificarMatriz(matriz) {
  const novaMatriz = [];
  for (let i = 0; i < matriz.length; i++) {
    const maiorEmModulo = encontrarMaiorEmModulo(matriz[i]);
    novaMatriz[i] = matriz[i].map((elemento) =>
      (elemento / maiorEmModulo).toFixed(2)
    );
  }
  return novaMatriz;
}

const matrizM = gerarMatrizAleatoria(12, 13, 1, 100);
const matrizModificada = modificarMatriz(matrizM);

console.log("Matriz Original M:");
console.table(matrizM);
console.log("Matriz Modificada:");
console.table(matrizModificada);
