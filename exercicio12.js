// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

function fibonacci() {
  const sequencia = [1, 1];

  for (let i = 2; i < 10; i++) {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
  }

  return sequencia;
}

function main() {
  console.log("Bem-vindo ao programa de cálculo da Sequência de Fibonacci!");

  const sequencia = fibonacci();

  console.log("Os 10 primeiros elementos da Sequência de Fibonacci são:");
  console.log(sequencia.join(", "));
}

main();