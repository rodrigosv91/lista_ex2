// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
// vetor pode ser preenchido quantas vezes forem necessárias.

const prompt = require("prompt-sync")();

function separarParesImpares(valores) {
  const pares = [];
  const impares = [];
  for (const valor of valores) {
    if (valor % 2 === 0) {
      if (pares.length < 5) {
        pares.push(valor);
      } else {
        console.log("Vetor de pares está cheio:", pares);
        pares.length = 0; // Limpa o vetor para continuar a entrada de valores
        pares.push(valor);
      }
    } else {
      if (impares.length < 5) {
        impares.push(valor);
      } else {
        console.log("Vetor de ímpares está cheio:", impares);
        impares.length = 0; // Limpa o vetor para continuar a entrada de valores
        impares.push(valor);
      }
    }
  }
  return [pares, impares];
}

const valores = [];
let contador = 0;
while (contador < 30) {
  const valor = parseInt(prompt(`Digite o ${contador + 1}º valor: `));
  valores.push(valor);
  contador++;
}

const [pares, impares] = separarParesImpares(valores);

console.log("Vetor de Pares:", pares);
console.log("Vetor de Ímpares:", impares);
