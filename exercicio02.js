// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km,
// exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require("prompt-sync")();

function verificarVelocidade(velocidade) {
  const velocidadeLimite = 80;
  const valorMultaPorKm = 5;

  if (velocidade > velocidadeLimite) {
    const kmAcima = velocidade - velocidadeLimite;
    const valorMulta = kmAcima * valorMultaPorKm;
    console.log(
      `Você foi multado! A velocidade excedeu ${kmAcima} km/h, totalizando uma multa de R$ ${valorMulta.toFixed(
        2
      )}.`
    );
  } else {
    console.log("Velocidade dentro do limite permitido.");
  }
}

function main() {
  const velocidade = parseFloat(
    prompt("Digite a velocidade do carro em Km/h: ")
  );
  verificarVelocidade(velocidade);
}

main();