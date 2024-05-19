// 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

function preencherVetorAleatorio(tamanho) {
  const vetor = [];

  for (let i = 0; i < tamanho; i++) {
    vetor.push(Math.floor(Math.random() * 100)); // Números aleatórios entre 0 e 99
  }

  return vetor;
}

function ordenarVetor(vetor) {
  return vetor.slice().sort((a, b) => a - b);
}

function mostrarVetor(vetor, mensagem) {
  console.log(mensagem);
  console.log(vetor.join(", "));
}

function main() {
  console.log("Bem-vindo ao programa de preenchimento e ordenação de vetores!");

  const tamanho = 20;
  const vetor = preencherVetorAleatorio(tamanho);

  mostrarVetor(vetor, "Números gerados:");

  const vetorOrdenado = ordenarVetor(vetor);

  mostrarVetor(vetorOrdenado, "Números ordenados:");
}

main();
