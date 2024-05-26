// 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
// o número de vezes que a string aparece no array.

function contarOcorrencias(array) {
  const resultado = {};
  for (const str of array) {
    if (resultado.hasOwnProperty(str)) {
      resultado[str]++;
    } else {
      resultado[str] = 1;
    }
  }
  return resultado;
}

const arrayDeStrings = ["maçã", "banana", "laranja", "maçã", "banana", "maçã"];

const ocorrencias = contarOcorrencias(arrayDeStrings);

console.log(JSON.stringify(ocorrencias)); // Deve imprimir {"maçã":3,"banana":2,"laranja":1}
