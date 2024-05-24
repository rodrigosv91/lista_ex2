// 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
// um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
// do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
// número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
// o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
// mensagem "Parabéns, tu foi o GANHADOR".

const prompt = require("prompt-sync")();

function lerVetor(tamanho) {
  const vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(parseInt(prompt(`Digite a resposta ${i + 1}: `)));
  }
  return vetor;
}

function contarAcertos(gabarito, respostas) {
  let acertos = 0;
  for (let i = 0; i < gabarito.length; i++) {
    if (gabarito[i] === respostas[i]) {
      acertos++;
    }
  }
  return acertos;
}

const gabarito = lerVetor(13);

for (let i = 0; i < 100; i++) {
  console.log(`Apostador ${i + 1}:`);
  const respostas = lerVetor(13);
  const acertos = contarAcertos(gabarito, respostas);
  console.log(`Número de acertos: ${acertos}`);
  if (acertos === 13) {
    console.log("Parabéns, você foi o GANHADOR!");
  }
}
