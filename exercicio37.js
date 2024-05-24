// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.

const prompt = require("prompt-sync")();

function lerVetor(tamanho) {
  const vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(prompt(`Digite a resposta ${i + 1}: `));
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

const gabarito = lerVetor(20);

for (let aluno = 1; aluno <= 50; aluno++) {
  console.log(`Aluno ${aluno}:`);
  const respostas = lerVetor(20);
  const acertos = contarAcertos(gabarito, respostas);
  console.log(`Número de acertos: ${acertos}`);
  if (acertos >= 12) {
    console.log("APROVADO");
  } else {
    console.log("REPROVADO");
  }
}
