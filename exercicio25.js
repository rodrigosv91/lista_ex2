// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
// de cada coluna separadamente.

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function preencherMatrizAleatoria(linhas, colunas) {
  const matriz = [];
  for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
      matriz[i][j] = gerarNumeroAleatorio(1, 99);
    }
  }
  return matriz;
}

function calcularSomaColunas(matriz) {
  const linhas = matriz.length;
  const colunas = matriz[0].length;
  const somaColunas = [];

  for (let j = 0; j < colunas; j++) {
    let soma = 0;
    for (let i = 0; i < linhas; i++) {
      soma += matriz[i][j];
    }
    somaColunas.push(soma);
  }

  return somaColunas;
}

const linhas = 15;
const colunas = 20;
const matriz = preencherMatrizAleatoria(linhas, colunas);
console.log("Matriz:", matriz);
const somaColunas = calcularSomaColunas(matriz);
console.log("Soma de cada coluna:", somaColunas);
