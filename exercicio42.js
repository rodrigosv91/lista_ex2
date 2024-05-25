// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.

const dados = {
  nome: "Ana",
  idade: 28,
  habilidades: ["JavaScript", "Python", "C++"],
  endereco: {
    rua: "Rua A",
    numero: 123,
  },
  hobbies: ["Leitura", "Caminhada", "Culinária"],
  telefone: "123-456-7890",
};

function extrairArrays(obj) {
  const resultado = {};
  for (const propriedade in obj) {
    if (obj[propriedade] instanceof Array) {
      resultado[propriedade] = obj[propriedade];
    }
  }
  return resultado;
}

const arraysExtraidos = extrairArrays(dados);

console.log(arraysExtraidos);
