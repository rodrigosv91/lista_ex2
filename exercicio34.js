// 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
// cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
// multiplicações.

function gerarMatrizAleatoria(linhas, colunas, min, max) {
  const matriz = [];
  for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
      matriz[i][j] = parseFloat((Math.random() * (max - min) + min).toFixed(2));
    }
  }
  return matriz;
}

function multiplicarLinhasPorDiagonal(matriz) {
  const novaMatriz = matriz.map((linha) => [...linha]); // Clona a matriz original
  for (let i = 0; i < novaMatriz.length; i++) {
    const fatorMultiplicador = novaMatriz[i][i];
    for (let j = 0; j < novaMatriz[i].length; j++) {
      novaMatriz[i][j] = parseFloat(
        (novaMatriz[i][j] * fatorMultiplicador).toFixed(2)
      );
    }
  }
  return novaMatriz;
}

const linhas = 5;
const colunas = 5;
const matriz = gerarMatrizAleatoria(linhas, colunas, 1, 100);
const matrizModificada = multiplicarLinhasPorDiagonal(matriz);

console.log("Matriz Original:");
console.table(matriz);
console.log("Matriz Modificada:");
console.table(matrizModificada);
