// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
// da sequência de Fibonacci.

function fibonacci() {
  const sequencia = [1, 1];

  for (let i = 2; i < 15; i++) {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
  }

  return sequencia;
}

function main() {
  console.log(
    "Bem-vindo ao programa de preenchimento de vetor com os primeiros elementos da Sequência de Fibonacci!"
  );

  const sequencia = fibonacci();

  console.log("Os primeiros 15 elementos da Sequência de Fibonacci são:");
  console.log(sequencia);
}

main();