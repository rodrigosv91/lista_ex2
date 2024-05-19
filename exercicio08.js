// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar

const prompt = require("prompt-sync")();

function calcularPontosEValor(horasAtividade) {
  let pontos = 0;

  if (horasAtividade <= 10) {
    pontos = horasAtividade * 2;
  } else if (horasAtividade <= 20) {
    pontos = 10 * 2 + (horasAtividade - 10) * 5;
  } else {
    pontos = 10 * 2 + 10 * 5 + (horasAtividade - 20) * 10;
  }

  const valorGanho = pontos * 0.05;
  return { pontos, valorGanho };
}

function main() {
  console.log("Bem-vindo ao programa de pontos por atividades físicas!");

  const horasAtividade = parseFloat(
    prompt("Digite quantas horas de atividade física você teve no mês: ")
  );

  const resultado = calcularPontosEValor(horasAtividade);
  console.log(`Você ganhou ${resultado.pontos} pontos.`);
  console.log(`Isso equivale a R$ ${resultado.valorGanho.toFixed(2)}.`);
}

main();
