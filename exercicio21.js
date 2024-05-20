// 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
// diagonal principal são iguais a 1 e os demais são nulos.

function imprimirMatrizIdentidade() {
  const tamanho = 7;
  const matrizIdentidade = [];

  for (let i = 0; i < tamanho; i++) {
    matrizIdentidade[i] = [];
    for (let j = 0; j < tamanho; j++) {
      matrizIdentidade[i][j] = 0;
    }
  }

  for (let i = 0; i < tamanho; i++) {
    matrizIdentidade[i][i] = 1;
  }

  for (let i = 0; i < tamanho; i++) {
    console.log(matrizIdentidade[i].join(" "));
  }
}

imprimirMatrizIdentidade();
