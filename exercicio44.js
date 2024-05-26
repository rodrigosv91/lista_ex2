// 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
// objeto e retorne esse número.

function contarStrings(obj) {
  let contador = 0;
  for (const propriedade in obj) {
    if (typeof obj[propriedade] === "string") {
      contador++;
    }
  }
  return contador;
}

const exemplo = {
  nome: "Maria",
  idade: 22,
  cidade: "Rio de Janeiro",
  hobbies: ["Futebol", "Música"],
  email: "maria@example.com",
};

const numeroDeStrings = contarStrings(exemplo);

console.log(numeroDeStrings);
