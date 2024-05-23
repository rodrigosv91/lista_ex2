// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
// Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
// todos os elementos de V diferentes de A. Mostre os resultados.

const prompt = require("prompt-sync")();

function gerarMatrizAleatoria(tamanho, min, max) {
  const matriz = [];
  for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
    for (let j = 0; j < tamanho; j++) {
      matriz[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  return matriz;
}

function contarValores(matriz, valor) {
  let contagem = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === valor) {
        contagem++;
      }
    }
  }
  return contagem;
}

function criarMatrizDiferenteDeA(matriz, valor) {
  const novaMatriz = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] !== valor) {
        novaMatriz.push(matriz[i][j]);
      }
    }
  }
  return novaMatriz;
}

const A = parseInt(prompt("Digite o valor de A: "));
const matrizV = gerarMatrizAleatoria(30, 1, 100);

const quantidadeDeA = contarValores(matrizV, A);
const matrizX = criarMatrizDiferenteDeA(matrizV, A);

console.log("Matriz V:");
console.table(matrizV);
console.log(
  `Quantidade de valores iguais a A (${A}) na matriz: ${quantidadeDeA}`
);
console.log("Matriz X com elementos diferentes de A:");
console.log(matrizX);
