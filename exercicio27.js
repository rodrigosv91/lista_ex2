// 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
// multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
// um vetor V(36). Escrever o vetor V no final.

const prompt = require("prompt-sync")();

function multiplicarMatrizPorValor(matriz, valor) {
  const vetor = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      const resultado = matriz[i][j] * valor;
      vetor.push(resultado);
    }
  }
  return vetor;
}

const matrizM = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
];

const valorA = parseFloat(prompt("Digite o valor A: "));

const vetorV = multiplicarMatrizPorValor(matrizM, valorA);

console.log("Vetor V:", vetorV);
