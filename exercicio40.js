// 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
// resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
// cada), representando as apostas feitas. Compare os números das apostas com o
// resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
// corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
// e quadras, apenas por quinas.)

const prompt = require("prompt-sync")();

// Função para ler um vetor de números inteiros
function lerVetor(tamanho) {
  const vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(parseInt(prompt(`Digite o número ${i + 1}: `)));
  }
  return vetor;
}

// Função para verificar se há números repetidos em um vetor
function temRepetidos(vetor) {
  const unicos = new Set(vetor);
  return unicos.size !== vetor.length;
}

// Função para gerar uma aposta aleatória sem números repetidos
function gerarAposta() {
  let aposta = [];
  do {
    aposta = [];
    while (aposta.length < 5) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!aposta.includes(numero)) {
        aposta.push(numero);
      }
    }
  } while (temRepetidos(aposta));
  return aposta;
}

// Função para verificar se dois vetores são iguais
function saoIguais(vetor1, vetor2) {
  if (vetor1.length !== vetor2.length) {
    return false;
  }
  for (let i = 0; i < vetor1.length; i++) {
    if (vetor1[i] !== vetor2[i]) {
      return false;
    }
  }
  return true;
}

console.log("Digite o resultado oficial da Loto:");
const resultadoOficial = lerVetor(5);

let ganhadorEncontrado = false;

console.log("Apostas geradas:");

for (let i = 1; i <= 50; i++) {
  const aposta = gerarAposta();
  console.log(`Aposta ${i}: ${aposta}`);
  if (saoIguais(aposta, resultadoOficial)) {
    console.log("Ganhador!");
    ganhadorEncontrado = true;
  }
}

if (!ganhadorEncontrado) {
  console.log("Nenhum ganhador encontrado.");
}
