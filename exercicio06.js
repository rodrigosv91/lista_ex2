// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const prompt = require("prompt-sync")();

function jogarAdivinhacao() {
  const numeroSorteado = Math.floor(Math.random() * 5) + 1;

  console.log("Tente adivinhar o número sorteado (entre 1 e 5):");

  while (true) {
    const palpite = parseInt(prompt("Digite o seu palpite: "));

    if (palpite === numeroSorteado) {
      console.log("Parabéns! Você acertou o número sorteado.");
      break;
    } else {
      console.log("Tente novamente.");
    }
  }
}

function main() {
  console.log("Bem-vindo ao jogo de adivinhação!");
  while (true) {
    jogarAdivinhacao();

    const continuar = prompt("Deseja jogar novamente? (s/n): ").toLowerCase();
    if (continuar !== "s") {
      break;
    }
  }
  console.log("Obrigado por jogar!");
}

main();
