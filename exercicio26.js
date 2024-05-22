// 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].

function calcularProdutoMatrizes(matrizA, matrizB) {
  const linhasA = matrizA.length;
  const colunasA = matrizA[0].length;
  const linhasB = matrizB.length;
  const colunasB = matrizB[0].length;

  if (colunasA !== linhasB) {
    console.log(
      "As dimensões das matrizes não são compatíveis para multiplicação."
    );
    return null;
  }

  const matrizProduto = [];
  for (let i = 0; i < linhasA; i++) {
    matrizProduto[i] = [];
    for (let j = 0; j < colunasB; j++) {
      matrizProduto[i][j] = 0;
      for (let k = 0; k < colunasA; k++) {
        matrizProduto[i][j] += matrizA[i][k] * matrizB[k][j];
      }
    }
  }

  return matrizProduto;
}

const matrizA = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

const matrizB = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
];

const matrizProduto = calcularProdutoMatrizes(matrizA, matrizB);
console.log("Matriz Produto:", matrizProduto);
