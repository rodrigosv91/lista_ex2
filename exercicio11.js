// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
// Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
// valores da sequência.

const prompt = require("prompt-sync")();

function calcularPA(primeiroTermo, razao) {
  let soma = 0;
  let elemento = primeiroTermo;

  console.log("Os 10 primeiros elementos da PA são:");

  for (let i = 0; i < 10; i++) {
    console.log(elemento);
    soma += elemento;
    elemento += razao;
  }

  return soma;
}

function main() {
  console.log("Bem-vindo ao programa de cálculo de Progressão Aritmética!");

  const primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA: "));
  const razao = parseFloat(prompt("Digite a razão da PA: "));

  const soma = calcularPA(primeiroTermo, razao);

  console.log(`A soma de todos os valores da sequência é: ${soma}`);
}

main();
