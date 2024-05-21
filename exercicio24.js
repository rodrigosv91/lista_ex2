// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

function contarNegativosPorLinha(matriz) {
  const linhas = matriz.length;
  const colunas = matriz[0].length;
  const vetorC = [];

  for (let i = 0; i < linhas; i++) {
    let contador = 0;
    for (let j = 0; j < colunas; j++) {
      if (matriz[i][j] < 0) {
        contador++;
      }
    }
    vetorC.push(contador);
  }

  return vetorC;
}

const matrizM = [
  [1, -2, 3, -4, 5, -6, 7, -8],
  [-1, 2, -3, 4, -5, 6, -7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, -2, 3, -4, 5, -6, 7, -8],
  [-1, 2, -3, 4, -5, 6, -7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
];

const vetorC = contarNegativosPorLinha(matrizM);
console.log("Vetor C:", vetorC);
