// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require("prompt-sync")();

function jogarJoKenPo() {
  const opcoes = ["Pedra", "Papel", "Tesoura"];
  const escolhaComputador = Math.floor(Math.random() * 3);

  console.log("Escolha uma opção:");
  console.log("1 - Pedra");
  console.log("2 - Papel");
  console.log("3 - Tesoura");

  const escolhaJogador = parseInt(
    prompt("Digite o número correspondente à sua escolha: ")
  );
  const escolhaJogadorIndex = escolhaJogador - 1;

  console.log(`Você escolheu: ${opcoes[escolhaJogadorIndex]}`);
  console.log(`O computador escolheu: ${opcoes[escolhaComputador]}`);

  const resultado = verificarVencedor(escolhaJogadorIndex, escolhaComputador);
  if (resultado === 0) {
    console.log("Empate!");
  } else if (resultado === 1) {
    console.log("Você ganhou!");
  } else {
    console.log("Você perdeu!");
  }
}

function verificarVencedor(escolhaJogador, escolhaComputador) {
  if (escolhaJogador === escolhaComputador) {
    return 0; // Empate
  } else if (
    (escolhaJogador === 0 && escolhaComputador === 2) ||
    (escolhaJogador === 1 && escolhaComputador === 0) ||
    (escolhaJogador === 2 && escolhaComputador === 1)
  ) {
    return 1; // Jogador ganha
  } else {
    return -1; // Jogador perde
  }
}

function main() {
  console.log("Bem-vindo ao JoKenPo!");
  while (true) {
    jogarJoKenPo();

    const continuar = prompt("Deseja jogar novamente? (s/n): ").toLowerCase();
    if (continuar !== "s") {
      break;
    }
  }
  console.log("Obrigado por jogar!");
}

main();