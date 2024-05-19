// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require("prompt-sync")();

function calcularPrecoPassagem(distancia) {
  const precoCurto = 0.5;
  const precoLongo = 0.45;
  const limiteCurto = 200;

  if (distancia <= limiteCurto) {
    return distancia * precoCurto;
  } else {
    return distancia * precoLongo;
  }
}

function main() {
  const distancia = parseFloat(prompt("Digite a distância da viagem em Km: "));
  const preco = calcularPrecoPassagem(distancia);
  console.log(`O preço da passagem é R$ ${preco.toFixed(2)}.`);
}

main();
