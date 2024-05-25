// 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
// vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.

const vetorA = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 21) - 10
);
console.log("Vetor A (original):", vetorA);

function compactarVetor(vetor) {
  const vetorCompactado = [];
  for (const elemento of vetor) {
    if (elemento > 0) {
      vetorCompactado.push(elemento);
    }
  }
  return vetorCompactado;
}

const vetorB = compactarVetor(vetorA);
console.log("Vetor B (compactado):", vetorB);
