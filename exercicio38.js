// 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
// variável identificadora que calcule a operação conforme a informação contida nesta
// variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.

const prompt = require("prompt-sync")();

function lerVetor(tamanho) {
  const vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(parseFloat(prompt(`Digite o ${i + 1}º número: `)));
  }
  return vetor;
}

function somaElementos(vetor) {
  let soma = 0;
  for (const elemento of vetor) {
    soma += elemento;
  }
  return soma;
}

function produtoElementos(vetor) {
  let produto = 1;
  for (const elemento of vetor) {
    produto *= elemento;
  }
  return produto;
}

function mediaElementos(vetor) {
  const soma = somaElementos(vetor);
  return soma / vetor.length;
}

function ordenarVetor(vetor) {
  return vetor.sort((a, b) => a - b);
}

const vetor = lerVetor(6);
const operacao = parseInt(
  prompt(
    "Escolha a operação (1: soma, 2: produto, 3: média, 4: ordenação crescente, 5: mostrar vetor): "
  )
);

switch (operacao) {
  case 1:
    console.log("Soma dos elementos:", somaElementos(vetor));
    break;
  case 2:
    console.log("Produto dos elementos:", produtoElementos(vetor));
    break;
  case 3:
    console.log("Média dos elementos:", mediaElementos(vetor));
    break;
  case 4:
    console.log("Vetor ordenado:", ordenarVetor(vetor));
    break;
  case 5:
    console.log("Vetor:", vetor);
    break;
  default:
    console.log("Opção inválida.");
}
