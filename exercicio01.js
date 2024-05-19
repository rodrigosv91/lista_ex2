// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require("prompt-sync")();

function calcularReducaoTempoVida(cigarrosPorDia, anosFumando) {
  const totalCigarros = cigarrosPorDia * (anosFumando * 365);
  const tempoPerdidoMinutos = totalCigarros * 10;
  const tempoPerdidoDias = tempoPerdidoMinutos / (60 * 24);
  return tempoPerdidoDias;
}

function main() {
  const cigarrosPorDia = parseInt(
    prompt("Quantidade de cigarros fumados por dia: ")
  );
  const anosFumando = parseInt(prompt("Quantidade de anos fumando: "));

  const tempoPerdidoDias = parseInt(
    calcularReducaoTempoVida(cigarrosPorDia, anosFumando)
  );
  console.log(
    "Um fumante perderá aproximadamente " + tempoPerdidoDias + " dias de vida."
  );
}

main();
