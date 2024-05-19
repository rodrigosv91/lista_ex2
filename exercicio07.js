// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require("prompt-sync")();

function calcularPrecoAluguel(tipoCarro, diasAluguel, kmPercorridos) {
  let precoBase;
  let precoPorKm;

  if (tipoCarro === 1) {
    precoBase = 90 * diasAluguel;
    precoPorKm = kmPercorridos <= 100 ? 0.2 : 0.1;
  } else if (tipoCarro === 2) {
    precoBase = 150 * diasAluguel;
    precoPorKm = kmPercorridos <= 200 ? 0.3 : 0.25;
  } else {
    return "Tipo de carro inválido!";
  }

  const precoKm = kmPercorridos * precoPorKm;
  const precoTotal = precoBase + precoKm;
  return precoTotal;
}

function main() {
  console.log("Bem-vindo à empresa de aluguel de carros!");

  const tipoCarro = parseInt(
    prompt("Digite o tipo de carro (1 para popular ou 2 para luxo): ")
  );
  const diasAluguel = parseInt(
    prompt("Digite a quantidade de dias de aluguel: ")
  );
  const kmPercorridos = parseFloat(
    prompt("Digite a quantidade de Km percorridos: ")
  );

  const precoTotal = calcularPrecoAluguel(
    tipoCarro,
    diasAluguel,
    kmPercorridos
  );
  console.log(`O preço total a ser pago é R$ ${precoTotal.toFixed(2)}.`);
}

main();